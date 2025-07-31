import RegisterPage from '../support/pageObjects/registerPage';
import HomePage from '../support/pageObjects/homepage';

describe('Registration Tests', () => {
  const registerPage = new RegisterPage();
  const homePage = new HomePage();
  
  beforeEach(() => {
    homePage.visit();
    homePage.clickRegister();
    // Ensure we are on the registration page
    cy.url().should('include', '/register');
  });

  it('should register a new user with valid credentials', () => {
    const timestamp = Date.now();
    const testUser = {
      gender: 'male',
      firstName: 'Test',
      lastName: 'User',
      email: `testuser${timestamp}@example.com`,
      password: 'Password123'
    };

    registerPage.completeRegistration(testUser);
    registerPage.elements.successMessage()
      .should('be.visible')
      .and('contain', 'Your registration completed');
  });

  it('should show validation errors for empty required fields', () => {
     
    cy.get('form').then(($form) => {
      console.log('Form HTML:', $form.html());
    });

    registerPage.clickRegister();
    
    cy.wait(500);
    
    cy.document().then((doc) => {
      console.log('Page HTML:', doc.documentElement.outerHTML);
    });

    cy.contains('span', 'First name is required').should('be.visible');
    cy.contains('span', 'Last name is required').should('be.visible');
    cy.contains('span', 'Email is required').should('be.visible');
    cy.contains('span', 'Password is required').should('be.visible');
  });

  it('should show error when passwords do not match', () => {
    registerPage.typePassword('Password123');
    registerPage.elements.confirmPassword()
      .clear()
      .type('Different456');
    registerPage.clickRegister();

    cy.contains('span', 'The password and confirmation password do not match')
      .should('be.visible');
  });

  it('should show error for invalid email format', () => {
    registerPage.typeEmail('invalid-email');
    registerPage.clickRegister();

    cy.contains('span', 'Wrong email').should('be.visible');
  });

  it('should allow registration with female gender selected', () => {
    const timestamp = Date.now();
    const testUser = {
      gender: 'female',
      firstName: 'Jane',
      lastName: 'Doe',
      email: `janedoe${timestamp}@example.com`,
      password: 'Password123'
    };

    registerPage.completeRegistration(testUser);
    registerPage.elements.successMessage()
      .should('contain', 'Your registration completed');
  });
});