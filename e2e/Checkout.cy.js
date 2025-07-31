describe('Checkout Test', () => {
    before(() => {
        // Visit homepage
        cy.visit('https://demowebshop.tricentis.com/');
        
        // Click on first product
        cy.get('.product-title a').first().click();
        cy.get('.product-name h1').should('be.visible');
        
        // Add to cart with verification
            cy.get('.top-menu > :nth-child(2) > [href="/computers"]').first().click();
            cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click();
            cy.get(':nth-child(1) > .product-item > .picture > a > img').click();
            cy.get('#add-to-cart-button-72').click();
            cy.get('.ico-cart > .cart-label').click();
            cy.get('.center-1').should('be.visible');
        

        cy.get('.country-input').select(0);
        cy.get('#topcartlink > .ico-cart').click();
        cy.get('h1').should('contain', 'Shopping cart');

        cy.get('#termsofservice').check();
        cy.get('#checkout').should('be.enabled').click();
        cy.get('.checkout-as-guest-button').click();
    });

    it('should complete checkout', () => {

        cy.get('#BillingNewAddress_FirstName').type('john');
        cy.get('#BillingNewAddress_LastName').type('doe');
        cy.get('#BillingNewAddress_Email').type('john12@example.com');
        cy.get('select[name="BillingNewAddress.CountryId"]').select('United States');
        cy.get('#BillingNewAddress_City').type('New York');
        cy.get('#BillingNewAddress_Address1').type('123 Main St');
        cy.get('#BillingNewAddress_ZipPostalCode').type('10001');
        cy.get('#BillingNewAddress_PhoneNumber').type('5551234567');
        cy.get('input[onclick="Billing.save()"]').click();


        cy.get('#shipping-buttons-container > .button-1').click();
        cy.get('#shippingoption_1').check();
        cy.get('.shipping-method-next-step-button').click();

        cy.get('#paymentmethod_0').check();
        cy.get('.payment-method-next-step-button').click();

        cy.get('.payment-info-next-step-button').click();
        cy.get('.confirm-order-next-step-button').click();
 
        cy.get('.order-completed')
          .should('be.visible')
          .and('contain', 'Your order has been successfully processed!');
    });
});