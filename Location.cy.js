describe('Location Change', () => {
  beforeEach(() => {
    
    cy.visit('https://www.amazon.com');
  });

  it(' location to Indonesia', () => {
    // Click the "Deliver to" dropdown
    cy.get('#nav-packard-glow-loc-icon').click();

    // Type "Indonesia" in the location input field
    cy.get('#GLUXCountryListDropdown').click();

    // Click the "Apply" button
    cy.get('#GLUXCountryList_107').click();
   cy.get('[name="glowDoneButton"]').click()

    // Verify that the "Deliver to" location has changed to Dubai
    //cy.get('#glow-ingress-line2').should('contain', 'Dubai');
  });
});
