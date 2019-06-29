
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env("homepage");
const emailAddress = Cypress.env("emailAddress1");
const password = Cypress.env("password1");
const projectName = "Test project"+Date.now()


Given('I create test project, cause you check it in that test', () => {
});
// arrange
Given(`I am on main page`, () => {
    // cy.xpath(page.button.locator).click()
    cy.visit(url)
    cy.xpath('//a[text()="Login / Sign up"]').click({force:true});
    cy.xpath("//input[@name='email']").type(emailAddress);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@data-id='submit']").click({force:true});
});

When('I am create project', () => {
    cy.xpath('.//a[@data-id="projectList"]').click({force:true});
    cy.xpath('.//div[@data-id="project-list-modal"]//button[@class="ui grey button"]').click({force:true});
    cy.xpath('.//div[@data-id="create-project-modal"]/div[@class="content"]//input[@name="name"]').type(projectName)
    cy.xpath('.//div[@data-id="create-project-modal"]/div[@class="actions"]/button[@data-id="createProjectButton"]').click({force:true});
});
// act
// assert
Then('Then project name is', () => {
    cy.xpath('//div[@data-id="project-list-modal"]').contains(projectName)
    .should('have.text',projectName)
})
