const featureTemplate=(issue='Issue')=>`
Feature: ${issue} feature
Background:
  Given I authed

  @${issue} @focus
  Scenario: ${issue} scenario
    Given given ${issue}
    When when ${issue}
    Then then ${issue}
`;
const template =(issue='Issue')=>`
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const page = {
    button: {
        locator: ''
    }
}

// arrange
Given(\`given ${issue}\`, () => {
    // cy.xpath(page.button.locator).click()
})
// act
When(\`when ${issue}\`, () => {
})
// assert
Then(\`then ${issue}\`, () => {
})
`;
// eslint-disable-next-line 
const featurename = process.argv[2];
const fs = require("fs-extra");
const featurePath = `./cypress/integration/features/${featurename}.feature`;
const path = `./cypress/integration/features/${featurename}/${featurename}.js`;
var data = template(featurename);

fs.outputFile(path, data, (err) => {
  if (err) {
     // eslint-disable-next-line 
     console.error(err);
  }
  fs.writeFile(featurePath, featureTemplate(featurename), (feautureErr) => {
    if (feautureErr) {
      // eslint-disable-next-line 
      console.error(feautureErr);
    }
    // eslint-disable-next-line 
    console.log(`Successfully generated  featureFile: ${ featureTemplate(featurename)}.`);
  });
  // eslint-disable-next-line 
  console.log(`Successfully generated jsFile: ${path}.`);
});
