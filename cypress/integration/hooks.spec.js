

describe('suites de testes', function () {

    before(function () {
        cy.log('Roda antes de TODOS os testes')
    })

    beforeEach(function () {
        cy.log('Roda antes de CADA teste')
    })

    it('CT 1', function () {
        cy.log('testando o CT 1')
    })

    it('CT 2', function () {
        cy.log('testando o CT 2')
    })

    it('CT 3', function () {
        cy.log('testando o CT 3')
    })

    afterEach(function () {
        cy.log('Roda depois de CADA teste')
    })

    after(function () {
        cy.log('Roda depois de TODOS os testes')
    })

})
