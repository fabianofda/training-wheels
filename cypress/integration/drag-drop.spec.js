
describe('Drag and drop', function () {
    before(function () {
        cy.visit('/drag_and_drop')
    })

    it('Deve arrastar o cypress para caixa do nodes', function () {
        const dataTransfer = new DataTransfer()

        cy.get('img[alt=Cypress]')
            .trigger('dragstart', { dataTransfer })

        cy.get('.nodejs figure[draggable=true]')
            .trigger('drop', { dataTransfer })
    })

    it('Deve arrastar o robotframework para caixa do python', function () {
        const dataTransfer = new DataTransfer()

        cy.get('img[alt^="Robot"]')
            .trigger('dragstart', { dataTransfer })

        cy.get('.python figure[draggable=true]')
            .trigger('drop', { dataTransfer })
    })
})