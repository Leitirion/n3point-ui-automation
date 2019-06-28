
Feature: auth-v2 feature
Background:
  Given I authed

  @auth-v2 @focus
  Scenario: auth-v2 scenario
    Given given auth-v2
    Then then auth-v2
