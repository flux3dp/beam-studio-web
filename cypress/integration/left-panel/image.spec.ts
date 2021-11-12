import { md5 } from '../../support/utils';

describe('manipulate image function', () => {
  beforeEach(() => {
    cy.landingEditor();
  });
  it('remove gradient see if trace function gets changed', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').click({ force: true });
    cy.get('#trace').click({ force: true });
    cy.get('.modal-alert').should('exist');
    cy.get('.message').should('have.text', 'Gradient images takes more time to trace and are prone to noise. Please kindly turn off the image gradient before executing.')
    cy.get('[data-test-key="ok"]').click();
    cy.get('.options-panel > :nth-child(2) > :nth-child(2)').should('not.exist');
    cy.get('.onoffswitch-switch').click({ force: true });
    cy.get('.options-panel > :nth-child(2) > :nth-child(2)').should('exist');
    cy.get('#trace').click({ force: true });
    cy.wait(1500);
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Path');
    cy.get('#svg_3').invoke('attr', 'd').then((d) => {
      expect(md5(d)).equal('64f69f6c2ea8f7d36376b20e3de02547');
    });
  });

  it('check gradient with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('.onoffswitch-switch').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-threshold', '128').should('have.attr', 'data-shading', 'false');
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('8794655cf390c5f867ed5eff13f3bce4');
    });
    cy.get('.onoffswitch-switch').click({ force: true });
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-threshold', '254').should('have.attr', 'data-shading', 'true');
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('8b1b3ac285d65fae820c86dc5b728efd');
    });
  });

  it('check replace with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#replace_with').click();
    cy.get('#file-input').attachFile('map.jpg');
    cy.wait(1500);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('5db3d14fa4ccd5a5bae3dc29413c72c8');
    });
  });

  it('check grading with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').click({ force: true });
    cy.wait(2000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#grading').click();
    cy.get('div.photo-edit-panel').should('exist');
    cy.wait(2000);
    cy.get('rect#1')
      .trigger('mousedown', { which: 1, clientX: 922, clientY: 125 })
      .trigger('mousemove', { which: 1, clientX: 922, clientY: 325 })
      .then(() => {
        cy.get('rect#1').trigger('mouseup')
      });
    cy.get('[data-test-key="okay"]').click();
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('3c43c5b5ec5a8f24d2eb35a508d4b85d');
    });
  });

  it('check crop with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#crop').click();
    cy.wait(3000);
    cy.get('.point-se').move({ deltaX: 0, deltaY: -200 });
    cy.get('[data-test-key="okay"]').click();
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('67cfcde3bcb99826faebee4b42526eed');
    });
  });

  it('check bevel with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#bevel').click();
    cy.wait(35000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('cfe31def8293997629aa51c433f34461');
    });
  });

  it('check invert with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#invert').click();
    cy.wait(3000);
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('de1073c40f0c095297d9d87af6b74dc3');
    });
  });
});
