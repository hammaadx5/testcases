describe('Login', () => {
  it('Enter valid email while logging in', () => {
    
    cy.visit('https://www.amazon.com');

    // Click on the "Sign in" button
    cy.get('#nav-link-accountList').click();

    // Type the email or mobile number in the input field
    cy.get('#ap_email').type('hamadepic5@gmail.com');

    // Click on the "Continue" button
    cy.get('#continue').click();

    // Type the password in the input field
    cy.get('#ap_password.a-input-text.a-span12.auth-autofocus.auth-required-field').type('Hamadepic6');

cy.get('#signInSubmit.a-button-input').click();

   
    
    cy.get('#twotabsearchtextbox').type('iphone{enter}');

    // Click on the first product in the search results
    cy.get('.a-link-normal').first().click();

    // Click on the "Add to Cart" button
    cy.get('#add-to-cart-button').click();

    // Verify that the item is added to the cart
   // cy.get('#nav-cart-count').should('contain', '1');
  });
});
    
