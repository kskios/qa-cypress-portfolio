class LoginPage {

  visit() {

    cy.visit('https://automationexercise.com/login')

  }

  fillEmail(email) {

    cy.get('[data-qa="login-email"]')
      .type(email)

  }

  fillPassword(password) {

    cy.get('[data-qa="login-password"]')
      .type(password)

  }

  submit() {

    cy.get('[data-qa="login-button"]')
      .click()

  }

}

export default new LoginPage()