
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env("homepage");
const emailAddress = Cypress.env("emailAddress1");
const password = Cypress.env("password1");

Given('I authed, cause you check it in that test',() => {
});
// arrange
Given(`I am on main page`, () => {
    // cy.xpath(page.button.locator).click()
    cy.visit(url);
});
When('I am sign-in, using email', () => {
    cy.xpath('//a[text()="Login / Sign up"]').click({force:true});
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click({force:true});
});
// assert
Then(`then profile name is {string}`, (name) => {
    cy.xpath('.//div[@data-id="profile-listbox"]/div[@class="text"]').should('have.text',name);
});

