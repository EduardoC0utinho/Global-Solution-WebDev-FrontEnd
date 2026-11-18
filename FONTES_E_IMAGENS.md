# Fontes, imagens e transparência

## Dados utilizados no site

- **EMATER-RIO, Relatório de Atividades 2024**: indicadores históricos da fruticultura fluminense, incluindo 8.681 produtores, cerca de 437 mil toneladas colhidas e faturamento bruto estimado de R$ 1,19 bilhão. Fonte: https://www.rj.gov.br/emater/sites/default/files/arquivos_pagina/Relat%C3%B3rio%20de%20Atividades%202024.pdf
- **SES-RJ / Firjan SESI, Aproveitamento Integral dos Alimentos**, tabela de frutas, legumes e verduras, páginas 16–17. Fonte: https://www.rj.gov.br/saude/sites/default/files/arquivo_pagina_basica/E-Book-Nutre-RJ-compactado.pdf

**Interpretação correta:** o calendário indica sazonalidade para consumidores, mas não mede a produção de cada município. A presença de um alimento na tabela não prova que ele foi cultivado no Rio de Janeiro. Os dados são históricos, não resultados da plataforma.

## Fotos e representação visual

- Os arquivos em `imagens/*.jpg` foram incorporados ao projeto para funcionar sem buscar URLs de alimentos em tempo de execução.
- **26 alimentos do calendário têm imagem ilustrativa própria**. Outros **11 são mostrados com tipografia**, pois não havia imagem específica verificada: assim não se apresenta uma abobrinha como se fosse agrião, por exemplo.
- Parte das imagens JPG foi derivada de composições visuais fotorrealistas **geradas digitalmente para este protótipo**. Elas não são fotografias documentais, não comprovam a aparência exata de cultivares e não são registros de propriedades ou pessoas reais no RJ.
- As imagens `*-ilustrativa.jpg` dos perfis de produtores também são **ilustrativas**, e todos os nomes e propriedades cadastrados como exemplo são fictícios.
- A logo original aprovada foi **preservada**. Seus arquivos `.webp`/`.png` permanecem nesses formatos para manter a transparência e a qualidade; os alimentos usam `.jpg`.

## Fontes tipográficas

O CSS solicita as famílias **Bricolage Grotesque**, **Atkinson Hyperlegible** e **IBM Plex Mono** pelo Google Fonts. Se a conexão estiver indisponível, o navegador utiliza fontes locais substitutas. Nenhum arquivo de fonte é redistribuído neste pacote.

## Conjunto de fotos

As imagens de alimentos são representações **fotográficas ilustrativas geradas digitalmente** e divididas em JPGs individuais, com nomes relacionados aos alimentos. São usadas para diferenciar variedades, sem alegar que foram fotografadas em fazendas reais.

Exemplos de arquivos: `imagens/banana-prata.jpg`, `imagens/banana-da-terra.jpg`, `imagens/banana-nanica.jpg`, `imagens/alface-crespa.jpg`, `imagens/alface-americana.jpg`, `imagens/tomate-italiano.jpg`, `imagens/tomate-cereja.jpg`, `imagens/mandioca.jpg` e `imagens/beterraba.jpg`.

A logo original permanece preservada em WebP e PNG, pois transparência é importante para o cabeçalho e a versão clara/escura; não foi alterada a identidade. No modo escuro, um filtro CSS torna seu símbolo branco.

