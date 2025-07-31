import HomePage from "../support/pageObjects/homepage";

describe('Home Page Tests', () => {
  const homePage = new HomePage();
  
  beforeEach(() => {
    homePage.visit();
  });

  it('should display all main page elements', () => {
    homePage.elements.headerLogo().should('be.visible');
    homePage.elements.loginLink().should('be.visible');
    homePage.elements.registerLink().should('be.visible');
    homePage.elements.shoppingCartLink().should('be.visible');
    homePage.elements.featuredProducts().should('have.length.at.least', 1);
  });

  it('should navigate to different categories from top menu', () => {
    const categories = ['Books', 'Computers', 'Electronics', 'Apparel & Shoes'];
    
    categories.forEach(category => {
      homePage.selectMenu(category);
      cy.get('h1').should('contain', category);
      homePage.visit();
    });
  });

  it('should display featured products with details', () => {
    homePage.elements.featuredProducts().each(($product) => {
      cy.wrap($product).within(() => {
        cy.get('.product-title').should('be.visible');
        cy.get('.price').should('be.visible');
        cy.get('.product-box-add-to-cart-button').should('be.visible');
      });
    });
  });

  it('should successfully subscribe to newsletter', () => {
    const testEmail = `test${Date.now()}@example.com`;
    homePage.subscribeToNewsletter(testEmail);
    homePage.elements.newsletterResult().should('contain', 'Thank you for signing up!');
  });

  it('should allow voting in the community poll', () => {
    cy.get('#pollanswers-2').click();
    cy.get('.vote-poll-button').click();
    cy.get('.block-poll > .listbox').should('be.visible');
  });
});