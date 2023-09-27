import { md5 } from '../../support/utils';

describe('manipulate image function', () => {
  beforeEach(() => {
    cy.landingEditor();
  });
  it('remove gradient see if trace function gets changed', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').click({ force: true });
    cy.get('#trace').click({ force: true });
    cy.get('.ant-modal-content').should('exist');
    cy.get('.message').should('have.text', 'Gradient images takes more time to trace and are prone to noise. Please kindly turn off the image gradient before executing.')
    cy.contains('button span', 'OK').click()
    cy.get('.adm-switch-checkbox').click({ force: true });
    cy.get('.options-panel > :nth-child(2) > :nth-child(2)').should('exist');
    cy.get('#trace').click({ force: true });
    cy.wait(1500);
    cy.get('#svg_3').click({ force: true });
    cy.get('div.element-title').contains('Layer 1 > Path');
    cy.get('#svg_3').invoke('attr', 'd').then((d) => {
      expect(md5(d)).equal('a8d4941da1ab94530511018d4833e70b');
    });
  });

  it('check gradient with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('.adm-switch-checkbox').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-threshold', '128').should('have.attr', 'data-shading', 'false');
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('8794655cf390c5f867ed5eff13f3bce4');
    });
    cy.get('.adm-switch-checkbox').click({ force: true });
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-threshold', '254').should('have.attr', 'data-shading', 'true');
    cy.wait(5000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      cy.wrap(md5(href)).should('satisfy', (href) => {
        return href === '1c5a5775df3e730720a60ae5a20982db' || href === '8b1b3ac285d65fae820c86dc5b728efd'
      });
    });
  });

  it('check replace with image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#replace_with').click();
    cy.get('#file-input').attachFile('map.jpg');
    cy.get('.progress', { timeout: 3000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(10000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      cy.wrap(md5(href)).should('satisfy', (href) => {
        // Local MD5 / Remote(Github Action) MD5
        return href === '80161b302c514e5ddeaef3fb7ec371e9' || href === 'bb928cb5c30ef7f85c2b53f81fc4072e'
      });
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
        cy.get('rect#1').trigger('mouseup')
      });
    cy.get('button[class^="ant-btn"]').contains('Okay').click();
    cy.get('.progress', { timeout: 5000 }).should('not.exist');
    cy.wait(10000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      cy.wrap(md5(href)).should('satisfy', (href) => {
        // Local MD5 / Remote(Github Action) MD5
        return href === '4d696e44b940d87e89ecccca671fd9c9' || href === '89c7aa6cb93a4fd9f6e79c9da0e5ade2' || href === '3c43c5b5ec5a8f24d2eb35a508d4b85d'
      });
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
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      cy.wrap(md5(href)).should('satisfy', (href) => {
        // Local MD5 / Remote(Github Action) MD5
        return href === '5525bd3998a7ce95a35e1618e0db8c43' || href === 'a8ad6ba832e34e3cc6544668596fefff'
      });
    });
  });

  it('check bevel with image', () => {
    cy.disableImageDownSampling();
    cy.uploadFile('preview.png', 'image/png');
    cy.get('#bevel').click();
    cy.get('.progress', { timeout: 120000 }).should('not.exist');
    cy.get('#svg_1').click({ force: true });
    cy.wait(10000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      // Local MD5 / Remote(Github Action) MD5
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
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      cy.wrap(md5(href)).should('satisfy', (href) => {
        // Local MD5 / Remote(Github Action) MD5
        return href === '4d7e7b1f937e9161c3f3c567d5ee869b' || href === '89c7aa6cb93a4fd9f6e79c9da0e5ade2'
      });
    });
  });
});
