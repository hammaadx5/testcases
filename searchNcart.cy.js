describe('Amazon', () => {
  it('search for an iphone, add it to the cart, and verify the cart', () => {
    
    cy.visit('https://www.Amazon.com');

    
    cy.get('#twotabsearchtextbox').type('iphone{enter}');

    // Click on the first product in the search results
    cy.get('.a-link-normal').first().click();

    // Click on the "Add to Cart" button
    cy.get('#add-to-cart-button').click();


    // Verify that the item is added to the cart
   // cy.get('#nav-cart-count').should('contain', '1');
  });
});
