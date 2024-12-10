import { gerarEmail } from "../../support/utils";

describe('Registrar usuário', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
  });
 
  it('Registrar usuário', () => {
    const email = gerarEmail();

    cy.get('[data-testid="nome"]').type("João")
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type('teste123')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"').click()

    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
  })
})