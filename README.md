# Cypress_web_api_serverest

## Descrição

Este projeto foi criado com o intuito de demonstrar o uso do Cypress em testes de FrontEnd (web) e testes de Backend (API), utilizando a plataforma ServeRest, que é disponibilizada para uso gratuito e simula uma loja virtual.

## Tecnologias Usadas

- **JavaScript**: Usado para criar os testes, facilitando a integração com aplicações web modernas. Também é possível escrever os testes em TypeScript.
- **Node.js**: O Cypress usa o Node.js como servidor e interpretador da linguagem JavaScript.

## Pré-requisitos

- **Node.js**: Necessário para executar o Cypress e as dependências do projeto.
- **VSCode** (ou outro editor de código de sua preferência).

## Instalação

1. Crie uma nova pasta no seu ambiente local e acesse-a.
2. Abra a pasta no terminal, clicando com o botão direito do mouse e selecionando a opção **Git Bash Here**.
3. Inicialize um repositório Git com o comando:

   ```bash
   git init
   ```

4. Inicialize um novo projeto com o NPM:

   ```bash
   npm init
   ```

5. Limpe o terminal com o comando:

   ```bash
   clear
   ```

6. Instale o Cypress (versão 16.6.4) com o seguinte comando:

   ```bash
   npm install cypress@13.6.4 --save-dev
   ```

7. Para abrir o Cypress, execute:

   ```bash
   npx cypress open
   ```

## Configuração

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Para executar os testes, use o comando:

   ```bash
   npm test
   ```

## Cenários Validados

### API

- **ID 01 - 🔒 Realizar login**
  - **CT001**: Realizar login com sucesso

- **ID 02 - 📋 Listar usuários**
  - **CT001**: Listar todos os usuários
  - **CT002**: Listar usuário por ID inválido

### WEB

- **ID 01 - 🔒 Login**
  - **CT001**: Login com sucesso
  - **CT002**: Login com e-mail inválido
  - **CT003**: Login com senha inválida

- **ID 02 - ✔️ Usuário**
  - **CT001**: Realizar o registro de usuário com perfil admin

- **ID 03 - 📋 Produto**
  - **CT001**: Realizar cadastro de produto

## Contribuição

Todas sugestões construtivas são bem-vindas! 😊 Caso queira contribuir com melhorias, abra uma issue neste repositório. 🚀