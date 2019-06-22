import { Given } from "cypress-cucumber-preprocessor/steps";


const url =  Cypress.env("URL");
Given('I open page', () => {
    cy.log(Cypress.env("URL"))
      .log(Cypress.env())
      .visit(url);
});
