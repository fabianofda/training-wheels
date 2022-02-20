

describe('Exemplo de timeout', function () {
    before(function () {
        cy.visit('/upload')

    })

    it('Deve aguardar elemento na pagina carregar', function () {

        const imagem = 'cypress/fixtures/imagem.jpg'

        cy.get('input[name=file]')
            .selectFile(imagem, { force: true })

        cy.get('input[value=Upload]')
            .click()

        cy.get('img[src="/uploads/imagem.jpg"]', { timeout: 10000 })
            .should('be.visible')
    })

})