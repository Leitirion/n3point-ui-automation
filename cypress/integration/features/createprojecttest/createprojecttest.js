
import { Given,Then } from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env("homepage");
const emailAddress = Cypress.env("emailAddress1");
const password = Cypress.env("password1");
const CPT = Cypress.env("CPT");

// arrange
Given(`given createprojecttest`, () => {
    // cy.xpath(page.button.locator).click()
    cy.visit(url)
    cy.xpath('//a[text()="Login"]').click()
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click();
})
// act
// assert
Then(`then createprojecttest`, () => {
    cy.xpath('.//div[@data-id="profile-listbox"]').click();
    cy.get('a[data-id="projectList"]').click();
    cy.xpath('.//p[text()="open-project"]').click();
    cy.xpath('//a[@data-id="project"]').click();
    cy.xpath("//input[@name='name']").clear().type(CPT);
    cy.xpath("//div[@data-id='project-settings-modal']//button[@data-id='save']").click();
    cy.get('a[data-id="project"]').should('have.text', CPT);
    cy.xpath('//a[@data-id="project"]').click();
    cy.xpath("//input[@name='name']").clear().type("open-project");
    cy.xpath("//div[@data-id='project-settings-modal']//button[@data-id='save']").click();
    cy.get('a[data-id="project"]').should('have.text', "open-project");
    cy.xpath('.//div[@data-id="profile-listbox"]').click();
    cy.xpath('.//div[text()="Logout"]').click();
    cy.xpath('//a[text()="Login"]').should('have.text', "Login")
})
