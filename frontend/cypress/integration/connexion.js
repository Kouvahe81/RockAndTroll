describe('Connexion test',()=>{
    it('Pour se loger',()=> {
        expect(true).to.equal(true)
        cy.visit('http://localhost:3000/');
        cy.visit('http://localhost:3000/connexion');
        cy.get('#email').type("ronaldo@yahoo.fr")
        cy.get('#password').type("ronaldo")
        cy.get('#sub').click()
    })
})