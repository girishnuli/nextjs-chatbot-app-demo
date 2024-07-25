Feature: User Chat Interaction
    In order to interact with the chatbot
    As a logged-in user
    I want to send messages and see responses from the chatbot

    Scenario: Successful login and interaction with chatbot
        Given I am on the login page
        When I enter a valid email and password
        And I press the login button
        Then I should be redirected to the homepage
        When I enter a prompt into the chat input
        And I submit the chat form
        Then I should see a streaming response in the chat display
