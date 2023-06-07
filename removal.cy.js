describe('Shopping', () => {
  it('should search for iphone, add to cart, remove, and verify removal', () => {
 
    cy.visit('https://www.amazon.com');

    
    cy.get('#twotabsearchtextbox').type('iphone{enter}');

    // Click on the first product in the search results
    cy.get('.a-link-normal').first().click();

    // Click on the "Add to Cart" button
    cy.get('#add-to-cart-button').click();

    // Visit the cart
    cy.get('#nav-cart').click();

    // Remove the item from the cart
   //cy.get('.sc-action-delete').click();
  //cy.get('input[name="submit.delete.09fe4576-f561-46e0-a1c7-30a4066416d4"]').click();


    // Verify that the item is removed from the cart
    cy.get('.sc-empty-cart-heading').should('contain', ' Cart is empty');
  });
});

