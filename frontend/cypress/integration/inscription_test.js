describe('inscription', ()=>{
    it("utilisateur peut s'incrire", ()=>{
        cy.visit('http://localhost:3000/');
        cy.visit('http://localhost:3000/inscription');
        cy.get('#nom').type("BlervaqueTEST")
        cy.get('#prenom').type("ThomasTEST")
        cy.get('#mail').type("thom-blvq@hotmail.com")
        cy.get('#mdp').type("toto123")
        cy.get('#confmdp').type("toto123")
        cy.get('#sub').click()
    })
})
