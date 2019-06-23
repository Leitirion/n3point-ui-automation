
import { Given, When} from "cypress-cucumber-preprocessor/steps";
const url = Cypress.env("URL");
const emailAddress = Cypress.env("emailAddress");
const password = Cypress.env("password");


Given(`given auth`, () => {
    // cy.xpath(page.button.locator).click()
 cy.log(Cypress.env("URL"))
    .log(Cypress.env())
    .visit(url);
    cy.log(Cypress.env("emailAddress"))
    .get('input[name="email"]')
    .type(emailAddress);
    cy.log(Cypress.env("password"))
    .get('input[name="password"]')
    .type(password);
    cy.get('button[data-id=submit]').click();
});
