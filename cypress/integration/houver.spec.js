

describe('Exemplos com mouse over', function () {
    before(function () {
        cy.visit('/hovers')
    })

    it('Deve exibir o nome Python ao passar o mouse sobre a imagem da tecnologia ', function () {

        cy.get('img[src*=python]').realHover('mouse')

        cy.get('.tag-python')
            .should('be.visible')
            .should('have.text', 'Python')
    })

    it('Deve exibir o nome Golang ao passar o mouse sobre a imagem da tecnologia ', function () {

        cy.get('img[src*=golang]').realHover('mouse')

        cy.get('.tag-golang')
            .should('be.visible')
            .should('have.text', 'Golang')
    })

    it('Deve exibir o nome Node ao passar o mouse sobre a imagem da tecnologia ', function () {

        cy.get('img[src*=node]').realHover('mouse')

        cy.get('.tag-nodejs')
            .should('be.visible')
            .should('have.text', 'Node.js')
    })

    it('Deve exibir o nome NETCore ao passar o mouse sobre a imagem da tecnologia ', function () {

        cy.get('img[src*=netcore]').realHover('mouse')

        cy.get('.tag-netcore')
            .should('be.visible')
            .should('have.text', '.NETCore')
    })

})