
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import "../../features/auth-v2/auth-v2.js";
const projectName = "Test project"+Date.now()
const url = Cypress.env("homepage");



When('I am create project', () => {
    cy.xpath('.//a[@data-id="projectList"]').click({force:true});
    cy.xpath('.//div[@data-id="project-list-modal"]//button[@class="ui grey button"]').click({force:true});
    cy.xpath('.//div[@data-id="create-project-modal"]/div[@class="content"]//input[@name="name"]').type(projectName)
    cy.xpath('.//div[@data-id="create-project-modal"]/div[@class="actions"]/button[@data-id="createProjectButton"]').click({force:true});
});
// act
// assert
Then('Then project is in project list', () => {
    cy.xpath('//div[@data-id="project-list-modal"]').contains(projectName)
    .should('have.text',projectName)
})
