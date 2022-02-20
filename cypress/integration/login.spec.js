

it('Deve exibir a home page', function () {
    cy.visit('/login')

    cy.get('h1[class=title]')
        .should('have.text', 'Formulário de Login')

    cy.get('.subtitle')
        .should('have.text', 'Informe as credenciais mencionadas na video-aula :)')

    cy.get('#nickId')
        .type('papitorocks')

    cy.get('#passId')
        .type('pwd123')

    cy.get('button[type=submit]')
        .click()

    cy.get('h3[class^=title]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

    const mensagem = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
    cy.get('p[class=subheader]')
        .should('have.text', mensagem)

})