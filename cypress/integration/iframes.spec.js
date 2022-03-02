

describe('dois exemplo de testes com iframe', function () {

    const niceIFrame = function () {
        return cy
            .get('#weareqaninja')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    const badIFrame = function () {
        return cy
            .get('iframe[src*=instagram]')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    it('Deve validar o titulo no iFrame Bom', function () {
        cy.visit('/nice_iframe')

        niceIFrame()
            .contains('.UsernameText', 'weareqaninja')
            .should('be.visible', { timeout: 20000 })
    })

    it('Deve validar o titulo no iFrame Ruim', function () {
        cy.visit('/bad_iframe')

        badIFrame()
            .contains('.UsernameText', 'weareqaninja')
            .should('be.visible', { timeout: 20000 })
    })
})
