class CartPage {
  cartItems = () => cy.get('.cart-item-row');
  quantityInputs = () => cy.get('.qty-input');
  updateCartButton = () => cy.get('.update-cart-button');

  updateQuantity(index, quantity) {
    this.quantityInputs().eq(index).clear().type(quantity);
    this.updateCartButton().click();
  }
}

export default CartPage;