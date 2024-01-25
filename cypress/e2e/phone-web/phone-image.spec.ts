import { md5 } from '../../support/utils';

// TODO: expect image result with one specific md5 value
// ImageData generate different results on different browser currently
describe('manipulate image function', () => {
  beforeEach(() => {
    cy.landingEditor();
    cy.viewport('iphone-xr');

  });
  it('remove gradient see if trace function gets changed', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#gradient').should('exist');
    cy.get('#gradient').click({ force: true });
    cy.wait(1000);
    cy.get('#threshold').should('exist');
    cy.get('#trace').click({ force: true });
    cy.wait(1000);
    cy.get('#svg_3').click({ force: true });
    cy.get('div.element-title').contains('Layer 1 > Path');
    cy.get('#svg_3').invoke('attr', 'd').then((d) => {
      expect(md5(d)).equal('b5971dfb45455634da27dd65c7a1c6fb');
    });
  });

  it('check gradient with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#gradient').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').should('have.attr', 'data-threshold', '128').should('have.attr', 'data-shading', 'false');
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('2d61b6172580a2e8a13ee7e91e14b9e5');
    });
    cy.get('#gradient').click({ force: true });
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-threshold', '254').should('have.attr', 'data-shading', 'true');
    cy.wait(500);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('e42bd70861ca8cfd34ddf8b89a1495e0');
    });
  });

  it('check replace with image', () => {
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
  });

  it('check Brightness with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#grading').click();
    cy.get('[class="ant-modal-content"]').should('exist');
    cy.wait(1000);
    cy.get('[class="src-web-app-views-beambox-Photo-Edit-Panel-module__field--wbD8x"]')
    cy.get('[class="ant-input-number css-dev-only-do-not-override-1bq9a37 src-web-app-views-beambox-Photo-Edit-Panel-module__input--knn7C"]')
      .eq(0)
      .click()
      .type('25');
    cy.get('button[class^="ant-btn"]').contains('Okay').click();
    cy.get('.progress', { timeout: 5000 }).should('not.exist');
    cy.wait(5000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('be91b1388e6ad406bd6c250024a30be3');
    });
  });

  it('check crop with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#crop').click();
    cy.wait(3000);
    cy.get('.point-se').move({ deltaX: 0, deltaY: -100 });
    cy.get('button[class^="ant-btn"]').contains('Okay').click();
    cy.get('.progress', { timeout: 10000 }).should('not.exist');
    cy.get('.photo-edit-panel', { timeout: 5000 }).should('not.exist');
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('67cfcde3bcb99826faebee4b42526eed');
    });
  });

  it('check bevel with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('preview.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#bevel').click();
    cy.get('.progress', { timeout: 12000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('d0a40f28082679713deda90d73e0e86b');
    });
  });

  it('check invert with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('[class="adm-floating-panel-content"]')
      .get('[class="anticon src-web-app-widgets-FloatingPanel-module__close-icon--4IA2w"]')
      .click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#invert').click();
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
        expect(md5(href)).equal('de1073c40f0c095297d9d87af6b74dc3');
    });
  });

});
