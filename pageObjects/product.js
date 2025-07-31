class ProductPage {
  productName = () => cy.get('.product-name');
  productPrice = () => cy.get('.product-price');
  quantityInput = () => cy.get('#addtocart_EnteredQuantity');
  addToCartButton = () => cy.get('#add-to-cart-button');

  addToCart(quantity = 1) {
    this.quantityInput().clear().type(quantity);
    this.addToCartButton().click();
  }
}

export default ProductPage;