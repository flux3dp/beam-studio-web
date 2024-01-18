import { md5 } from "../../support/utils";
describe('parameters', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('change paramenters', () => {
    cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '6');
    cy.get('#power-input').should('have.attr', 'value', '60');
    cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '3');
    cy.get('#power-input').should('have.attr', 'value', '60');

  });

  it('new paramenters', () => {
    cy.get('#speed-input').clear().type('99{enter}');
    cy.get('#power-input').clear().type('99{enter}');    
    cy.get(`[class*="src-web-app-views-beambox-Right-Panels-ConfigPanel-SaveConfigButton-module__btn--uh2Fr"] img[src="img/icon-plus.svg"]`).click();
    cy.get('.ant-input').click().type('Material');
    cy.get('.ant-btn').contains('OK').click();
    cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '3');
    cy.get('#power-input').should('have.attr', 'value', '60');
    cy.get('#laser-config-dropdown').select('Material');
    cy.get('#speed-input').should('have.attr', 'value', '99');
    cy.get('#power-input').should('have.attr', 'value', '99');    
  })

  it('export paramenters', () => {
    const cypressDownloadPngPath = Cypress.env('cypressDownloadPath');
    cy.get(`[class*="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigOperations-module__button--0BVJp"] img[src="img/right-panel/icon-export.svg"]`).click();
    cy.readFile(cypressDownloadPngPath).then((info) => {
      expect(md5(info)).equal('d41d8cd98f00b204e9800998ecf8427e')})
  })

  it('upload paramenters', () => {
    cy.get(`[class*="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigOperations-module__button--0BVJp"] img[src="img/right-panel/icon-import.svg"]`).click();
    cy.get('#file-input').attachFile('testfile.json');
    cy.get('.ant-btn').contains('Confirm').click();
    cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '5');
    cy.get('#power-input').should('have.attr', 'value', '45');
  })

  it('reset parameter',() =>{
    cy.get(`[class*="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigOperations-module__button--0BVJp"] img[src="img/right-panel/icon-import.svg"]`).click();
    cy.get('#file-input').attachFile('testfile.json');
    cy.get('.ant-btn').contains('Confirm').click();
    cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '5');
    cy.get('#power-input').should('have.attr', 'value', '45');
    cy.get(`[class*="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigOperations-module__button--0BVJp"] img[src="img/right-panel/icon-setting.svg"]`).click();
    cy.get('.ant-btn').contains('Reset').click();
    cy.get('.ant-btn').contains('Yes').click();
    cy.get('.ant-btn').contains('Save and Exit').click();
    cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
    cy.get('#speed-input').should('have.attr', 'value', '3');
    cy.get('#power-input').should('have.attr', 'value', '60');
  })
})
