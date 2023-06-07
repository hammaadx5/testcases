describe('Scroll Button Test', () => {
  beforeEach(() => {

    cy.visit('https://www.amazon.com');
  });

  it('should scroll to top when the "Back to Top" button is clicked', () => {
    // Scroll down the page
    cy.scrollTo('bottom');

    // Verify that the "Back to Top" button is visible
    cy.get('.navFooterBackToTopText').should('be.visible');

    // Click the "Back to Top" button
    cy.get('.navFooterBackToTopText').click();
  });
});
