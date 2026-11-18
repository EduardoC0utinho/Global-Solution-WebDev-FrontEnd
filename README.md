# AgroConnect 

Protótipo acadêmico da FIAP / Global Solution CitizenTech 2026. Os perfis, anúncios e pedidos são demonstrativos; sem banco de dados ou pagamento real.

## Como abrir

1. Extraia **toda a pasta** do ZIP. Não abra apenas o HTML dentro da janela de visualização do ZIP.
2. Abra `index.html` no navegador. Para testar tudo com navegação entre arquivos, recomendamos no VS Code a extensão **Live Server**, que mantém todos os arquivos na mesma origem.
3. Não mude os arquivos `.jpg` de lugar: as páginas e os dados se referem à pasta `imagens/`.

## Páginas

- `index.html` — abertura aprovada da V.6, destaques, estatísticas e **Quem somos** (agora seção desta página).
- `produtos.html` — vitrine e detalhes de um produto ao abrir `produtos.html?id=p1`.
- `produtores.html` — lista de produtores e perfil individual em `produtores.html?id=s1`.
- `safras.html` — calendário de sazonalidade para consumidores do RJ.
- `minha-area.html` — perfis demonstrativos, pedidos e anúncios com foto.

## Código (todos na pasta principal)

- `style.css` — visual e responsividade.
- `script.js` — cabeçalho/rodapé compartilhados, tema, menu e funções simples.
- `dados.js` — objetos dos produtores e produtos, e tabela de safras.
- `vitrine.js` — listagem, busca, favoritos, detalhes, cálculo e pedidos fictícios.
- `safras.js` — filtros por mês, estação e tipo.
- `conta.js` — cadastros fictícios e fotos dos anúncios.
- `imagens/*.jpg` — fotos **ilustrativas**, entregues junto com o site.

## Observações

A foto da capa é referenciada por URL externa (Unsplash) para manter exatamente a escolhida. Sem internet, `script.js` troca automaticamente por `imagens/sitio-boa-colheita.jpg`. Todas as demais imagens de produtos e safras são arquivos locais.

As imagens ilustrativas não são fotos verificadas do Rio de Janeiro. Os meses de safra são uma referência de consumo SES-RJ/Firjan, não confirmação de origem ou disponibilidade.

O `localStorage` salva demonstrações apenas no navegador atual. Não é um banco de dados e pode ter limitações quando arquivos são abertos diretamente pelo disco.

