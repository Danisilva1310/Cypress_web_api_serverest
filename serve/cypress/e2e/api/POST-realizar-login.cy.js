describe('Login', () => {
    it('Login com sucesso', () => {

        cy.realizarLogin()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal("Login realizado com sucesso");
        })
    })
})