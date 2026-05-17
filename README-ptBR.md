# QA Cypress Portfolio Project

> Projeto de portfólio em automação de testes end-to-end desenvolvido com Cypress e JavaScript,  
> seguindo boas práticas do setor para uma arquitetura de testes escalável e de fácil manutenção.

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-lightgrey?style=flat-square)](https://opensource.org/licenses/MIT)

---

## Visão Geral do Projeto

Este projeto demonstra habilidades práticas em automação de QA aplicadas a uma aplicação web de e-commerce realista. Cobre fluxos de autenticação, interações com produtos e gerenciamento de carrinho — cenários comuns em ambientes de QA de produção.

O código é estruturado com base no padrão **Page Object Model (POM)**, com dados de teste gerenciados por fixtures e comandos customizados do Cypress para promover reutilização de código e manutenibilidade a longo prazo.

---

## Stack Tecnológica

| Ferramenta | Versão | Função |
|------------|--------|--------|
| [Cypress](https://www.cypress.io/) | Mais recente | Framework de testes E2E |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | ES6+ | Linguagem principal |
| [Node.js](https://nodejs.org/) | 18+ | Ambiente de execução |
| [npm](https://www.npmjs.com/) | Mais recente | Gerenciamento de dependências |

---

## Cenários de Teste

| # | Cenário | Arquivo de Spec | Resultado |
|---|---------|-----------------|-----------|
| 1 | Login com credenciais válidas | `home.cy.js` | Aprovado |
| 2 | Login com credenciais inválidas | `home.cy.js` | Aprovado |
| 3 | Fluxo de logout do usuário | `home.cy.js` | Aprovado |
| 4 | Adicionar produto ao carrinho | `home.cy.js` | Aprovado |

---

## Estrutura de Pastas

```
qa-cypress-portfolio/
├── cypress/
│   ├── e2e/
│   │   └── home.cy.js          # Especificações de teste
│   ├── fixtures/
│   │   └── user.json           # Dados de teste externalizados
│   ├── pages/
│   │   ├── loginPage.js        # Page Object: Login
│   │   └── productsPage.js     # Page Object: Produtos
│   ├── screenshots/            # Gerado automaticamente em falhas
│   ├── videos/                 # Gerado automaticamente em execuções headless
│   └── support/
│       └── commands.js         # Comandos customizados do Cypress
├── cypress.config.js
├── package.json
└── README.md
```

---

## Instalação

**Pré-requisitos:** Node.js v18+ e npm instalados.

```bash
# Clonar o repositório
git clone https://github.com/kskios/qa-cypress-portfolio.git

# Acessar o diretório do projeto
cd qa-cypress-portfolio

# Instalar as dependências
npm install
```

---

## Executando os Testes

### Modo Interativo

Abre o Cypress Test Runner com interface visual para execução e depuração em tempo real.

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha um navegador e clique em um arquivo de spec para executar.

### Execução em Modo Headless

Executa a suíte completa de testes via linha de comando. Recomendado para pipelines de CI/CD.

```bash
npx cypress run
```

**Flags opcionais:**

```bash
# Executar um arquivo de spec específico
npx cypress run --spec "cypress/e2e/home.cy.js"

# Definir um navegador específico
npx cypress run --browser chrome

# Desabilitar a gravação de vídeo
npx cypress run --config video=false
```

---

## Funcionalidades

- **Page Object Model** — Seletores e interações com a UI são desacoplados da lógica de teste
- **Custom Commands** — Comandos reutilizáveis (ex: `cy.login()`) reduzem duplicação de código
- **Fixtures** — Dados de teste são gerenciados externamente em formato JSON para fácil manutenção
- **Assertions** — Valida estado da UI, mudanças de URL e conteúdo de elementos
- **Screenshot em Falhas** — O Cypress captura automaticamente a tela quando um teste falha
- **Gravação de Vídeo** — Gravações completas das execuções são salvas em modo headless
- **Suporte a Headless** — Compatível com ambientes de CI/CD sem configuração adicional

---

## Artefatos de Teste

Após uma execução em modo headless, os seguintes artefatos são gerados automaticamente:

| Artefato | Localização | Gatilho |
|----------|-------------|---------|
| Screenshots | `cypress/screenshots/` | Falha em um teste |
| Vídeos | `cypress/videos/` | Toda execução headless |

Esses artefatos auxiliam na análise de causa raiz e podem ser compartilhados como evidência de teste com stakeholders.

---

## Objetivos de Aprendizado

Este projeto foi desenvolvido para construir e demonstrar as seguintes competências:

- Configurar um projeto Cypress do zero
- Escrever casos de teste E2E claros e de fácil manutenção para cenários do mundo real
- Aplicar o padrão de design Page Object Model
- Gerenciar dados de teste por meio da camada de fixtures
- Criar lógica reutilizável com comandos customizados do Cypress
- Validar o comportamento da aplicação com assertions precisas
- Preparar uma suíte de testes para integração em pipelines de CI/CD

---

## Melhorias Futuras

| Item | Prioridade | Descrição |
|------|-----------|-----------|
| Pipeline de CI/CD | Alta | Integrar com GitHub Actions para execuções automatizadas |
| Testes de API | Alta | Adicionar testes a nível de requisição com `cy.request()` |
| Relatórios HTML | Média | Integrar Mochawesome para relatórios estruturados |
| Testes Cross-browser | Média | Expandir cobertura para Firefox e Edge |
| Verificações de Acessibilidade | Média | Adicionar validações a11y com `cypress-axe` |
| Configuração Multi-ambiente | Baixa | Suporte a ambientes de staging e produção via `.env` |
| Suporte a Docker | Baixa | Containerizar a suíte de testes para portabilidade |

---

## Autor

**Seu Nome**  
Engenheiro de Automação QA Júnior

[LinkedIn](https://www.linkedin.com/in/giovannibf) 
[GitHub](https://github.com/kskios) 
---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).