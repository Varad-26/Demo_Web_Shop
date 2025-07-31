class HomePage {
    elements = {
       
        headerLogo: () => cy.get('.header-logo'),
        loginLink: () => cy.get('.ico-login'),
        registerLink: () => cy.get('.ico-register'),
        shoppingCartLink: () => cy.get('.ico-cart'),
        wishlistLink: () => cy.get('.ico-wishlist'),
        
        topMenu: (menuText) => cy.contains('.top-menu [href]', menuText),

        featuredProducts: () => cy.get('.product-grid .product-item'),
        featuredProductTitles: () => cy.get('.product-grid .product-title'),

        newsletterEmail: () => cy.get('#newsletter-email'),
        newsletterSubscribeButton: () => cy.get('#newsletter-subscribe-button'),
        newsletterResult: () => cy.get('#newsletter-result-block'),

    }

    visit() {
        cy.visit('https://demowebshop.tricentis.com/');
    }

    clickRegister() {
        this.elements.registerLink().click();
    }

    clickLogin() {
        this.elements.loginLink().click();
    }

    clickShoppingCart() {
        this.elements.shoppingCartLink().click();
    }

    selectMenu(menuText) {
        this.elements.topMenu(menuText).click();
    }

    subscribeToNewsletter(email) {
        this.elements.newsletterEmail().type(email);
        this.elements.newsletterSubscribeButton().click();
    }

    getFeaturedProduct(index) {
        return this.elements.featuredProducts().eq(index);
    }

    clickFeaturedProduct(index) {
        this.elements.featuredProductTitles().eq(index).click();
    }
}

export default HomePage;