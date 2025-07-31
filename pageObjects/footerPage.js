class footer{

    clickFooterLink(link){
        return cy.get('.footer-menu-wrapper').contains(link).click();
    }
}

export default footer;