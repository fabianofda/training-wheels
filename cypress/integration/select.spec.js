

describe('Select combo-box', function () {
    before(function () {
        cy.visit('/select')

    })

    it('Deve selecionar Loki por ID', function () {

        cy.get('#avengerList')
            .select("Loki")
            .should('have.value', '6')
    })

    it('Deve selecionar Bucky sem ID', function () {

        cy.contains('option', 'Selecione um personagem')
            .parent()
            .select('Bucky')
            .should('have.value', '2')
    })

})