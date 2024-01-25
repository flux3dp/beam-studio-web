import { md5 } from '../../support/utils';

// TODO: expect image result with one specific md5 value
// ImageData generate different results on different browser currently
describe('manipulate image function', () => {
  beforeEach(() => {
    cy.landingEditor();
    cy.viewport('iphone-xr');

  });
  it('Below-undo,redo', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#replace_with').click({ force: true });
    cy.get('#file-input').attachFile('map.jpg');
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(8000);
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('33385d5b2fa8081f88479da4fb3bba23');
    });
    cy.get('[class="adm-tab-bar-item"]')
      .contains('Undo')
      .click({force: true});
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('e42bd70861ca8cfd34ddf8b89a1495e0');
    });
    cy.get('[class="adm-tab-bar-item"]')
      .contains('Redo')
      .click({force: true});
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('33385d5b2fa8081f88479da4fb3bba23');
    });
  });

  it('Top-undo,redo', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#replace_with').click({ force: true });
    cy.get('#file-input').attachFile('map.jpg');
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(8000);
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('33385d5b2fa8081f88479da4fb3bba23');
    });
    cy.get('[class="src-web-app-components-beambox-top-bar-CommonTools-module__common-tools-container--bV-00"]')
      .get('[title="Undo"]')
      .click({force: true});
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('e42bd70861ca8cfd34ddf8b89a1495e0');
    });
    cy.get('[class="src-web-app-components-beambox-top-bar-CommonTools-module__common-tools-container--bV-00"]')
      .get('[title="Redo"]')
      .click({force: true});
    cy.get('#svg_1').click().invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('33385d5b2fa8081f88479da4fb3bba23');
    });
  });

});
