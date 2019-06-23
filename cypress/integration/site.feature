Feature: The Site

  I want to open a social network page
  
  @focus
  Scenario: Opening a social network page
    Given I open page
    Then I see "Iqa.st - single entrypoint for your team." in the title


    cy.get('email')
        .type(emailAddress);
    cy.get('password')
        .type(password);
    
const emailAddress = Cypress.env("emailAddress");
const password = Cypress.env("password");