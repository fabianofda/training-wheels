

describe('Exemplos com mouse over', function () {
    before(function () {
        cy.visit('/hovers')
    })

    it('Deve exibir o nome da tecnologia ao passar o mouse sobre a imagem ', function () {

        const techs = [
            { img: 'img[src*=python]', tag: '.tag-python', brand: 'Python' },
            { img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang' },
            { img: 'img[src*=node]', tag: '.tag-nodejs', brand: 'Node.js' },
            { img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore' }
        ]

        techs.forEach(function (tech) {
            cy.get(tech.img).realHover('mouse')

            cy.get(tech.tag)
                .should('be.visible')
                .should('have.text', tech.brand)
        })

    })

})