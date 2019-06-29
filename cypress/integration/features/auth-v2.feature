
Feature: Sign-in, using email feature

  @auth-v2 @focus
  Scenario: Sign-in, using email scenario
    Given I am on main page
    When I am sign-in, using email
    Then then profile name is "Test"
