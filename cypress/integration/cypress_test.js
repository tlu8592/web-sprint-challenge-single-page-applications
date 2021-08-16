describe("pizza order form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name="customerName"]')
    const specialInstructionsInput = () => cy.get('input[name="specialInstructions"]')
    const pepperoniCheckbox = () => cy.get('input[name="pepperoni"]')
    const cheeseCheckbox = () => cy.get('input[name="cheese"]')
    const sausageCheckbox = () => cy.get('input[name="sausage"]')
    const peppersCheckbox = () => cy.get('input[name"peppers"]')
    const olivesCheckbox = () => cy.get('input[name="olives"]')
    const orderButton = () => cy.get('#order-button')

    it("can add text to boxes", () => {
        nameInput()
        .should('exist')
        .should('have.value', '')
        .type('Tony')
        .should('have.value', 'Tony')

        specialInstructionsInput()
        .should('exist')
        .should('have.value', '')
        .type('less fat')
        .should('have.value', 'less fat')

    })

    it("can select multiple toppings", () => {
        pepperoniCheckbox
        .should('exist')
        .should('not.be.checked')
        .check()
        .should('be.checked')

        cheeseCheckbox
        .should('exist')
        .should('not.be.checked')
        .check()
        .should('be.checked')

        sausageCheckbox
        .should('exist')
        .should('not.be.checked')
        .check()
        .should('be.checked')

        peppersCheckbox
        .should('exist')
        .should('not.be.checked')
        .check()
        .should('be.checked')

        olivesCheckbox
        .should('exist')
        .should('not.be.checked')
        .check()
        .should('be.checked')

    })

    it("can submit form", () => {
        orderButton()
        .should('not.be.disabled')
        .click()
    })
})