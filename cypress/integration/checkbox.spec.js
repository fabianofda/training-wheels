

it('Deve marcar os top 5 filmes da marvel', function () {
    cy.visit('/checkboxes')

    const filmes = [
        'hulk',
        'ironman2',
        'avengers',
        'thor',
        'eternals'
    ]

    filmes.forEach(function (filme) {
        cy.get(`input[name=${filme}]`)
            .click()
            .should('be.checked')
    })

    // cy.get('input[name=hulk]').click()
    //     .should('be.checked')
    // cy.get('input[name=ironman2]').click()
    //     .should('be.checked')
    // cy.get('input[name=avengers]').click()
    //     .should('be.checked')
    // cy.get('input[name=thor]').click()
    //     .should('be.checked')
    // cy.get('input[name=eternals]').click()
    //     .should('be.checked')
})