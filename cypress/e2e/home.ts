import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I navigate to the root URL', () => {
    cy.visit('/') // Visits the root URL
})

Then('I should be redirected to the login page', () => {
    cy.url().should('include', '/auth/login') // Asserts that the current URL should include '/auth/login'
})
