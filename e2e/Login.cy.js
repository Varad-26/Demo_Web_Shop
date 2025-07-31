describe('Login Page', () => {

  it('Verify User is able to Login', () => {

    cy.visit('https://demowebshop.tricentis.com');

    cy.get('.ico-login').click();
    cy.get('.email').type('john12@example.com');
    cy.get('.password').type('123456');
    cy.get('.login-button').click();

    cy.url().should('contain','tricentis.com');
  });

  // it('Verify User is able to LogOut', () => {

  //   cy.get('.ico-logout').click();
    
  // });

});