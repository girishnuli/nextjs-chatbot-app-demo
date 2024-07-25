Feature: Root Redirect to Login
    In order to ensure secure access to the application
    As a casual or tech-savvy user
    I want to be redirected to the login page when accessing the root URL

    Scenario: Redirect to Login Page from Root
        Given I navigate to the root URL
        Then I should be redirected to the login page