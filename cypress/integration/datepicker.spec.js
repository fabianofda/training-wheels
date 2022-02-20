

describe('Selecionando datas', function () {
    before(function () {
        cy.visit('/datepicker')
    })

    it('Deve selecionar data 30 de jun de 2021 no Calendario', function () {

        const date = {
            month: 'jun',
            year: '2021',
            day: '30'
        }

        cy.get('.datetimepicker-dummy-input').click()

        cy.get('.datepicker-nav-month').click()
        cy.contains('.datepicker-month', date.month).click()

        cy.get('.datepicker-nav-year').click()
        cy.contains('.datepicker-year span', date.year).click()

        const dia = new RegExp('^' + date.day + '$', 'g')
        cy.contains('[data-date*="Jun"] button[class="date-item"]', dia).click()
        // cy.contains('button[class="date-item"]', dia).click()

        const data = '30/06/2021'
        cy.get('input#date').should('have.value', data)
    })
})