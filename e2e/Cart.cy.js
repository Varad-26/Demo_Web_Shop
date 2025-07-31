describe('Cart Tests', () => {
  const addItemToCart = () => {
    // Add items to CART first
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.top-menu > :nth-child(2) > [href="/computers"]').first().click();
    cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click();
    cy.get(':nth-child(1) > .product-item > .picture > a > img').click();
    cy.get('#add-to-cart-button-72').click();
    cy.get('.ico-cart > .cart-label').click();
    cy.get('.center-1').should('be.visible');
  };

  // Common function to go to CART
  const goToCart = () => {
    cy.get('.ico-cart > .cart-label');
    cy.get('.center-1').should('be.visible');
  };

  it('should display items in cart', () => {
    addItemToCart();
    goToCart();
    cy.get('.cart tbody tr').should('have.length.at.least', 1);
  });

  it('should update item quantity', () => {
    addItemToCart();
    goToCart();
    
    cy.get('.qty-input').first().clear().type('2{enter}');
    
    cy.get('.qty-input').first().should('have.value', '2');
  });

  it('should remove items from cart', () => {
    addItemToCart();
    goToCart();
    
    cy.get('.cart tbody tr').first().find('.remove-from-cart input[type="checkbox"]').check();
    
    cy.get('.update-cart-button').click();
    cy.contains('Your Shopping Cart is empty').should('be.visible');
  });

  afterEach(() => {
    // removing all items
    cy.get('body').then(($body) => {
      if ($body.find('.remove-from-cart input').length > 0) {
        cy.get('.remove-from-cart input').check();
        cy.get('.update-cart-button').click();
      }
    });
  });
});