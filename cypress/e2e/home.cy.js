import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Automation Exercise Tests', () => {

  let user

  beforeEach(() => {

    cy.fixture('user').then((userData) => {

      user = userData

    })

  })

  it('should login successfully', () => {

    loginPage.visit()

    loginPage.fillEmail(user.email)

    loginPage.fillPassword(user.password)

    loginPage.submit()

    cy.contains('Logged in as')

  })

  it('should show error with invalid password', () => {

    loginPage.visit()

    loginPage.fillEmail(user.email)

    loginPage.fillPassword('wrongpassword')

    loginPage.submit()

    cy.contains('Your email or password is incorrect!')

  })

  it('should logout successfully', () => {

    loginPage.visit()

    loginPage.fillEmail(user.email)

    loginPage.fillPassword(user.password)

    loginPage.submit()

    cy.contains('Logout').click()

    cy.url().should('include', '/login')

  })

  it('should add product to cart successfully', () => {

    productsPage.visit()

    productsPage.addFirstProductToCart()

    productsPage.openCart()

    cy.contains('Shopping Cart')

    cy.get('#product-1')

    cy.screenshot('cart-test-success')

  })

})