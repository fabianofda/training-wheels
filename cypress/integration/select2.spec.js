

describe('Select2 - Frameworks de Teste', function () {
    before(function () {
        cy.visit('/apps/select2/index.html')

    })

    it('Deve selecionar uma unica opção', function () {

        cy.get('.select2-selection--single')
            .click()

        cy.contains('.select2-results__option', 'Cypress')
            .click()

    })

    it('Deve selecionar multiplas opções', function () {

        const frameworks = [
            'Cypress',
            'Robot Framework',
            'Selenium Webdriver',
            'Playwright'
        ]

        frameworks.forEach(function (framework) {
            cy.get('.select2-selection--multiple')
                .click()

            cy.contains('.select2-results__option', framework)
                .click()
        })

    })

})