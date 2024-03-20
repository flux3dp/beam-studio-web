import { md5 } from '../../support/utils';

const isRunningAtGithub = Cypress.env('envType') === 'github';

// TODO: expect image result with one specific md5 value
// ImageData generate different results on different browser currently
describe('manipulate image function', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('remove gradient see if trace function gets changed', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').click({ force: true });
    cy.get('#trace').should('have.attr', 'disabled');
    cy.get('.ant-switch').click({ force: true });
    cy.wait(1500);
    cy.contains('Threshold brightness').should('exist');
    cy.get('#trace').click({ force: true });
    cy.wait(1500);
    cy.get('#svg_3').click({ force: true });
    cy.get('div.element-title').contains('Layer 1 > Path');
    cy.get('#svg_3')
      .invoke('attr', 'd')
      .then((d) => {
        expect(md5(d)).equal('da6270fbdc3ef610d316682c6a95389c');
      });
  });

  it('check gradient with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('.ant-switch').click({ force: true });
    cy.get('#svg_1')
      .should('have.attr', 'data-threshold', '128')
      .should('have.attr', 'data-shading', 'false');
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('8794655cf390c5f867ed5eff13f3bce4');
        else expect(md5(href)).equal('0a52a26dec2bac9490b838b039756347');
      });
    cy.get('.ant-switch').click({ force: true });
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1')
      .should('have.attr', 'data-threshold', '254')
      .should('have.attr', 'data-shading', 'true');
    cy.wait(5000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('52bc0921c0dee83bf4905d694c8e7b90');
        else expect(md5(href)).equal('4b2c318bdec15b72b870676903b1398c');
      });
  });

  it('check replace with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#replace_with').click();
    cy.get('#file-input').attachFile('map.jpg');
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(10000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('8b79e9a445262e8412a863d5ec06d16b');
        else expect(md5(href)).equal('225e1c371779312b52a2c70ff42780c8');
      });
  });

  it('check grading with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').click({ force: true });
    cy.wait(2000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#grading').click();
    cy.get('div.ant-modal').should('exist');
    cy.wait(2000);
    cy.get('rect#1')
      .trigger('mousedown', { which: 1, clientX: 922, clientY: 125, force: true })
      .trigger('mousemove', { which: 1, clientX: 922, clientY: 325, force: true })
      .then(() => {
        cy.get('rect#1').trigger('mouseup');
      });
    cy.get('button[class^="ant-btn"]').contains('Okay').click();
    cy.get('.progress', { timeout: 5000 }).should('not.exist');
    cy.wait(10000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('3c43c5b5ec5a8f24d2eb35a508d4b85d');
        else expect(md5(href)).equal('4d696e44b940d87e89ecccca671fd9c9');
      });
  });

  it('check crop with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#crop').click();
    cy.wait(3000);
    cy.get('.point-se').move({ deltaX: 0, deltaY: -200 });
    cy.get('button[class^="ant-btn"]').contains('Okay').click();
    cy.get('.progress', { timeout: 10000 }).should('not.exist');
    cy.get('.photo-edit-panel', { timeout: 5000 }).should('not.exist');
    cy.wait(10000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('82c48181e33cdd9b8127e40f52703a2f');
        else expect(md5(href)).equal('5525bd3998a7ce95a35e1618e0db8c43');
      });
  });

  it('check bevel with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('preview.png', 'image/png');
    cy.get('#bevel').click();
    cy.get('.progress', { timeout: 120000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(10000);
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
    cy.get('.progress', { timeout: 20000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(10000);
    cy.get('#svg_1')
      .invoke('attr', 'xlink:href')
      .then((href) => {
        if (isRunningAtGithub) expect(md5(href)).equal('de1073c40f0c095297d9d87af6b74dc3');
        else expect(md5(href)).equal('4d7e7b1f937e9161c3f3c567d5ee869b');
      });
  });
});
