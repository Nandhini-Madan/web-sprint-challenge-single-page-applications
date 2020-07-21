describe('Testing Pizza form', () => {
    it('Form function', () => {
        cy.visit('http://localhost:3000/pizza');

        cy.get('[data-cy="name"]')
            .type('bo')
            .should('have.value', 'bo');
        cy.get('[data-cy="phone"]').type('0123456789').should('have.value', '0123456789');
        cy.get('[data-cy="pizza_size"]').select('10"').should('have.value', '10"');
        cy.get("[data-cy='pepperoni']").click().should('be.checked');
        cy.get("[data-cy='Sausage']").click().should('be.checked');
        cy.get("[data-cy='Diced_Tomato']").click().should('be.checked');
        cy.get("[data-cy='Roasted_Garlic']").click().should('be.checked');
        cy.get("[data-cy='Grilled_Chicken']").click().should('be.checked');
        cy.get("[data-cy='onion']").click().should('be.checked');
        cy.get("[data-cy='Green_pepper']").click().should('be.checked');
        cy.get("[data-cy='Extra_Cheese']").click().should('be.checked');

        cy.get('[data-cy="submit-button"]').should('not.disabled');

    })
})