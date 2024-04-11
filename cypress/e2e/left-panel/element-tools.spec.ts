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
    cy.get('.adm-capsule-tabs-tab-active').should('have.text', 'Basic');
    cy.get('[id="basic/icon-circle"]').click();
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'cx', '250');
    cy.get('#svg_1').should('have.attr', 'cy', '250');
    cy.get('#svg_1').should('have.attr', 'fill', '#333333');
  });

  it('import Decor element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab').contains('Decor').click();
    cy.get('#decor\\/i_circular-1').click();
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('7e57d924a29e7ad9272398d9e6595eec'));
  });

  it('import Animal element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab').contains('Animal').click();
    cy.get('#animals\\/i_land-1').click();
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('a37f09ed2a5e7ef11f0e46730c86a2b2'));
  });

  it('import Holiday element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab').contains('Holiday').click();
    cy.get('#holidays\\/i_celebration-1a').click();
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('c6ba2af1703fe1794c8d429e80fe17d2'));
  });

  it('import Nature element', () => {
    cy.clickToolBtn('Element');
    cy.get('.adm-capsule-tabs-tab').contains('Nature').click();
    cy.get('#nature\\/i_plants-1').click();
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'fill', '#333333');
    cy.get('#svg_9')
      .invoke('attr', 'd')
      .then((html) => expect(md5(html)).equal('0ef7d4d3cd1dcce93afd6c94e4da4963'));
  });
});
