/* DADOS DO SITE
   Este arquivo guarda as informações fictícias da vitrine e os meses da
   tabela de safra. Separar os dados facilita corrigir produtos e preços. */

const PRODUTORES = [
  {
    "id": "s1",
    "nome": "Sítio Boa Colheita",
    "responsavel": "Ana Ribeiro",
    "cidade": "Nova Friburgo",
    "foco": "Hortaliças e legumes",
    "desde": 2018,
    "foto": "imagens/sitio-boa-colheita.jpg",
    "historia": "Neste exemplo fictício da Região Serrana, uma família organiza a produção semanal para alcançar compradores próximos."
  },
  {
    "id": "s2",
    "nome": "Horta da Serra",
    "responsavel": "Carlos Nogueira",
    "cidade": "Teresópolis",
    "foco": "Raízes e verduras",
    "desde": 2020,
    "foto": "imagens/horta-da-serra.jpg",
    "historia": "Entre canteiros e colheitas sazonais, este perfil fictício busca tornar a venda direta mais simples."
  },
  {
    "id": "s3",
    "nome": "Fazenda Primavera",
    "responsavel": "Marina Alves",
    "cidade": "Paty do Alferes",
    "foco": "Frutas da estação",
    "desde": 2016,
    "foto": "imagens/fazenda-primavera.jpg",
    "historia": "Esta história fictícia valoriza produtos de época e parcerias locais com pequenos negócios."
  },
  {
    "id": "s4",
    "nome": "Recanto do Vale",
    "responsavel": "Pedro Lima",
    "cidade": "São José de Ubá",
    "foco": "Frutas e tubérculos",
    "desde": 2019,
    "foto": "imagens/recanto-do-vale.jpg",
    "historia": "Um perfil fictício de produção diversificada com pedidos programados para a região."
  }
];

const PRODUTOS_EXEMPLO = [
  {
    "id": "p1",
    "produtor": "s1",
    "nome": "Tomate italiano",
    "categoria": "Legumes",
    "preco": 7.9,
    "unidade": "kg",
    "estoque": 25,
    "foto": "imagens/tomate-italiano.jpg",
    "descricao": "Colheita recente de tomate para a região."
  },
  {
    "id": "p2",
    "produtor": "s2",
    "nome": "Cenoura fresca",
    "categoria": "Legumes",
    "preco": 5.5,
    "unidade": "kg",
    "estoque": 18,
    "foto": "imagens/cenoura.jpg",
    "descricao": "Cenouras selecionadas para vendas locais."
  },
  {
    "id": "p3",
    "produtor": "s1",
    "nome": "Alface crespa",
    "categoria": "Verduras",
    "preco": 3.5,
    "unidade": "un.",
    "estoque": 40,
    "foto": "imagens/alface-crespa.jpg",
    "descricao": "Alface fresca para a mesa de quem mora perto."
  },
  {
    "id": "p4",
    "produtor": "s3",
    "nome": "Banana prata",
    "categoria": "Frutas",
    "preco": 6.9,
    "unidade": "kg",
    "estoque": 35,
    "foto": "imagens/banana-prata.jpg",
    "descricao": "Bananas selecionadas segundo disponibilidade."
  },
  {
    "id": "p5",
    "produtor": "s3",
    "nome": "Morango",
    "categoria": "Frutas",
    "preco": 17.9,
    "unidade": "caixa",
    "estoque": 14,
    "foto": "imagens/morango.jpg",
    "descricao": "Morangos de produção em pequenos lotes."
  },
  {
    "id": "p6",
    "produtor": "s4",
    "nome": "Laranja pera",
    "categoria": "Frutas",
    "preco": 5.9,
    "unidade": "kg",
    "estoque": 30,
    "foto": "imagens/laranja-pera.jpg",
    "descricao": "Laranjas para o consumo do dia a dia."
  },
  {
    "id": "p7",
    "produtor": "s4",
    "nome": "Batata-doce",
    "categoria": "Legumes",
    "preco": 6.4,
    "unidade": "kg",
    "estoque": 21,
    "foto": "imagens/batata-doce.jpg",
    "descricao": "Batatas-doces vendidas em quantidades flexíveis."
  },
  {
    "id": "p8",
    "produtor": "s2",
    "nome": "Mix de verduras",
    "categoria": "Verduras",
    "preco": 12,
    "unidade": "maço",
    "estoque": 15,
    "foto": "imagens/mix-verduras.jpg",
    "descricao": "Seleção de folhas conforme disponibilidade."
  }
  ,
  {
    "id": "p9",
    "produtor": "s3",
    "nome": "Banana-da-terra",
    "categoria": "Frutas",
    "preco": 8.7,
    "unidade": "kg",
    "estoque": 16,
    "foto": "imagens/banana-da-terra.jpg",
    "descricao": "Variedade de banana-da-terra em anúncio demonstrativo."
  },
  {
    "id": "p10",
    "produtor": "s2",
    "nome": "Alface-americana",
    "categoria": "Verduras",
    "preco": 4.4,
    "unidade": "un.",
    "estoque": 26,
    "foto": "imagens/alface-americana.jpg",
    "descricao": "Alface-americana de folhas fechadas, anúncio demonstrativo."
  },
  {
    "id": "p11",
    "produtor": "s1",
    "nome": "Tomate-cereja",
    "categoria": "Legumes",
    "preco": 11.5,
    "unidade": "caixa",
    "estoque": 12,
    "foto": "imagens/tomate-cereja.jpg",
    "descricao": "Tomates pequenos em embalagem de demonstração."
  },
  {
    "id": "p12",
    "produtor": "s1",
    "nome": "Brócolis",
    "categoria": "Verduras",
    "preco": 7.9,
    "unidade": "un.",
    "estoque": 13,
    "foto": "imagens/brocolis.jpg",
    "descricao": "Brócolis em destaque na vitrine demonstrativa."
  },
  {
    "id": "p13",
    "produtor": "s2",
    "nome": "Beterraba",
    "categoria": "Legumes",
    "preco": 5.6,
    "unidade": "kg",
    "estoque": 21,
    "foto": "imagens/beterraba.jpg",
    "descricao": "Raízes de beterraba, anúncio demonstrativo."
  },
  {
    "id": "p14",
    "produtor": "s4",
    "nome": "Mandioca",
    "categoria": "Legumes",
    "preco": 6.8,
    "unidade": "kg",
    "estoque": 19,
    "foto": "imagens/mandioca.jpg",
    "descricao": "Mandioca em anúncio fictício, disponibilidade estimada."
  }];

const ALIMENTOS_SAFRA = [
  {
    "nome": "Abacate",
    "categoria": "Frutas",
    "meses": [
      2,
      3,
      4,
      5
    ],
    "dica": "Escolha conforme a firmeza e a maturação.",
    "imagem": "imagens/abacate.jpg",
    "comFoto": true
  },
  {
    "nome": "Abacaxi",
    "categoria": "Frutas",
    "meses": [
      1,
      3,
      9,
      10,
      11,
      12
    ],
    "dica": "Aroma e integridade ajudam na escolha.",
    "imagem": "imagens/abacaxi.jpg",
    "comFoto": true
  },
  {
    "nome": "Banana-nanica",
    "categoria": "Frutas",
    "meses": [
      3,
      9,
      10,
      11
    ],
    "dica": "Fruta sensível ao transporte; observe a casca.",
    "imagem": "imagens/banana-nanica.jpg",
    "comFoto": true
  },
  {
    "nome": "Banana-prata",
    "categoria": "Frutas",
    "meses": [
      10,
      11
    ],
    "dica": "O calendário varia com a região de origem.",
    "imagem": "imagens/banana-prata.jpg",
    "comFoto": true
  },
  {
    "nome": "Caqui",
    "categoria": "Frutas",
    "meses": [
      4,
      5
    ],
    "dica": "O ponto de maturação varia conforme a variedade.",
    "imagem": "imagens/caqui.jpg",
    "comFoto": true
  },
  {
    "nome": "Figo",
    "categoria": "Frutas",
    "meses": [
      1
    ],
    "dica": "Fruto delicado, requer bom armazenamento.",
    "imagem": "imagens/figo.jpg",
    "comFoto": true
  },
  {
    "nome": "Goiaba",
    "categoria": "Frutas",
    "meses": [
      3,
      4
    ],
    "dica": "Observe a firmeza e a presença de danos.",
    "imagem": "imagens/goiaba.jpg",
    "comFoto": true
  },
  {
    "nome": "Jabuticaba",
    "categoria": "Frutas",
    "meses": [
      9,
      10
    ],
    "dica": "Consuma em tempo curto quando madura.",
    "imagem": "imagens/jabuticaba.jpg",
    "comFoto": true
  },
  {
    "nome": "Laranja-pera",
    "categoria": "Frutas",
    "meses": [
      1,
      8,
      9
    ],
    "dica": "Prefira casca íntegra e armazenamento adequado.",
    "imagem": "imagens/laranja-pera.jpg",
    "comFoto": true
  },
  {
    "nome": "Manga",
    "categoria": "Frutas",
    "meses": [
      11,
      12
    ],
    "dica": "Diferentes cultivares podem ter meses distintos.",
    "imagem": "imagens/manga.jpg",
    "comFoto": true
  },
  {
    "nome": "Melancia",
    "categoria": "Frutas",
    "meses": [
      1,
      11,
      12
    ],
    "dica": "Maturação e manuseio influenciam a qualidade.",
    "imagem": "imagens/melancia.jpg",
    "comFoto": true
  },
  {
    "nome": "Morango",
    "categoria": "Frutas",
    "meses": [
      8
    ],
    "dica": "Fruta sensível: preserve refrigerada.",
    "imagem": "imagens/morango.jpg",
    "comFoto": true
  },
  {
    "nome": "Tangerina",
    "categoria": "Frutas",
    "meses": [
      5,
      6,
      7,
      8
    ],
    "dica": "Observe perfume e integridade da casca.",
    "imagem": "imagens/tangerina.jpg",
    "comFoto": true
  },
  {
    "nome": "Abóbora",
    "categoria": "Legumes",
    "meses": [
      1,
      2,
      3,
      4,
      5
    ],
    "dica": "Verifique a firmeza e o estado da casca.",
    "imagem": "imagens/abobora.jpg",
    "comFoto": true
  },
  {
    "nome": "Abobrinha",
    "categoria": "Legumes",
    "meses": [
      1,
      3,
      4,
      5
    ],
    "dica": "Prefira sem amassados ou machucados.",
    "imagem": "imagens/abobrinha-italiana.jpg",
    "comFoto": true
  },
  {
    "nome": "Batata-doce",
    "categoria": "Legumes",
    "meses": [
      3,
      4,
      5,
      6,
      10,
      11
    ],
    "dica": "Armazene em lugar fresco e ventilado.",
    "imagem": "imagens/batata-doce.jpg",
    "comFoto": true
  },
  {
    "nome": "Beterraba",
    "categoria": "Legumes",
    "meses": [
      1,
      3,
      4,
      5,
      10,
      11,
      12
    ],
    "dica": "Observe a integridade das raízes.",
    "imagem": "imagens/beterraba.jpg",
    "comFoto": true
  },
  {
    "nome": "Cenoura",
    "categoria": "Legumes",
    "meses": [
      5,
      6,
      7,
      8
    ],
    "dica": "Prefira raízes firmes, sem danos.",
    "imagem": "imagens/cenoura.jpg",
    "comFoto": true
  },
  {
    "nome": "Ervilha",
    "categoria": "Legumes",
    "meses": [
      6,
      7,
      8,
      9,
      10
    ],
    "dica": "Conserve em condições adequadas.",
    "imagem": "imagens/ervilha.jpg",
    "comFoto": true
  },
  {
    "nome": "Inhame",
    "categoria": "Legumes",
    "meses": [
      4,
      6,
      7,
      8,
      9
    ],
    "dica": "Conserve em local seco antes do preparo.",
    "imagem": "imagens/inhame.jpg",
    "comFoto": true
  },
  {
    "nome": "Mandioca",
    "categoria": "Legumes",
    "meses": [
      5,
      6,
      7,
      8,
      9
    ],
    "dica": "Raiz delicada após a colheita; avalie conservação.",
    "imagem": "imagens/mandioca.jpg",
    "comFoto": true
  },
  {
    "nome": "Milho-verde",
    "categoria": "Legumes",
    "meses": [
      2
    ],
    "dica": "Avalie as espigas e a qualidade dos grãos.",
    "imagem": "imagens/milho-verde.jpg",
    "comFoto": true
  },
  {
    "nome": "Pepino",
    "categoria": "Legumes",
    "meses": [
      1,
      2,
      3,
      7,
      11
    ],
    "dica": "Prefira casca íntegra e firmeza.",
    "imagem": "imagens/pepino.jpg",
    "comFoto": true
  },
  {
    "nome": "Pimentão",
    "categoria": "Legumes",
    "meses": [
      1,
      2,
      8,
      9,
      11,
      12
    ],
    "dica": "Observe pele firme e sem rachaduras.",
    "imagem": "imagens/pimentao-vermelho.jpg",
    "comFoto": true
  },
  {
    "nome": "Tomate",
    "categoria": "Legumes",
    "meses": [
      1,
      2,
      3,
      11,
      12
    ],
    "dica": "Maturação e firmeza variam conforme a variedade.",
    "imagem": "imagens/tomate-cereja.jpg",
    "comFoto": true
  },
  {
    "nome": "Agrião",
    "categoria": "Verduras",
    "meses": [
      6,
      7,
      8
    ],
    "dica": "Folhas devem estar viçosas e bem conservadas.",
    "imagem": "imagens/agriao.jpg",
    "comFoto": true
  },
  {
    "nome": "Alface",
    "categoria": "Verduras",
    "meses": [
      1,
      3,
      4
    ],
    "dica": "Prefira folhas íntegras e sem sinais de murcha.",
    "imagem": "imagens/alface-americana.jpg",
    "comFoto": true
  },
  {
    "nome": "Alho-poró",
    "categoria": "Verduras",
    "meses": [
      3,
      4,
      5,
      6,
      11
    ],
    "dica": "Observe firmeza das partes brancas.",
    "imagem": "imagens/alho-poro.jpg",
    "comFoto": true
  },
  {
    "nome": "Brócolis",
    "categoria": "Verduras",
    "meses": [
      6,
      11
    ],
    "dica": "Inflorescências devem estar firmes.",
    "imagem": "imagens/brocolis.jpg",
    "comFoto": true
  },
  {
    "nome": "Cebolinha",
    "categoria": "Verduras",
    "meses": [
      1,
      2,
      10,
      11,
      12
    ],
    "dica": "Folhas de aspecto fresco e vivo.",
    "imagem": "imagens/cebolinha.jpg",
    "comFoto": true
  },
  {
    "nome": "Chicória",
    "categoria": "Verduras",
    "meses": [
      3,
      4,
      7,
      8,
      9
    ],
    "dica": "Observe folhas e coloração.",
    "imagem": "imagens/chicoria.jpg",
    "comFoto": true
  },
  {
    "nome": "Couve",
    "categoria": "Verduras",
    "meses": [
      1,
      7,
      8,
      9
    ],
    "dica": "Prefira folhas firmes e bem acondicionadas.",
    "imagem": "imagens/couve.jpg",
    "comFoto": true
  },
  {
    "nome": "Couve-flor",
    "categoria": "Verduras",
    "meses": [
      8,
      9
    ],
    "dica": "Verifique manchas e firmeza.",
    "imagem": "imagens/couve-flor.jpg",
    "comFoto": true
  },
  {
    "nome": "Espinafre",
    "categoria": "Verduras",
    "meses": [
      7,
      8,
      9,
      10,
      11
    ],
    "dica": "Higienize bem antes de consumir.",
    "imagem": "imagens/espinafre.jpg",
    "comFoto": true
  },
  {
    "nome": "Repolho",
    "categoria": "Verduras",
    "meses": [
      2,
      3,
      4
    ],
    "dica": "Cabeça firme e folhas externas preservadas.",
    "imagem": "imagens/repolho-roxo.jpg",
    "comFoto": true
  },
  {
    "nome": "Rúcula",
    "categoria": "Verduras",
    "meses": [
      3,
      7,
      8,
      12
    ],
    "dica": "Observe folhas sem amarelamento.",
    "imagem": "imagens/rucula.jpg",
    "comFoto": true
  },
  {
    "nome": "Salsa",
    "categoria": "Verduras",
    "meses": [
      1,
      12
    ],
    "dica": "Mantenha refrigerada e higienize.",
    "imagem": "imagens/salsa.jpg",
    "comFoto": true
  }
];
