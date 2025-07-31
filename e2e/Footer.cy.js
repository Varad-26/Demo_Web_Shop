import footer from "../support/pageObjects/footerPage";

describe('Footer Links', () => {

    const foter = new footer();
    
    it('should navigate to the Particular Page', () => {
        cy.visit("https://demowebshop.tricentis.com/");

        foter.clickFooterLink('Sitemap');
        cy.url().should('include', 'com/sitemap');

        foter.clickFooterLink('Shipping & Returns');
        cy.url().should('include', 'com/shipping-returns');

        foter.clickFooterLink('Privacy Notice');
        cy.url().should('include', 'com/privacy-policy');

        foter.clickFooterLink('Conditions of Use');
        cy.url().should('include', 'om/conditions-of-use');

        foter.clickFooterLink('About us');
        cy.url().should('include', 'com/about-us');
        
        foter.clickFooterLink('Contact us');
        cy.url().should('include', 'com/contactus');

    });
});