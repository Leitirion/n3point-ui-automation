
Feature: auth feature
Background:
  Given I authed

  @auth @focus
  Scenario: auth scenario
    Given given auth
    Then I see "N3point.io" in the title

    
  
  
   
   
    
    
