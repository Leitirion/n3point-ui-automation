
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env("homepage");
const emailAddress = Cypress.env("emailAddress1");
const password = Cypress.env("password1");



// arrange
Given(`given auth-v2`, () => {
    // cy.xpath(page.button.locator).click()
    cy.visit(url)
    cy.xpath('//a[text()="Login"]').click()
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click();
})
// assert
Then(`then auth-v2`, () => {
    cy.xpath('.//div[text()="123@gmail.com"]').should('have.text', emailAddress);
    
})

