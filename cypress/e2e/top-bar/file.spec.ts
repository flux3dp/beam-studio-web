import { buf as crc32Buf } from 'crc-32';

import { md5 } from '../../support/utils';

const isRunningAtGithub = Cypress.env('envType') === 'github';

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
    cy.get('#w_size').should('have.value', '300.00');
    cy.get('#h_size').should('have.value', '210.00');
  });

  it('save file', () => {
    const cypressDownloadBeamPath = Cypress.env('cypressDownloadBeamPath');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .rc-menu > :nth-child(3)').click();
    cy.wait(1000);

    cy.readFile(cypressDownloadBeamPath, null).then((buf) => {
      expect(crc32Buf(buf)).to.equal(isRunningAtGithub ? -1964051864 : -1409562589);
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
    cy.get(':nth-child(1) > .rc-menu > :nth-child(4)').click({force: true});
    cy.wait(1000);
    cy.readFile(cypressDownloadNewBeamPath, null).then((buf) => {
      expect(crc32Buf(buf)).to.equal(isRunningAtGithub ? -509428066 : -439953550);
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
    cy.readFile(cypressDownloadJpgPath, null).then((buf) => {
      expect(crc32Buf(buf)).to.equal(1826901805);
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
