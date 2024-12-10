describe('Login', () => {
  beforeEach(() => {
    cy.registrarUsuario();
    cy.visit('https://front.serverest.dev/login');
  });
 
  it('Login - Sucesso', () => {
    const email = Cypress.env('email'); 

    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type('teste123')
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/admin/home');
  })

  it('Login - Email inválido', () => {
    cy.get('[data-testid="email"]').type('usuar1733774397137@teste.com')
    cy.get('[data-testid="senha"]').type('teste123')
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })

  it('Login - Senha inválida', () => {
    const email = Cypress.env('email'); 
    
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type('teste1234')
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })
})