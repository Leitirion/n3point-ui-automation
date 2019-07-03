
import {When,Then } from "cypress-cucumber-preprocessor/steps";
import "../../features/auth-v2/auth-v2.js";
const Title = "Test Title"+Date.now();
const content = "Test content"+Date.now();
// act
When(`I am create Markdown widget`, () => {
    cy.xpath('.//a[@data-id="projectList"]').click({force:true});
    cy.xpath('//div[@data-id="project-list-modal"]').contains("demo project").click({force:true});
    cy.xpath('//div[@data-id="profile-listbox"]').contains("Add widget").click({force:true});
    cy.xpath('//div[@data-id="add-widget-modal"]//input[@name="title"]').type(Title);
    cy.xpath('//div[@data-id="add-widget-modal"]//input[@name="content"]').type(content);
    cy.xpath('//div[@data-id="add-widget-modal"]//button[@data-id="save"]').click();
})
// assert
Then(`I see Markdown widget in project page`, () => {
    cy.xpath('//div[@class="ui container"]').contains(Title)
    .should('contains.text',Title)
   
    cy.xpath('//div[@class="ui segment"]').contains(content)
   .should('contains.text',content);
})
