
Feature: Create test project, using this test feature
Background:
Given I am on main page
When I am sign-in, using email
  @createprojecttest @focus
  Scenario: Create test project, using this test scenario
    When I am create project
    Then Then project name is 
