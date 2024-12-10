describe('Listar usuários', () => {

    it('Listar todos os usuários', () => {

        cy.buscarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.usuarios.length).to.equal(response.body.quantidade);
                expect(response.body.usuarios).to.have.length.greaterThan(0);
            })
        })

    it('Listar usuário por ID inválido', () => {

        const invalid_id = '38Dw6HQ4IhooHD5K'

        cy.buscarUsuarioEspecifico(invalid_id)
            .then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body.message).to.equal("Usuário não encontrado");
        })
    })
})