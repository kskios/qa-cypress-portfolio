class ProductsPage {

  visit() {

    cy.visit('https://automationexercise.com/products')

  }

  addFirstProductToCart() {

    cy.contains('Add to cart')
      .first()
      .click()

  }

  openCart() {

    cy.contains('View Cart')
      .click()

  }

}

export default new ProductsPage()