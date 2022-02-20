

describe('Selecionando datas', function () {
    before(function () {
        cy.visit('/datepicker')
    })

    it('Deve selecionar uma data valida no Calendario', function () {

        const date = {
            month: 'jun',
            year: '1982',
            day: '2'
        }

        cy.get('.datetimepicker-dummy-input').click()

        cy.get('.datepicker-nav-month').click()
        cy.contains('.datepicker-month', date.month).click()

        cy.get('.datepicker-nav-year').click()
        cy.contains('.datepicker-year span', date.year).click()

        const dia = new RegExp('^' + date.day + '$', 'g')
        cy.contains('div[class*="current-month"] button[class=date-item]', dia)
            .click()
    })
})