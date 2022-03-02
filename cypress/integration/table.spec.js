


it(`deve exibir 7 Séries de TV no total`, function () {
    cy.visit(`/tables`)

    cy.get(`table tbody tr`)
        .then(function (series) {
            expect(series).to.have.length(7)
        })

})

it(`deve exibir a séries Loki`, function () {
    cy.visit(`/tables`)

    cy.contains(`table tbody tr`, `Loki`)
        .then(function (item) {
            expect(item).to.contain(`Marvel`)
            expect(item).to.contain(`Disney+`)
            expect(item).to.contain(`2021`)
        })

})

it(`deve remover a séries round 6`, function () {
    cy.visit(`/tables`)

    cy.contains(`table tbody tr`, `Round 6`)
        .then(function (item) {
            item.find(`.delete`).click();
        })

        .should(`not.exist`)

})

