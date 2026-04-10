# Restaurant Page

Aplicação web desenvolvida como uma SPA simples com navegação entre Home, Menu e Contact, usando JavaScript modular e renderização dinâmica de DOM com Webpack.

## Descrição

A proposta foi construir um restaurante ficticio (Odin Recipes) com foco em:

- Arquitetura modular por página.
- Separação de responsabilidades entre conteúdo, estrutura e estilos.
- Troca de abas via JavaScript sem recarregar a página.

## Funcionalidades Implementadas

- Navegação por abas (`Home`, `Menu`, `Contact`) com manipulação de DOM.
- Renderização dinâmica da área principal com `replaceChildren` para troca limpa de conteúdo.
- Home com apresentação textual do conceito do restaurante.
- Menu completo com seções (`Beverages`, `Sides`, `Main Dishes`, `Desserts`).
- Cards de itens com nome, preço, descrição, imagem e créditos de autoria.
- Contact page com dados de contato e links para GitHub e LinkedIn.
- Layout responsivo com CSS Grid/Flexbox e estilos isolados por módulo.

## Tecnologias e Conceitos

- JavaScript (ES Modules)
- Webpack 5
- webpack-cli
- webpack-dev-server
- webpack-merge
- html-webpack-plugin
- html-loader
- css-loader
- style-loader
- Asset Modules (imagens e icones)
- HTML5 semantico
- CSS Grid + Flexbox

## Estrutura do Projeto

```text
restaurant-page/
├─ src/
│  ├─ index.js
│  ├─ template.html
│  ├─ styles.css
│  ├─ assets/
│  │  └─ images/
│  ├─ home-page/
│  │  ├─ home-page.js
│  │  └─ styles.css
│  ├─ menu-page/
│  │  ├─ menu-page.js
│  │  ├─ styles.css
│  │  └─ assets/images/
│  │     ├─ beverages/
│  │     └─ dishes/
│  └─ contact-page/
│     ├─ contact-page.js
│     ├─ styles.css
│     └─ assets/icons/
├─ webpack.common.js
├─ webpack.dev.js
├─ webpack.prod.js
├─ package.json
└─ README.md
```

## Build Setup

O projeto usa configuração separada do Webpack por ambiente:

- `webpack.common.js`: entrada, output, plugins e loaders compartilhados.
- `webpack.dev.js`: configuração de desenvolvimento com dev server e source map rapido.
- `webpack.prod.js`: configuração de produção com source map apropriado para build final.

Essa divisão é feita com `webpack-merge` para manter o setup mais limpo e escalável.

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Passo a passo

1. Instale as dependências:

```bash
npm install
```

2. Rode o projeto em desenvolvimento:

```bash
npm start
```

3. Gere o build de produção:

```bash
npm run build
```

4. Em desenvolvimento, acesse no navegador:

```text
http://localhost:8080
```

## Observações

- O bundle de saida é gerado em `dist/` com limpeza automática (`output.clean`).
- O README documenta o estado atual do projeto apos a migração para `webpack-merge`.








