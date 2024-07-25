Feature: Login Authentication
    In order to access user-specific resources
    As a user
    I want to be able to log into my account with correct credentials and receive appropriate messages for incorrect attempts

    Scenario: Successful Login with User Credentials
        Given I am on the login page
        When I enter user@example.com and secure!password123 into the login form
        And I press the login button
        Then I should be redirected to the homepage

    Scenario: Successful Login with Admin Credentials
        Given I am on the login page
        When I enter admin@example.com and admin!password456 into the login form
        And I press the login button
        Then I should be redirected to the homepage

    Scenario: Login with invalid email format
        Given I am on the login page
        When I enter userexample.com and secure!password123 into the login form
        And I press the login button
        Then I should see an error message Please enter a valid email

    Scenario: Login with too short password
        Given I am on the login page
        When I enter user@example.com and short! into the login form
        And I press the login button
        Then I should see an error message Password must be at least 8 characters long

    Scenario: Login with password missing special character
        Given I am on the login page
        When I enter user@example.com and password1234 into the login form
        And I press the login button
        Then I should see an error message Password must contain at least one special character
