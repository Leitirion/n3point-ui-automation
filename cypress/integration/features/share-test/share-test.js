
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
const url = Cypress.env("URL");
const emailAddress = Cypress.env("emailAddress1");
const password = Cypress.env("password1");


// arrange
Given(`given share-test`, () => {
    // cy.xpath(page.button.locator).click()
    cy.visit(url);
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click();
})
// act

// assert
Then(`then share-test`, () => {
    cy.get("a[data-id='share']").click();
})
