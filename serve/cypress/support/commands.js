import { gerarEmail } from '../support/utils';

Cypress.Commands.add('registrarUsuario', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    const email = gerarEmail();

    cy.get('[data-testid="nome"]').type("João")
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type('teste123')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()

    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')

    Cypress.env('email', email)
})

Cypress.Commands.add('logarUsuario', () => {
    const email = Cypress.env('email');
    const senha = 'teste123';

    cy.visit('https://front.serverest.dev/login');

    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('cadastrarUsuario', () => { 
    const email = gerarEmail();

    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            nome: 'JMaria',
            email: email,
            password: 'teste123',
            administrador: 'true',
        },
    }).then((response) => {
        Cypress.env('email', email)
        return response;
    })
})

Cypress.Commands.add('buscarTodosUsuarios', () => { 
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            failOnStatusCode: false
        }).then((response) => { return response })
    })

Cypress.Commands.add('buscarUsuarioEspecifico', (user_id) => { 
        cy.request({
            method: 'GET',
            url: `https://serverest.dev/usuarios/${user_id}`,
            failOnStatusCode: false
        }).then((response) => { return response })
    })

Cypress.Commands.add('realizarLogin', () => { 
    cy.cadastrarUsuario().then(() => {
        const email = Cypress.env('email')
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: email,
                password: 'teste123',
            },
        }).then((response) => { return response })
    })
})