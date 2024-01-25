import { md5 } from '../../support/utils';
const isRunningAtGithub = Cypress.env('envType') === 'github';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');
describe('conver to path & weld text', () => {
  if (isRunningAtGithub) {
    it('skip test on github', () => {
      cy.log('skip test on github');
    });
    return;
  }

  const drawText = () => {
    cy.get('div#left-Text>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.realType('123');
    cy.get('#svg_1').should('exist');
    cy.wait(500);
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
  };


  beforeEach(() => {
    cy.setUpBackend(Cypress.env('backendIP'));
    cy.landingEditor();
  });

  it('conver to path', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    drawText();
    cy.get('div#object-panel').should('exist');
    cy.get('.ant-select-selection-item[title="Font"]').click();
    cy.get('.ant-select-item-option-content img[alt="Mr Bedfort"]').click();
    cy.get('#svg_1').should('have.attr', 'font-family').and('eq', "'Mr Bedfort'");
    cy.get('#convert_to_path').click();
    cy.get('#svg_2', {timeout:(5000)}).should('exist');
    cy.get('#svg_2')
      .invoke('attr', 'd')
      .then((d) => {
        expect(md5(d)).equal('9cc3c811322852336ca909dbc5a41326');
      });
  });

  it('Weld Text', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    drawText();
    cy.get('div#object-panel').should('exist');
    cy.get('.ant-select-selection-item[title="Font"]').click();
    cy.get('.ant-select-item-option-content img[alt="Mr Bedfort"]').click();
    cy.get('#svg_1').should('have.attr', 'font-family').and('eq', "'Mr Bedfort'");
    cy.wait(500);
    cy.get('#letter_spacing')
      .clear().wait(500)
      .realType('-0.8{enter}');
    cy.get('#svg_1').should('have.attr', 'letter-spacing').and('eq', '-0.8em');
    cy.get('#weld').click();
    cy.get('#svg_2', {timeout:(5000)}).should('exist');
    cy.get('#svg_2')
      .invoke('attr', 'd')
      .then((d) => {
        expect(md5(d)).equal('464cd91658491e7fd70e40ea1bdadb31');
      });
  });

});
