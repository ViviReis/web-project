import { formatAMPM } from '../support/utils';
import 'cypress-file-upload';
const el = require('../elements/form/elements').ELEMENTS;
var faker = require('faker-br');
const name = faker.name.findName();

context('Form', () => {
    describe('Pipefy QA Interview Form', () => {
      it('User should be able to fill in the Pipefy QA interview form', () => {
       cy.visit('/public/form/6qhKljB1');
       cy.get(el.yourName).type(name)
       cy.get(el.aboutYou).type(`${Cypress.env('aboutYou')}`);
       cy.get(el.checkOption).check({ force: true }).should('be.checked');
       cy.get(el.userSelect).click();
       cy.get(el.userList).contains(`${Cypress.env('userTitle')}`).click(1);
       cy.get(el.userTitle).click().contains(`${Cypress.env('userTitle')}`);
       cy.get(el.date).click();
       cy.get('button').contains('Save').click();
       cy.get('select').select('B').contains('B');
       cy.get(el.time).type(formatAMPM(new Date()));
       cy.get(el.phoneNume).type(`${Cypress.env('phoneNumber')}`);
       cy.get(el.attachFileInput).attachFile('example.json');
       cy.get(el.attachFileSaved).contains('Drop files to attach, or').attachFile('example.json');
       cy.get(el.submitButton).should('be.not.disabled').click({force:true});
      });
    })
  });