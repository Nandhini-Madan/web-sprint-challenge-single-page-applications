describe('Testing Pizza form',()=>{
    it('Form function',()=>{
        cy.visit('http://localhost:3000/pizza');
        cy.get('[data-cy="name"]')
        .type('bo')
        .should('have.value','bo');
    })
})