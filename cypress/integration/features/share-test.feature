
Feature: share functional test feature
Background:
  Given I am on main page
  When I am sign-in, using email
  When I am create project
  Then Then project is in project list

  @share-test 
  Scenario: share functional test scenario
    When I am share project
    Then I am login to user_2 and see sharing project
