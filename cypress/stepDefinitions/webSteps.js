import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to automation exercise website', () => {
    cy.visit('https://www.demoblaze.com/index.html');
})

When('I sign up a new user', () => {
    cy.get('[id="signin2"]').click();
    cy.wait(2000);
    cy.get('[id="sign-username"]').type('demianadriel9');
    cy.get('[id="sign-password"]').type("BaufestChllg1");
    cy.get('.btn').contains('Sign up').click();

    cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('Sign up successful.');
        return true;
     })
})

When('I login with new user', () => {
    cy.get('[id="login2"]').click();
    cy.wait(2000);
    cy.get('[id="loginusername"]').type('demianadriel5');
    cy.get('[id="loginpassword"]').type("BaufestChllg1");
    cy.get('.btn').contains('Log in').click();

    //assertions
    cy.get('[id="nameofuser"]').should('contain', 'Welcome demianadriel5');
})

When('I logout', () => {
    cy.get('[id="logout2"]').click();

    //assertions
    cy.get('[id="signin2"]').should('be.visible');
})

When('I add a laptop to cart', () => {
    cy.contains('Sony vaio i5').click();
    cy.get('.btn').contains('Add to cart').click();

    cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('Product added');
        return true;
     })
})