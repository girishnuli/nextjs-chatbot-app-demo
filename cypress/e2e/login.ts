// login.ts

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the login page', () => {
    cy.visit('/auth/login') // Navigates directly to the login page
    // Disable HTML5 validation so that we see proper error messages for client and server validation
    cy.get('form').invoke('attr', 'novalidate', 'novalidate')
})

// User login scenario
When(
    'I enter user@example.com and secure!password123 into the login form',
    () => {
        cy.get('input[name="email"]').type('user@example.com')
        cy.get('input[name="password"]').type('secure!password123')
    }
)

// Admin login scenario
When(
    'I enter admin@example.com and admin!password456 into the login form',
    () => {
        cy.get('input[name="email"]').type('admin@example.com')
        cy.get('input[name="password"]').type('admin!password456')
    }
)

When('I press the login button', () => {
    cy.get('button[type="submit"]').click() // Simulates clicking the login button
})

Then('I should be redirected to the homepage', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/') // Checks that the URL is the homepage
})

// Scenario for invalid email format
When(
    'I enter userexample.com and secure!password123 into the login form',
    () => {
        cy.get('input[name="email"]').type('userexample.com')
        cy.get('input[name="password"]').type('secure!password123')
    }
)

// Scenario for too short password
When('I enter user@example.com and short! into the login form', () => {
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('short!')
})

// Scenario for missing special character in password
When('I enter user@example.com and password1234 into the login form', () => {
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('password1234')
})

Then('I should see an error message Please enter a valid email', () => {
    cy.contains('Invalid email format.').should('be.visible') // Checks for visibility of the error message
})

Then(
    'I should see an error message Password must be at least 8 characters long',
    () => {
        cy.contains('Password must be at least 8 characters long').should(
            'be.visible'
        ) // Checks for visibility of the error message
    }
)

Then(
    'I should see an error message Password must contain at least one special character',
    () => {
        cy.contains(
            'Password must contain at least one special character'
        ).should('be.visible') // Checks for visibility of the error message
    }
)
