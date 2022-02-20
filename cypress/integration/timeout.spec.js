

describe('Exemplo de timeout', function () {
    before(function () {
        cy.visit('/timeout')

    })

    it('Deve aguardar elemento na pagina carregar', function () {

        cy.contains('button', 'Habilita')
            .click()

        cy.get('#firstname')
            .should('be.visible')
            .type('Fabiano', { timeout: 20000 })
    })

})