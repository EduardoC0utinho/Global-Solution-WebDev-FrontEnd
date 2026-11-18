/* VITRINE.JS — apresenta produtos e produtores; filtra, favorita e simula pedidos.*/

// Retorna o HTML de um produto. O mesmo cartão é usado no início e na vitrine.
function cartaoProduto(produto) {
  const favorito = ler('agro_favoritos', []).includes(produto.id);
  const local = buscarProdutor(produto.produtor);
  return `
    <article class="cartao-produto">
      <a class="foto-produto" href="produtos.html?id=${encodeURIComponent(produto.id)}">
        <img src="${limparTexto(produto.foto)}" alt="Imagem ilustrativa de ${limparTexto(produto.nome)}" loading="lazy" width="540" height="540">
        <span class="categoria-foto">${limparTexto(produto.categoria)}</span>
      </a>
      <div class="cartao-conteudo">
        <div class="linha-categoria"><span>${limparTexto(local?.cidade || produto.cidade || 'RJ')} / RJ</span><button type="button" class="favoritar" data-favorito="${limparTexto(produto.id)}" aria-pressed="${favorito}" aria-label="${favorito ? 'Remover dos' : 'Adicionar aos'} favoritos">${favorito ? '♥' : '♡'}</button></div>
        <h3><a href="produtos.html?id=${encodeURIComponent(produto.id)}">${limparTexto(produto.nome)}</a></h3>
        <p class="produtor-pequeno">${limparTexto(nomeProdutor(produto.produtor))}</p>
        <div class="preco-acao"><strong>${dinheiro(produto.preco)}<small> / ${limparTexto(produto.unidade)}</small></strong><a href="produtos.html?id=${encodeURIComponent(produto.id)}" aria-label="Ver ${limparTexto(produto.nome)}">Ver ↗</a></div>
      </div>
    </article>`;
}

function mostrarProdutos() {
  const destaque = document.querySelector('#destaques');
  if (destaque) destaque.innerHTML = todosProdutos().slice(0, 4).map(cartaoProduto).join('');

  const lista = document.querySelector('#lista-produtos');
  if (!lista) return;

  const busca = document.querySelector('#busca').value.toLowerCase().trim();
  const categoria = document.querySelector('#categoria').value;
  const cidade = document.querySelector('#cidade').value;

  const resultado = todosProdutos().filter(produto => {
    const nome = produto.nome.toLowerCase().includes(busca);
    const tipo = !categoria || produto.categoria === categoria;
    const cidadeProduto = buscarProdutor(produto.produtor)?.cidade || produto.cidade;
    const regiao = !cidade || cidadeProduto === cidade;
    return nome && tipo && regiao;
  });

  lista.innerHTML = resultado.length ? resultado.map(cartaoProduto).join('') :
    '<p class="sem-resultado">Nenhum alimento encontrado. Experimente outro filtro.</p>';
  document.querySelector('#total-produtos').textContent = resultado.length + ' resultado(s)';
}

// Favoritos: delegação de eventos, para funcionar também nos cartões criados por JS.
document.addEventListener('click', evento => {
  const botao = evento.target.closest('[data-favorito]');
  if (!botao) return;
  const id = botao.dataset.favorito;
  let favoritos = ler('agro_favoritos', []);
  favoritos = favoritos.includes(id) ? favoritos.filter(item => item !== id) : [...favoritos, id];
  salvar('agro_favoritos', favoritos);
  mostrarProdutos();
});

// Perfis de produtores (todos os dados são exemplos fictícios).
function cartaoProdutor(produtor) {
  return `<article class="cartao-produtor">
    <a href="produtores.html?id=${encodeURIComponent(produtor.id)}"><img src="${limparTexto(produtor.foto)}" alt="Imagem ilustrativa da produção de ${limparTexto(produtor.foco)}" width="960" height="630" loading="lazy"></a>
    <div class="produtor-corpo"><span class="sobrancelha">${limparTexto(produtor.cidade)} / RJ</span><h2>${limparTexto(produtor.nome)}</h2>
    <p>${limparTexto(produtor.foco)}</p><a class="link-simples" href="produtores.html?id=${encodeURIComponent(produtor.id)}">Conhecer perfil ↗</a></div></article>`;
}

function mostrarProdutores() {
  const lista = document.querySelector('#lista-produtores');
  if (!lista) return;
  const particular = ler('agro_produtor', null);
  lista.innerHTML = [...PRODUTORES, ...(particular ? [particular] : [])].map(cartaoProdutor).join('');
}

function mostrarDetalheProdutor() {
  const secao = document.querySelector('#detalhe-produtor');
  if (!secao) return;
  const id = new URLSearchParams(location.search).get('id');
  const produtor = buscarProdutor(id);
  if (!produtor) { secao.innerHTML = '<p>Produtor não encontrado. <a href="produtores.html">Voltar à lista</a>.</p>'; return; }
  const produtos = todosProdutos().filter(item => item.produtor === id);
  secao.innerHTML = `<a class="voltar" href="produtores.html">← Todos os produtores</a>
    <div class="perfil-produtor"><img src="${limparTexto(produtor.foto)}" alt="Imagem ilustrativa da produção de ${limparTexto(produtor.foco)}" width="960" height="630"><div><span class="sobrancelha">${limparTexto(produtor.cidade)} / RIO DE JANEIRO</span><h1>${limparTexto(produtor.nome)}</h1><p>${limparTexto(produtor.historia)}</p><dl><div><dt>Responsável</dt><dd>${limparTexto(produtor.responsavel)}</dd></div><div><dt>Produção</dt><dd>${limparTexto(produtor.foco)}</dd></div></dl><p class="texto-pequeno">Perfil de demonstração: não representa uma propriedade verificada.</p></div></div>
    <div class="cabeca-secao"><div><span class="sobrancelha">VITRINE DO PRODUTOR</span><h2>Da propriedade para sua mesa.</h2></div></div>
    <div class="grade-produtos">${produtos.length ? produtos.map(cartaoProduto).join('') : '<p>Ainda não há anúncios cadastrados.</p>'}</div>`;
}

function mostrarDetalheProduto() {
  const secao = document.querySelector('#detalhe-produto');
  if (!secao) return;
  const id = new URLSearchParams(location.search).get('id');
  const produto = buscarProduto(id);
  if (!produto) { secao.innerHTML = '<p>Produto não encontrado. <a href="produtos.html">Voltar à vitrine</a>.</p>'; return; }
  const produtor = buscarProdutor(produto.produtor);
  secao.innerHTML = `<a class="voltar" href="produtos.html">← Voltar à vitrine</a>
    <div class="produto-detalhe"><img src="${limparTexto(produto.foto)}" alt="Imagem ilustrativa de ${limparTexto(produto.nome)}" width="540" height="540"><div>
    <span class="sobrancelha">${limparTexto(produto.categoria)} / ${limparTexto(produtor?.cidade || 'RJ')}</span><h1>${limparTexto(produto.nome)}</h1>
    <p>${limparTexto(produto.descricao)}</p><p>Produzido por: <a href="produtores.html?id=${encodeURIComponent(produto.produtor)}">${limparTexto(nomeProdutor(produto.produtor))}</a></p>
    <p>Estoque demonstrativo: <strong>${produto.estoque} ${limparTexto(produto.unidade)}</strong></p>
    <div class="produto-compra"><label for="quantidade-compra">Quantidade (${limparTexto(produto.unidade)})</label>
    <input id="quantidade-compra" type="number" min="1" max="${produto.estoque}" value="1" step="1">
    <div class="resumo-preco">Total previsto: <output id="total-compra">${dinheiro(produto.preco)}</output></div>
    <p class="mensagem-campo" id="aviso-compra" role="status"></p><button id="pedir-produto" type="button" class="botao botao-solido">Solicitar (simulação) ↗</button></div>
    <p class="texto-pequeno">Nenhum pagamento ou entrega real será realizado.</p></div></div>`;

  const quantidade = document.querySelector('#quantidade-compra');
  const botaoPedir = document.querySelector('#pedir-produto');
  const aviso = document.querySelector('#aviso-compra');

  function recalcular() {
    const qtd = Number(quantidade.value);
    const valido = Number.isInteger(qtd) && qtd >= 1 && qtd <= produto.estoque;
    botaoPedir.disabled = !valido;
    aviso.textContent = valido ? '' : `Escolha de 1 a ${produto.estoque} unidade(s).`;
    document.querySelector('#total-compra').textContent = valido ? dinheiro(qtd * produto.preco) : '—';
  }

  quantidade.addEventListener('input', recalcular);
  botaoPedir.addEventListener('click', () => {
    const usuario = ler('agro_usuario', null);
    if (!usuario) {
      location.href = 'minha-area.html?pedido=' + encodeURIComponent(produto.id);
      return;
    }
    if (usuario.tipo !== 'consumidor') {
      aviso.textContent = 'Para simular uma compra, entre como consumidor.';
      return;
    }
    const qtd = Number(quantidade.value);
    if (!Number.isInteger(qtd) || qtd < 1 || qtd > produto.estoque) return;
    const pedidos = ler('agro_pedidos', []);
    pedidos.unshift({ id: Date.now(), produto: produto.nome, quantidade: qtd, total: qtd * produto.preco });
    if (salvar('agro_pedidos', pedidos)) location.href = 'minha-area.html?sucesso=1';
    else aviso.textContent = 'Não foi possível salvar a solicitação neste navegador.';
  });
}

// Os filtros atualizam sem recarregar a página.
['busca', 'categoria', 'cidade'].forEach(id => {
  const campo = document.getElementById(id);
  if (campo) campo.addEventListener(id === 'busca' ? 'input' : 'change', mostrarProdutos);
});
const limpar = document.getElementById('limpar-filtros');
if (limpar) limpar.addEventListener('click', () => {
  document.querySelector('#busca').value = '';
  document.querySelector('#categoria').value = '';
  document.querySelector('#cidade').value = '';
  mostrarProdutos();
});

/* A mesma página exibe a lista OU os detalhes, conforme o parâmetro ?id=. */
const idNaUrl = new URLSearchParams(location.search).get('id');
if (idNaUrl) {
  if (document.body.dataset.page === 'produtos') {
    document.querySelector('#secao-catalogo').hidden = true;
    document.querySelector('#detalhe-produto').hidden = false;
  }
  if (document.body.dataset.page === 'produtores') {
    document.querySelector('#secao-produtores').hidden = true;
    document.querySelector('#detalhe-produtor').hidden = false;
  }
}

mostrarProdutos();
mostrarProdutores();
mostrarDetalheProdutor();
mostrarDetalheProduto();
