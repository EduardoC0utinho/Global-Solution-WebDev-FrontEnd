/* Elementos compartilhados: evitam copiar menu e rodapé em cada HTML. */
function montarCabecalhoRodape() {
  const pagina = document.body.dataset.page;
  const itens = [
    ['index', 'Início', 'index.html'],
    ['produtos', 'Vitrine', 'produtos.html'],
    ['produtores', 'Produtores', 'produtores.html'],
    ['safras', 'Safras RJ', 'safras.html'],
    ['sobre', 'O AgroConnect', 'index.html#quem-somos'],
    ['minha-area', 'Minha área', 'minha-area.html']
  ];
  const links = itens.map(([id, titulo, href]) =>
    `<a href="${href}" ${pagina === id ? 'aria-current="page"' : ''}>${titulo}</a>`
  ).join('');
  const cabe = document.getElementById('cabecalho-compartilhado');
  if (cabe) cabe.outerHTML = `
    <div class="ribbon"><span>AGROCONNECT / EDIÇÃO FLUMINENSE</span><span>PROTÓTIPO UNIVERSITÁRIO · 2026</span></div>
    <header class="cabecalho"><div class="limite cabecalho-interno">
      <a class="marca" href="index.html" aria-label="AgroConnect, ir ao início">
        <img src="imagens/logo-icone.webp" alt="" width="43" height="43">
        <span><strong>AgroConnect</strong><small>Conectando quem produz</small></span>
      </a>
      <button type="button" class="botao-menu" id="botao-menu" aria-controls="menu-principal" aria-expanded="false">Menu <span aria-hidden="true">≡</span></button>
      <nav id="menu-principal" class="menu" aria-label="Menu principal">${links}</nav>
      <div class="tema-controle"><span class="tema-descricao" id="nome-tema">Modo claro</span>
        <button type="button" class="agro-sky-switch" id="botao-tema" role="switch" aria-checked="false" aria-label="Ativar modo escuro" title="Alternar tema">
          <span class="sky-day-cloud" aria-hidden="true"></span><span class="sky-day-cloud c2" aria-hidden="true"></span>
          <span class="sky-star s1" aria-hidden="true"></span><span class="sky-star s2" aria-hidden="true"></span><span class="sky-star s3" aria-hidden="true"></span>
          <span class="sky-star s4" aria-hidden="true"></span><span class="sky-star s5" aria-hidden="true"></span>
          <span class="sky-celestial" aria-hidden="true"></span>
        </button>
      </div>
    </div></header>`;
  const rodape = document.getElementById('rodape-compartilhado');
  if (rodape) rodape.outerHTML = `<footer class="rodape">
    <div class="limite rodape-grade"><div><a class="rodape-marca" href="index.html">AgroConnect<span>.</span></a>
      <p>Mais encontros entre quem planta e quem escolhe alimentos com origem.</p></div>
      <div><strong>Conheça</strong><a href="produtos.html">Vitrine</a><a href="produtores.html">Produtores</a><a href="safras.html">Safras do RJ</a></div>
      <div><strong>Sobre este projeto</strong><a href="index.html#quem-somos">O AgroConnect</a><a href="minha-area.html">Área demonstrativa</a></div></div>
    <div class="limite rodape-nota">FIAP · Global Solution CitizenTech 2026 / Projeto acadêmico. Perfis, imagens e pedidos demonstrativos.</div>
  </footer>`;
}
montarCabecalhoRodape();

/* BASE.JS — pequenas funções usadas em várias páginas.
   Aqui ficam o menu, o tema e as funções de salvar/ler dados locais. */

// Salva um objeto ou uma lista no navegador.
function salvar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
    return true;
  } catch (erro) {
    return false;
  }
}

// Recupera os dados salvos. Se ainda não existirem, usa o valor padrão.
function ler(chave, padrao) {
  try {
    const texto = localStorage.getItem(chave);
    return texto ? JSON.parse(texto) : padrao;
  } catch (erro) {
    return padrao;
  }
}

// Evita que o texto digitado por alguém vire código HTML.
function limparTexto(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, simbolo => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[simbolo]));
}

// Formata valores no padrão brasileiro, por exemplo R$ 5,50.
function dinheiro(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL'
  });
}

// Junta os anúncios de exemplo e os anúncios criados durante o teste.
function todosProdutos() {
  return [...ler('agro_anuncios', []), ...PRODUTOS_EXEMPLO];
}

function buscarProduto(id) {
  return todosProdutos().find(item => item.id === id);
}

function buscarProdutor(id) {
  if (id === 'meu-produtor') return ler('agro_produtor', null);
  return PRODUTORES.find(item => item.id === id);
}

function nomeProdutor(id) {
  return buscarProdutor(id)?.nome || 'Produtor demonstrativo';
}

// Tema claro/escuro com um único atributo no elemento <html>.
const botaoTema = document.querySelector('#botao-tema');
const temaAnterior = ler('agro_tema', 'claro') === 'escuro' ? 'escuro' : 'claro';
document.documentElement.dataset.tema = temaAnterior;

function atualizarBotaoTema() {
  if (!botaoTema) return;
  const escuro = document.documentElement.dataset.tema === 'escuro';
  // O desenho de sol e lua é feito com CSS. Não use textContent aqui.
  botaoTema.setAttribute('aria-checked', String(escuro));
  botaoTema.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
  botaoTema.title = escuro ? 'Ativar modo claro' : 'Ativar modo escuro';
  const nome = document.getElementById('nome-tema');
  if (nome) nome.textContent = escuro ? 'Modo escuro' : 'Modo claro';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = escuro ? '#111f19' : '#f2efe5';
}

if (botaoTema) {
  atualizarBotaoTema();
  botaoTema.addEventListener('click', () => {
    const atual = document.documentElement.dataset.tema;
    const novo = atual === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.dataset.tema = novo;
    salvar('agro_tema', novo);
    atualizarBotaoTema();
  });
}

// Menu para telas pequenas.
const botaoMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#menu-principal');
if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });
}


// Usa a fotografia original da V.6 na capa. Sem internet, exibe uma imagem ilustrativa JPG local da V.9.
const fotoCapa = document.getElementById('foto-capa-v6');
if (fotoCapa) {
  function usarFotoLocal() {
    fotoCapa.src = fotoCapa.dataset.fallback;
  }
  fotoCapa.addEventListener('error', usarFotoLocal, { once: true });
  if (fotoCapa.complete && fotoCapa.naturalWidth === 0) usarFotoLocal();
}
