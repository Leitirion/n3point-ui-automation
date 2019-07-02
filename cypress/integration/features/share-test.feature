
Feature: share functional test feature
Background:
  Given I am on main page
  When I am sign-in, using email
  When I am create project
  Then Then project name is 

  @share-test 
  Scenario: share functional test scenario
    When I am share project
    Then I am login to another user and see sharing project
