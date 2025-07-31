class checkoutPage {

    static fillBillingInfo(country, city, address, zip, phone) {
        cy.get('#BillingNewAddress_CountryId').select(country);
        cy.get('#BillingNewAddress_City').type(city);
        cy.get('#BillingNewAddress_Address1').type(address);
        cy.get('#BillingNewAddress_ZipPostalCode').type(zip);
        cy.get('#BillingNewAddress_PhoneNumber').type(phone);
        cy.contains('button', 'Continue').click();
    }

    static selectShipping() {
        cy.get('#shippingoption_0').check();
        cy.get('.shipping-method-next-step-button').click();
    }

    static selectPayment() {
        cy.get('#paymentmethod_0').check();
        cy.get('.payment-method-next-step-button').click();
    }

    static confirmOrder() {
        cy.get('.confirm-order-next-step-button').click();
        cy.contains('Your order has been successfully processed!').should('be.visible');
    }
}

export default checkoutPage();
