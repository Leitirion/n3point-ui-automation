
Feature: auth feature
Background:
  Given I authed

  @auth @focus
  Scenario: auth scenario
    Given given auth
    Then I see "User signed in!" in the message

    
  
  
   
   
    
    
