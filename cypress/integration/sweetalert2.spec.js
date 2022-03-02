

it(`deve exibir a msg de sucesso no popup`, function () {

    cy.visit(`/sweet_alert`)

    cy.contains(`button`, `Sucesso`).click()

    cy.get(`.swal-text`).should(`have.text`, `Você clicou no botão verde.`)
})

it(`deve exibir a msg deu ruim no popup`, function () {

    cy.visit(`/sweet_alert`)

    cy.contains(`button`, `Deu Ruim`).click()

    cy.get(`.swal-text`).should(`have.text`, `Você clicou no botão vermelho.`)
})