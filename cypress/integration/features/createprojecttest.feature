
Feature: Create test project, using this test feature
Background:
  Given I create test project, cause you check it in that test

  @createprojecttest @focus
  Scenario: Create test project, using this test scenario
    Given I am on main page
    When I am create project
    Then Then project name is 
