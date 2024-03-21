import { md5 } from '../../support/utils';

const shapePanelPrefix = 'src-web-app-views-beambox-ShapePanel-ShapePanel-module__';

describe('phone element tools', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.landingEditor();
  });

  it('import ellipse element', () => {
    cy.get('.adm-tab-bar-item').contains('Element').click();
    cy.get('[class*="src-web-app-widgets-FloatingPanel-module__title--"]')
      .contains('Element')
      .should('exist');
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(0).click();
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'cx', '250');
    cy.get('#svg_1').should('have.attr', 'cy', '250');
    cy.get('#svg_1').should('have.attr', 'fill', '#333333');
    cy.get('#selectorGrip_rotate_bottom').should('be.visible');
    cy.get('#selectorGrip_dimension_info').should('be.visible').should('have.text', '50mm x 50mm');
  });

  it('import svg element', () => {
    cy.get('.adm-tab-bar-item').contains('Element').click();
    cy.get('.adm-capsule-tabs-tab-wrapper').contains('Graphics').click();
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(0).click();
    cy.get('#svg_9').should('exist').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('c6bc81cd8591fc0a1d2a4d77203d09e1'));
    cy.get('#selectorGrip_rotate_bottom').should('be.visible');
    cy.get('#selectorGrip_dimension_info')
      .should('be.visible')
      .should('have.text', '50mm x 47.6mm');
  });

  it('import line element', () => {
    cy.get('.adm-tab-bar-item').contains('Element').click();
    cy.get('.adm-capsule-tabs-tab-wrapper').contains('Line').click();
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(4).click();
    cy.get('#svg_1')
      .should('exist')
      .should('have.attr', 'stroke', '#333333')
      .should('have.attr', 'fill', 'none')
      .should('have.attr', 'data-ratiofixed', 'true')
      .should('have.attr', 'style', 'pointer-events:none')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke');
    cy.get('#svg_1')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('0a946d3b75ebf64f8c1820b9f06c45f0'));
    cy.get('#selectorGrip_rotate_bottom').should('be.visible');
    cy.get('#selectorGrip_dimension_info').should('be.visible').should('have.text', '50mm x 25mm');
  });
});
