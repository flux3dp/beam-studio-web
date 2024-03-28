import { md5 } from '../../support/utils';

describe('qrcode tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });
  it('qrcode', () => {
    cy.get('#left-QRCode').click();
    cy.get('.ant-input').type('I can do all things.');
    cy.get('.ant-btn-primary > span').click();
    cy.get('#svg_1').should('exist', { timeout: 1000 });
    cy.get('#svg_1')
      .invoke('prop', 'innerHTML')
      .then((html) => expect(md5(html)).equal('d41d8cd98f00b204e9800998ecf8427e'));
  });
});
