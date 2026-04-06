# Restaurant Page

(TODO)

## Descrição

Este projeto usa Webpack como bundler em modo de desenvolvimento, com:

- Entrada JS modular em `src/index.js`.
- Injeção automática do bundle no HTML via HtmlWebpackPlugin.
- Suporte a importação de CSS, HTML e imagens.
- Servidor de desenvolvimento com hot reload.

## Tecnologias e Conceitos

- JavaScript modular (ES Modules)
- Webpack 5 + webpack-cli + webpack-dev-server
- html-webpack-plugin
- css-loader + style-loader
- html-loader
- Asset Modules do Webpack para imagens
- HTML5 semântico
- CSS Grid + Flexbox
- Layout responsivo (mobile first)

## Estrutura do Projeto

(TODO)

## Como Executar

### Pre-requisitos

- Node.js 18+ (recomendado)
- npm

### Passos

1. Instale as dependencias:

```bash
npm install
```

2. 'Compile' o projeto com o bundle webpack:

```bash
npx webpack
```

3. Rode o servidor de desenvolvimento:

```bash
npx webpack serve
```

4. Abra no navegador:

```text
http://localhost:8080
```
## Observações

- O template esta configurado para desenvolvimento (`mode: development`).
- O bundle de saida é gerado em `dist/` com limpeza automática a cada build.
- O layout base segue o padrao Holy Grail com sidebar esquerda, conteúdo central e sidebar direita em telas maiores.






