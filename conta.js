/* CONTA.JS — cadastro e anúncios de demonstração.
   Não existe backend: os dados são salvos somente neste navegador. */

const area = document.querySelector('#area-usuario');
let fotoEscolhida = '';

function mostrarAcesso() {
  area.innerHTML = `
    <div class="acesso-layout"><div class="acesso-chamada"><span class="sobrancelha">PONTO DE PARTIDA</span>
      <h2>De um lado, a colheita.<br>Do outro, a descoberta.</h2>
      <p>Escolha como deseja explorar a experiência. Use informações inventadas, pois o site é somente uma demonstração acadêmica.</p>
      <p class="texto-pequeno">Não usamos senha nem criamos uma conta de verdade.</p></div>
      <form id="form-cadastro" class="formulario">
        <h2>Criar perfil demonstrativo</h2>
        <div class="campo"><label for="tipo-perfil">Você é...</label>
          <select id="tipo-perfil" name="tipo" required><option value="produtor">Produtor rural</option><option value="consumidor">Consumidor</option></select></div>
        <div class="campo"><label for="nome-perfil">Nome fictício</label>
          <input id="nome-perfil" name="nome" maxlength="60" placeholder="Ex.: Ana Exemplo" required></div>
        <div class="campo"><label for="cidade-perfil">Cidade do RJ</label>
          <select id="cidade-perfil" name="cidade" required>
            <option>Nova Friburgo</option><option>Teresópolis</option><option>Paty do Alferes</option>
            <option>São José de Ubá</option><option>Rio de Janeiro</option>
          </select></div>
        <button class="botao botao-solido" type="submit">Entrar no protótipo ↗</button>
      </form></div>`;

  document.querySelector('#form-cadastro').addEventListener('submit', evento => {
    evento.preventDefault();
    const dados = new FormData(evento.target);
    const usuario = {
      nome: String(dados.get('nome')).trim().slice(0, 60),
      tipo: String(dados.get('tipo')),
      cidade: String(dados.get('cidade'))
    };
    if (!usuario.nome) return;
    salvar('agro_usuario', usuario);
    if (usuario.tipo === 'produtor') {
      salvar('agro_produtor', {
        id: 'meu-produtor', nome: 'Produção de ' + usuario.nome.split(' ')[0],
        responsavel: usuario.nome, cidade: usuario.cidade, foco: 'Produção local',
        desde: 2026, foto: 'imagens/sitio-boa-colheita.jpg',
        historia: 'Perfil fictício criado durante uma demonstração do AgroConnect.'
      });
    }
    const pedidoPendente = new URLSearchParams(location.search).get('pedido');
    if (pedidoPendente && usuario.tipo === 'consumidor') {
      location.href = 'produtos.html?id=' + encodeURIComponent(pedidoPendente);
      return;
    }
    mostrarArea();
  });
}

function mostrarPainelProdutor(usuario) {
  const anuncios = ler('agro_anuncios', []).filter(p => p.produtor === 'meu-produtor');
  area.innerHTML = `<div class="painel-topo"><div><span class="sobrancelha">ESPAÇO DO PRODUTOR</span><h2>Olá, ${limparTexto(usuario.nome)}.</h2><p>Que tal apresentar sua próxima colheita?</p></div><button type="button" id="sair" class="botao botao-texto">Sair do perfil</button></div>
    <div class="painel-colunas"><form id="form-anuncio" class="formulario" enctype="multipart/form-data">
      <h2>Novo anúncio</h2><p class="texto-pequeno">Todos os anúncios são fictícios e ficam salvos apenas no navegador utilizado.</p>
      <div class="campo"><label for="nome-anuncio">Nome do alimento</label><input id="nome-anuncio" name="nome" required maxlength="65" placeholder="Ex.: Couve fresca"></div>
      <div class="form-linha"><div class="campo"><label for="categoria-anuncio">Categoria</label><select id="categoria-anuncio" name="categoria"><option>Verduras</option><option>Legumes</option><option>Frutas</option></select></div>
        <div class="campo"><label for="unidade-anuncio">Unidade</label><select id="unidade-anuncio" name="unidade"><option>kg</option><option>un.</option><option>maço</option><option>caixa</option></select></div></div>
      <div class="form-linha"><div class="campo"><label for="preco-anuncio">Preço (R$)</label><input id="preco-anuncio" name="preco" type="number" min="0.01" max="9999" step="0.01" required></div>
        <div class="campo"><label for="estoque-anuncio">Quantidade</label><input id="estoque-anuncio" name="estoque" type="number" min="1" max="10000" step="1" required></div></div>
      <div class="campo"><label for="descricao-anuncio">Descrição</label><textarea id="descricao-anuncio" name="descricao" rows="3" maxlength="210" placeholder="Conte algo sobre a sua colheita"></textarea></div>
      <div class="campo"><label for="foto-anuncio">Foto do alimento</label><input type="file" id="foto-anuncio" name="foto" accept=".jpg,.jpeg,.png,.webp,image/*">
        <small>Você pode enviar JPG, PNG ou WebP. A imagem é reduzida no navegador e convertida para JPEG para facilitar o armazenamento.</small>
        <img id="previa-foto" class="previa-foto" src="imagens/alface.jpg" alt="Prévia ilustrativa da imagem do anúncio" width="540" height="540"></div>
      <output id="aviso-anuncio" class="mensagem-campo" role="status"></output>
      <button class="botao botao-solido" type="submit">Publicar no protótipo ↗</button>
    </form><div class="meus-anuncios"><span class="sobrancelha">SUA PRODUÇÃO</span><h2>Meus anúncios (${anuncios.length})</h2>
      ${anuncios.length ? anuncios.map(p => `<article class="anuncio-lista"><img src="${limparTexto(p.foto)}" alt="Foto do anúncio ${limparTexto(p.nome)}" width="84" height="84"><div><h3>${limparTexto(p.nome)}</h3><span>${dinheiro(p.preco)} / ${limparTexto(p.unidade)}</span><a href="produtos.html?id=${encodeURIComponent(p.id)}">Ver anúncio ↗</a></div></article>`).join('') : '<p>Nenhum anúncio ainda. O formulário ao lado é o primeiro passo.</p>'}
      <a class="link-simples" href="produtos.html">Ir para a vitrine completa ↗</a></div></div>`;

  document.querySelector('#form-anuncio').addEventListener('submit', publicarAnuncio);
  document.querySelector('#foto-anuncio').addEventListener('change', carregarFoto);
}

function mostrarPainelConsumidor(usuario) {
  const pedidos = ler('agro_pedidos', []);
  const favoritos = ler('agro_favoritos', []);
  area.innerHTML = `<div class="painel-topo"><div><span class="sobrancelha">ESPAÇO DO CONSUMIDOR</span><h2>Olá, ${limparTexto(usuario.nome)}.</h2><p>Explore produtores e acompanhe suas solicitações demonstrativas.</p></div><button type="button" id="sair" class="botao botao-texto">Sair do perfil</button></div>
    <div class="painel-colunas"><section class="caixa-painel"><h2>Solicitações (${pedidos.length})</h2>
      ${pedidos.length ? pedidos.map(p => `<article class="pedido-item"><strong>${limparTexto(p.produto)}</strong><p>${p.quantidade} unidade(s) · ${dinheiro(p.total)} estimados</p></article>`).join('') : '<p>Nenhum pedido simulado até agora.</p>'}
      <a class="link-simples" href="produtos.html">Encontrar produtos ↗</a></section>
      <section class="caixa-painel"><h2>Favoritos (${favoritos.length})</h2>
      ${favoritos.length ? favoritos.map(id => { const p = buscarProduto(id); return p ? `<p><a href="produtos.html?id=${encodeURIComponent(id)}">${limparTexto(p.nome)} ↗</a></p>` : ''; }).join('') : '<p>Produtos favoritos aparecem aqui.</p>'}</section></div>`;
}

function mostrarArea() {
  const usuario = ler('agro_usuario', null);
  if (!usuario) { mostrarAcesso(); return; }
  if (usuario.tipo === 'produtor') mostrarPainelProdutor(usuario);
  else mostrarPainelConsumidor(usuario);

  const sair = document.querySelector('#sair');
  if (sair) sair.addEventListener('click', () => {
    localStorage.removeItem('agro_usuario');
    mostrarArea();
  });
}

// Reduz a imagem escolhida e a transforma em JPG, sem servidor.
function carregarFoto(evento) {
  const arquivo = evento.target.files[0];
  const aviso = document.querySelector('#aviso-anuncio');
  fotoEscolhida = '';
  if (!arquivo) return;
  if (!arquivo.type.startsWith('image/')) { aviso.textContent = 'Selecione um arquivo de imagem.'; return; }
  if (arquivo.size > 10 * 1024 * 1024) { aviso.textContent = 'Escolha uma imagem menor que 10 MB.'; return; }

  const leitor = new FileReader();
  leitor.onload = () => {
    const imagem = new Image();
    imagem.onload = () => {
      const proporcao = Math.min(1, 800 / Math.max(imagem.width, imagem.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(imagem.width * proporcao);
      canvas.height = Math.round(imagem.height * proporcao);
      canvas.getContext('2d').drawImage(imagem, 0, 0, canvas.width, canvas.height);
      fotoEscolhida = canvas.toDataURL('image/jpeg', 0.72);
      document.querySelector('#previa-foto').src = fotoEscolhida;
      aviso.textContent = 'Imagem pronta para o anúncio.';
    };
    imagem.src = leitor.result;
  };
  leitor.readAsDataURL(arquivo);
}

function publicarAnuncio(evento) {
  evento.preventDefault();
  const formulario = evento.target;
  const dados = new FormData(formulario);
  const nome = String(dados.get('nome')).trim();
  const preco = Number(dados.get('preco'));
  const estoque = Number(dados.get('estoque'));
  const categoria = String(dados.get('categoria'));
  if (!nome || preco <= 0 || !Number.isInteger(estoque) || estoque < 1) return;

  const fotoPadrao = { Frutas: 'imagens/morango.jpg', Legumes: 'imagens/cenoura.jpg', Verduras: 'imagens/alface.jpg' };
  const anuncio = {
    id: 'novo-' + Date.now(), produtor: 'meu-produtor', nome, categoria, preco, estoque,
    unidade: String(dados.get('unidade')), descricao: String(dados.get('descricao') || 'Produção local.').slice(0, 210),
    foto: fotoEscolhida || fotoPadrao[categoria]
  };
  const anuncios = ler('agro_anuncios', []);
  anuncios.unshift(anuncio);
  if (!salvar('agro_anuncios', anuncios)) {
    document.querySelector('#aviso-anuncio').textContent = 'Não há espaço para salvar mais imagens neste navegador.';
    return;
  }
  fotoEscolhida = '';
  mostrarArea();
  const aviso = document.querySelector('#aviso-anuncio');
  if (aviso) aviso.textContent = 'Anúncio incluído na vitrine demonstrativa!';
}

mostrarArea();
