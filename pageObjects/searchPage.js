class SearchPage {
  searchBox = () => cy.get('#small-searchterms');
  searchButton = () => cy.get('.search-box-button');
  searchResults = () => cy.get('.product-item');

  searchFor(term) {
    this.searchBox().type(term + '{enter}');
  }
}

export default new SearchPage();