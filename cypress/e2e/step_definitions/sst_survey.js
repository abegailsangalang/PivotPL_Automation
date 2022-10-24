import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { testPageObjects } from "../../page_objects/sstLogin_PO";
import surveyID from '../../fixtures/surveyLink/shortenUrl.json';
const tests = require('../../fixtures/studentsData/Student.json')

const configs = Cypress.env();

Given('I access to the provided survey link', () => { 
    cy.visit(configs.env.sstLogin);
});

Then('the SST survey login elements should be properly displayed', () => {
    cy.get(testPageObjects.pivotLogo).should('be.visible');
    cy.get(testPageObjects.sstLabel).should('be.visible').contains('Student Survey on Teaching');
    cy.get(testPageObjects.sstSubLabel).should('be.visible').contains('Welcome to your student survey on teaching');
    cy.get(testPageObjects.surveyID).type(surveyID.class);
    tests.forEach(test=>{
        cy.get(testPageObjects.studentID).type(test.Students);
        cy.get(testPageObjects.sstLoginBtn).click();
    })
});