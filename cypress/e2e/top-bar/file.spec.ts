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
    const cypressDownloadBeamPath = Cypress.env('cypressDownloadBeamPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(3)').click();
    cy.wait(1000);
    cy.readFile(cypressDownloadBeamPath).then((info) => {
      cy.wrap(md5(info)).should('satisfy', (info) => {
        // Local MD5 / Github Action MD5
        return info === '414766663145bf9d8e93c75559869945' || info === '82421109cd5c6857a535df58278f485c'
      });
    });
  });

  it('save as file', () => {
    const cypressDownloadNewBeamPath = Cypress.env('cypressDownloadNewBeamPath');
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(4)').click();
    cy.wait(1000);
    cy.readFile(cypressDownloadNewBeamPath).then((info) => {
      cy.wrap(md5(info)).should('satisfy', (info) => {
        // CLI MD5 / Cypress GUI MD5 / Github Action MD5
        return info === '55e664c0f54af7e7f2e2f7e2c059ba8d' || info === '414766663145bf9d8e93c75559869945' || info === 'eab71c06f20a40a3a55ed12726800e2d'
      });
    });
  });

  it('export bvg file ', () => {
    const cypressDownloadBvgPath = Cypress.env('cypressDownloadBvgPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(1)').click();
    cy.readFile(cypressDownloadBvgPath).then((info) => {
      cy.wrap(md5(info)).should('satisfy', (info) => {
        // Local MD5 / Github Action MD5
        return info === 'ce5583507d6b99d919b6d73129c8dcbc' || info === 'd7c445484ba6604dc64de17b690c4c06'
      });
    });
  });

  it('export svg file ', () => {
    const cypressDownloadSvgPath = Cypress.env('cypressDownloadSvgPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(2)').click();
    cy.readFile(cypressDownloadSvgPath).then((info) => {
      cy.wrap(md5(info)).should('satisfy', (info) => {
        // Local MD5 / Github Action MD5
        return info === '7049478e91f18670719ddbbcaa5807d0' || info === 'a16cd6aaab5fdf4f1f180011e1ffd12b'
      });
    });
  });

  it('export png file ', () => {
    const cypressDownloadPngPath = Cypress.env('cypressDownloadPngPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(3)').click();
    cy.readFile(cypressDownloadPngPath).then((info) => {
      expect(md5(info)).equal('b20a5f0d14f9b36425dca6e22ff2712c');
    });
  });

  it('export jpg file ', () => {
    const cypressDownloadJpgPath = Cypress.env('cypressDownloadJpgPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu__item').click();
    cy.get(':nth-child(8) > .rc-menu > :nth-child(4)').click();
    cy.readFile(cypressDownloadJpgPath).then((info) => {
      cy.wrap(md5(info)).should('satisfy', (info) => {
        return info === '6ee6548bbfc243fd9ed37f973556f9a4' || info === '73ed1d611feab1f6589b0df87d9d2a75'
      });
    });
  });

  it('upload file by drag and drop ', () => {
    cy.fixture('flux.png', 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob) => {
        const file = new File([blob], 'flux.png', {
          type: 'image/png',
        });
        const dropEvent = {
          dataTransfer: {
            files: [file,],
            types: ['Files'],
          }
        };
        cy.get('#workarea').trigger('drop', dropEvent, { force: true });
      });
  });
});
