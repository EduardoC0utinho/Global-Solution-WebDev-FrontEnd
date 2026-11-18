/* SAFRAS.JS — calendário sazonal do Rio de Janeiro.
   Os meses vêm do arquivo dados.js, que foi organizado a partir do guia SES-RJ/Firjan. */

const nomesMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const estacoes = [
  { id: 'verao', nome: 'Verão', meses: [12, 1, 2] },
  { id: 'outono', nome: 'Outono', meses: [3, 4, 5] },
  { id: 'inverno', nome: 'Inverno', meses: [6, 7, 8] },
  { id: 'primavera', nome: 'Primavera', meses: [9, 10, 11] }
];

let estacaoAtual = 'primavera';

function definirEstacao(id) {
  estacaoAtual = id;
  const estacao = estacoes.find(item => item.id === id);
  const meses = document.querySelector('#mes-safra');
  meses.innerHTML = '<option value="">Todos da estação</option>';
  estacao.meses.forEach(numero => {
    meses.innerHTML += `<option value="${numero}">${nomesMeses[numero - 1]}</option>`;
  });

  document.querySelectorAll('[data-estacao]').forEach(botao => {
    const ativo = botao.dataset.estacao === id;
    botao.classList.toggle('ativo', ativo);
    botao.setAttribute('aria-pressed', String(ativo));
  });

  mostrarSafras();
}

function cartaoSafra(alimento) {
  // Destaca os meses marcados na tabela regional.
  const meses = nomesMeses.map((nome, indice) => {
    const existeSafra = alimento.meses.includes(indice + 1);
    return `<span class="mes-tabela ${existeSafra ? 'em-safra' : ''}" title="${nome}: ${existeSafra ? 'marcado' : 'não marcado'}">${nome}</span>`;
  }).join('');

  const visual = `<img src="${limparTexto(alimento.imagem)}" alt="Imagem ilustrativa de ${limparTexto(alimento.nome)}" width="540" height="540" loading="lazy">`;

  return `<article class="cartao-safra">
    ${visual}
    <div class="safra-conteudo"><span class="sobrancelha">${limparTexto(alimento.categoria)}</span>
      <h3>${limparTexto(alimento.nome)}</h3><p>${limparTexto(alimento.dica)}</p>
      <div class="linha-meses" aria-label="Meses destacados: ${alimento.meses.map(n => nomesMeses[n - 1]).join(', ')}">${meses}</div>
    </div>
  </article>`;
}

function mostrarSafras() {
  const estacao = estacoes.find(item => item.id === estacaoAtual);
  const mes = Number(document.querySelector('#mes-safra').value);
  const categoria = document.querySelector('#tipo-safra').value;
  const busca = document.querySelector('#busca-safra').value.toLowerCase().trim();

  const filtrados = ALIMENTOS_SAFRA.filter(alimento => {
    const periodo = mes ? alimento.meses.includes(mes) :
      alimento.meses.some(numero => estacao.meses.includes(numero));
    const tipo = !categoria || alimento.categoria === categoria;
    const nome = alimento.nome.toLowerCase().includes(busca);
    return periodo && tipo && nome;
  });

  document.querySelector('#titulo-estacao').textContent = 'Safras de ' + estacao.nome;
  document.querySelector('#quantidade-safra').textContent = filtrados.length + ' alimento(s)';
  document.querySelector('#lista-safras').innerHTML = filtrados.length ?
    filtrados.map(cartaoSafra).join('') :
    '<p class="sem-resultado">Nenhum alimento nesse período. Experimente outro mês ou categoria.</p>';
}

document.querySelectorAll('[data-estacao]').forEach(botao => {
  botao.addEventListener('click', () => definirEstacao(botao.dataset.estacao));
});
['mes-safra', 'tipo-safra', 'busca-safra'].forEach(id => {
  const campo = document.querySelector('#' + id);
  campo.addEventListener(id === 'busca-safra' ? 'input' : 'change', mostrarSafras);
});

definirEstacao('primavera');
