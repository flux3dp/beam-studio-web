import { md5 } from '../../support/utils';

describe('manipulate file', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('open file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(1)').click();
    cy.get('input#file-input').then($input => {
      cy.fixture('flux.png', 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          const el = $input[0];
          const testFile = new File([blob], 'flux.png', { type: 'image/png' });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el.files = dataTransfer.files;
          return cy.wrap($input).first().trigger('change', { force: true });
        });
    });
    cy.get('#svg_1').should('exist');
    cy.get('#width').should('have.value', '300');
    cy.get('#height').should('have.value', '210');
  });

  it('save file', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(3)').click();
    cy.wait(5000);
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.beam").then((info) => {
      expect(md5(info)).equal('b6403a0144502172f9a92672c7a39d7b');
    });
  });

  it('save as file', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(4)').click();
    cy.wait(5000);
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.beam").then((info) => {
      expect(md5(info)).equal('b6403a0144502172f9a92672c7a39d7b');
    });
  });

  it('export bvg file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(1)').click();
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.bvg").then((info) => {
      expect(md5(info)).equal('f3e871d07847f5ee0bfc7590274faf75');
    });
  });

  it('export svg file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(2)').click();
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.svg").then((info) => {
      expect(md5(info)).equal('ab7e70d8e831d4a810d7182a9d108ec0');
    });
  });

  it('export png file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(3)').click();
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.png").then((info) => {
      expect(md5(info)).equal('b20a5f0d14f9b36425dca6e22ff2712c');
    });
  });

  it('export jpg file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(4)').click();
    cy.readFile("/Users/bx-m1/desktop/dev/beam-studio-web/cypress/downloads/untitled.jpeg").then((info) => {
      expect(md5(info)).equal('4e8c0a4d941da85f10ad6226f45fd592');
    });
  });
});
