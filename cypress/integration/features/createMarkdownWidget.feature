
Feature: createMarkdownWidget feature
Background:
  Given I am on main page
  When I am sign-in, using email

  @createMarkdownWidget
  Scenario: createMarkdownWidget scenario
    When I am create Markdown widget
    Then I see Markdown widget in project page
