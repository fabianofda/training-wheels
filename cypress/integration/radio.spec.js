


it('Deve selecionar Capitão América: O Primeiro Vingador', function () {
    cy.visit('/radios')

    cy.get('input[value=cap]')
        .click()
        .should('be.checked')
})