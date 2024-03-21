import { md5 } from '../../support/utils';

const shapePanelPrefix = 'src-web-app-views-beambox-ShapePanel-ShapePanel-module__';

describe('import from element panel', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('import ellipse element', () => {
    cy.clickToolBtn('Element');
    cy.get('.ant-modal-header').contains('Element').should('exist');
    cy.get('.ant-modal-body').should('exist');
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('exist');
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('have.text', 'Shape');
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(0).click();
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'cx', '250');
    cy.get('#svg_1').should('have.attr', 'cy', '250');
    cy.get('#svg_1').should('have.attr', 'fill', '#333333');
  });

  it('import svg element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab-wrapper').contains('Graphics').click();
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('exist');
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('have.text', 'Graphics');
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(0).click();
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('c6bc81cd8591fc0a1d2a4d77203d09e1'));
  });

  it('import line element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab-wrapper').contains('Line').click();
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('exist');
    cy.get('.adm-capsule-tabs-tab.adm-capsule-tabs-tab-active').should('have.text', 'Line');
    cy.get(`.anticon[class*="${shapePanelPrefix}icon--"]`).eq(4).click();
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'stroke', '#333333');
    cy.get('#svg_1').should('have.attr', 'fill', 'none');
    cy.get('#svg_1').should('have.attr', 'data-ratiofixed', 'true');
    cy.get('#svg_1').should('have.attr', 'style', 'pointer-events:none');
    cy.get('#svg_1').should('have.attr', 'vector-effect', 'non-scaling-stroke');
    cy.get('#svg_1')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('0a946d3b75ebf64f8c1820b9f06c45f0'));
  });
});
