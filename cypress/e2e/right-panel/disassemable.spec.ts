const isRunningAtGithub = Cypress.env('envType') === 'github';
const beamSeriersName = Cypress.env('beamSeriersName');

describe('disassemable', () => {
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

  it('disassemable', () => {
    cy.connectMachine(beamSeriersName);
    cy.uploadFile('svg.svg', 'image/svg+xml');
    cy.get('div[class*="src-web-app-views-dialogs-AlertAndProgress-module__nonstop--"').should(
      'exist'
    );
    cy.contains('.ant-modal-content', 'Select layering style:').as('modal');
    cy.get('@modal').contains('Layer').click();
    cy.get('@modal').contains('OK').click();
    cy.get('div[class*="src-web-app-views-dialogs-AlertAndProgress-module__nonstop--"').should(
      'not.exist'
    );
    cy.get('#svg_2').should('exist');
    cy.get('div.element-title').contains('Layer 1 > SVG Object').should('exist');
    cy.get(
      '[class*="src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--"]'
    ).should('have.attr', 'data-layer', 'Layer 1');
    cy.get('#disassemble_use').click();
    cy.get('.ant-btn').contains('Yes').click();
    cy.get('#svg_14').should('have.attr', 'fill', '#333333');
    cy.get('#svg_14').should(
      'have.attr',
      'd',
      'M221.64844,105.8125L421.64844,105.8125L421.64844,305.8125L221.64844,305.8125L221.64844,105.8125z'
    );
    cy.get('#svg_15').should('have.attr', 'fill', 'none');
    cy.get('#svg_15').should(
      'have.attr',
      'd',
      'M221.64844,105.8125L421.64844,105.8125L421.64844,305.8125L221.64844,305.8125L221.64844,105.8125z'
    );
    cy.get('#svg_16').should('have.attr', 'fill', '#333333');
    cy.get('#svg_16').should(
      'have.attr',
      'd',
      'M322.34766,205.8125C322.34766,261.03906 277.57813,305.8125 222.34766,305.8125C167.12109,305.8125 122.34766,261.03906 122.34766,205.8125C122.34766,150.58203 167.12109,105.8125 222.34766,105.8125C277.57813,105.8125 322.34766,150.58203 322.34766,205.8125'
    );
    cy.get('#svg_17').should('have.attr', 'fill', 'none');
    cy.get('#svg_17').should(
      'have.attr',
      'd',
      'M322.34766,205.8125C322.34766,261.03906 277.57813,305.8125 222.34766,305.8125C167.12109,305.8125 122.34766,261.03906 122.34766,205.8125C122.34766,150.58203 167.12109,105.8125 222.34766,105.8125C277.57813,105.8125 322.34766,150.58203 322.34766,205.8125'
    );
  });
});
