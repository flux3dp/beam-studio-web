import { md5 } from '../../support/utils';

const isRunningAtGithub = Cypress.env('envType') === 'github';

describe('mobile image tools', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.landingEditor();
  });

  it('remove gradient see if trace function gets changed', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#gradient').should('exist').click({ force: true });
    cy.get('#threshold').should('exist');
    cy.get('#trace').should('exist').click({ force: true });
    cy.get('#svg_3').click({ force: true });
    cy.get('div.element-title').contains('Layer 1 > Path');
    cy.get('#svg_3')
      .invoke('attr', 'd')
      .then((d) => {
        if (isRunningAtGithub) expect(md5(d)).equal('01da9b4d6e81051ee1439f07c169c710');
        else expect(md5(d)).equal('cc506f32e6e24b10d9c9dc6a7b6140de');
      });
  });

  it('check gradient with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#gradient').click({ force: true });
    cy.get('#svg_1')
      .should('have.attr', 'data-threshold', '128')
      .should('have.attr', 'data-shading', 'false');
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('7a59512b45de002b41b3c4ebdcc3760a');
        else expect(md5(href)).equal('09d3a797b7747f423cd858c6e897d485');
      });
    cy.get('#gradient').click({ force: true });
    cy.get('#svg_1')
      .should('have.attr', 'data-threshold', '254')
      .should('have.attr', 'data-shading', 'true');
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('b662e9f0b0bbab4fdc7859faea0d47ef');
        else expect(md5(href)).equal('74551b0852c0f552d72225ce5c63c5f2');
      });
  });

  it('check replace with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#replace_with').click({ force: true });
    cy.get('#file-input').attachFile('map.jpg');
    cy.get('.progress').should('not.exist');
    cy.wait(8000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1')
      .click()
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('53c9d4f97685ea5903e3363f27611510');
        else expect(md5(href)).equal('94fd9b5fdf467675b2eb9e20ae1ea66f');
      });
  });

  it('check brightness with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#grading').click();
    cy.get('.ant-modal-content').should('exist');
    cy.wait(1000);
    cy.get('[class*="src-web-app-views-beambox-Photo-Edit-Panel-module__field--"]').should('exist');
    cy.get('.ant-modal-content .ant-input-number-input').eq(0).type('25{enter}');
    cy.get('button.ant-btn').contains('Okay').click();
    cy.get('.progress').should('not.exist');
    cy.wait(5000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('ab08bb3b784e10e362dd1cc108f97c36');
        else expect(md5(href)).equal('690258853fa3923356f12a971a2807f8');
      });
  });

  it('check crop with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#crop').click();
    cy.wait(3000);
    cy.get('.point-se').move({ deltaX: 0, deltaY: -100 });
    cy.get('button.ant-btn').contains('Okay').click();
    cy.get('.progress', { timeout: 10000 }).should('not.exist');
    cy.get('.photo-edit-panel', { timeout: 5000 }).should('not.exist');
    cy.wait(3000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('951e0851e66b255a005aaa7fda15727a');
        else expect(md5(href)).equal('4c135ebf9ed7172043580b9beaa9c87d');
      });
  });

  it('check bevel with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('preview.png', 'image/png');
    cy.get('#bevel').click();
    cy.get('.progress', { timeout: 12000 }).should('not.exist');
    cy.wait(3000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        expect(md5(href)).equal('d0a40f28082679713deda90d73e0e86b');
      });
  });

  it('check invert with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#invert').click();
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.wait(3000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('de1073c40f0c095297d9d87af6b74dc3');
        else expect(md5(href)).equal('4d7e7b1f937e9161c3f3c567d5ee869b');
      });
  });
});
