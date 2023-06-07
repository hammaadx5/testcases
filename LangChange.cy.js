describe('Language Change', () => {
  beforeEach(() => {
    // Visit the daraz website
    cy.visit('https://www.amazon.com');
  });

  it('lang to deutsch', () => {
    // Click the language options menu
    cy.get('#icp-nav-flyout').click();

    
    cy.contains('Deutsch - DE - Übersetzung').click();

    // Verify that the language has changed to French
   // cy.get('#icp-save-button-announce').click();

    
  });
});
