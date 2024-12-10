import { gerarProduto } from "../../support/utils";

describe('Registrar produto', () => {
  beforeEach(() => {
    cy.registrarUsuario()
    cy.logarUsuario()
  });
 
  it('Registrar produto', () => {
    const produto = gerarProduto();

    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.get('[data-testid="nome"]').type(produto)
    cy.get('[data-testid="preco"]').type('10000')
    cy.get('[data-testid="descricao"]').type('Teste do teste')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()

    cy.contains('tr', produto)
  })
})