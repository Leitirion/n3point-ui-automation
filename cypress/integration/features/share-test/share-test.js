
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import "../../features/auth-v2/auth-v2.js";
import "../../features/createprojecttest/createprojecttest.js";
const emailAddress = Cypress.env("emailAddress");
const password = Cypress.env("password");
const projectName = "Test project"+Date.now()
When('I am share project', () => {
    cy.wait(1000)
    cy.xpath('//div[@data-id="project-list-modal"]').contains(projectName).click({force:true});
    cy.xpath('.//a[@data-id="share"]').click({force:true});
    cy.xpath('//div[@data-id="link-share-modal"]//div[@class="ui input"]//input[@name="newPerson"]').type(emailAddress);
    cy.xpath('//div[@data-id="link-share-modal"]//button[@class="ui button"]').click()
    
    cy.xpath('//button[@data-id="close"]').click()
});

Then('I am login to user_2 and see sharing project', () => {
    cy.xpath('//div[@data-id="profile-listbox"]').contains("Logout").click({force:true});
    cy.xpath('//a[text()="Login / Sign up"]').click({force:true});
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click({force:true});
    cy.xpath('.//a[@data-id="projectList"]').click({force:true});
    cy.xpath('//div[@data-id="project-list-modal"]').contains(projectName)
    .should('have.text', projectName);
})
