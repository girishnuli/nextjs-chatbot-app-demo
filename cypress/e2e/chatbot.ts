// chatbot.ts

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the login page', () => {
    cy.visit('/auth/login')
})

When('I enter a valid email and password', () => {
    cy.get('input[name="email"]').type('user@example.com') // Assuming hardcoded valid user
    cy.get('input[name="password"]').type('secure!password123') // Assuming hardcoded valid password
})

When('I press the login button', () => {
    cy.get('button[type="submit"]').click()
})

Then('I should be redirected to the homepage', () => {
    cy.url().should('include', '/') // Ensures the URL is the homepage
})

When('I enter a prompt into the chat input', () => {
    cy.get('#chat-input').type('Hello, can you help me?')
})

When('I submit the chat form', () => {
    cy.get('form').submit()
})

Then('I should see a streaming response in the chat display', () => {
    // Assuming the first response message will be from the Assistant
    // // Waits for the message with "Assistant:" to appear in any message div
    cy.get('[id^="message-"]')
        .contains('Assistant:', { timeout: 30000 })
        .should('be.visible')
})
