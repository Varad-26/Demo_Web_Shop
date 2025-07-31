class RegisterPage {
    elements = {

        genderMale: () => cy.get('#gender-male'),
        genderFemale: () => cy.get('#gender-female'),
 
        firstName: () => cy.get('#FirstName'),
        lastName: () => cy.get('#LastName'),

        email: () => cy.get('#Email'),
        password: () => cy.get('#Password'),
        confirmPassword: () => cy.get('#ConfirmPassword'),

        registerBtn: () => cy.get('#register-button'),

        successMessage: () => cy.get('.result'),

        firstNameError: () => cy.get('#FirstName-error'),
        lastNameError: () => cy.get('#LastName-error'),
        emailError: () => cy.get('#Email-error'),
        passwordError: () => cy.get('#Password-error'),
        confirmPasswordError: () => cy.get('#ConfirmPassword-error')
    }

    selectGender(gender = 'male') {
        if (gender.toLowerCase() === 'female') {
            this.elements.genderFemale().click();
        } else {
            this.elements.genderMale().click();
        }
    }

    typeFirstName(firstName) {
        this.elements.firstName().clear().type(firstName);
    }

    typeLastName(lastName) {
        this.elements.lastName().clear().type(lastName);
    }

    typeEmail(email) {
        this.elements.email().clear().type(email);
    }

    typePassword(password) {
        this.elements.password().clear().type(password);
        this.elements.confirmPassword().clear().type(password);
    }

    clickRegister() {
        this.elements.registerBtn().click();
    }

    completeRegistration(user) {
        this.selectGender(user.gender);
        this.typeFirstName(user.firstName);
        this.typeLastName(user.lastName);
        this.typeEmail(user.email);
        this.typePassword(user.password);
        this.clickRegister();
    }
}

export default RegisterPage;