import { md5 } from '../../support/utils';
const isRunningAtGithub = Cypress.env('envType') === 'github';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');
describe('Disassemable', () => {
  if (isRunningAtGithub) {
    it('skip test on github', () => {
      cy.log('skip test on github');
    });
    return;
  }

  beforeEach(() => {
    cy.setUpBackend(Cypress.env('backendIP'));
    cy.landingEditor();
  });

  it('Disassemable', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
    cy.get('.ant-space-item').contains('Layer').click();
    cy.get('.ant-modal-footer .ant-btn').contains('OK').click();

    cy.get('#svg_2',{timeout:50000}).should('exist');
    cy.get('div.element-title').contains('Layer 1 > SVG Object').should('exist');
    cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
      .should('have.attr', 'data-layer', 'Layer 1');
    cy.get('#disassemble_use').click();
    cy.get('.ant-btn').contains('Yes').click();
    cy.get('#svg_14').should('have.attr', 'fill', '#333333');
    cy.get('#svg_14').should('have.attr', 'd', 'M221.64844,105.8125L421.64844,105.8125L421.64844,305.8125L221.64844,305.8125L221.64844,105.8125z');
    cy.get('#svg_15').should('have.attr', 'fill', 'none');
    cy.get('#svg_15').should('have.attr', 'd', 'M221.64844,105.8125L421.64844,105.8125L421.64844,305.8125L221.64844,305.8125L221.64844,105.8125z');
    cy.get('#svg_16').should('have.attr', 'fill', '#333333');
    cy.get('#svg_16').should('have.attr', 'd', 'M322.34766,205.8125C322.34766,261.03906 277.57813,305.8125 222.34766,305.8125C167.12109,305.8125 122.34766,261.03906 122.34766,205.8125C122.34766,150.58203 167.12109,105.8125 222.34766,105.8125C277.57813,105.8125 322.34766,150.58203 322.34766,205.8125');
    cy.get('#svg_17').should('have.attr', 'fill', 'none');
    cy.get('#svg_17').should('have.attr', 'd', 'M322.34766,205.8125C322.34766,261.03906 277.57813,305.8125 222.34766,305.8125C167.12109,305.8125 122.34766,261.03906 122.34766,205.8125C122.34766,150.58203 167.12109,105.8125 222.34766,105.8125C277.57813,105.8125 322.34766,150.58203 322.34766,205.8125');
    });
  });
});
