import { buf as crc32Buf } from 'crc-32';

import { md5 } from '../../support/utils';

const isRunningAtGithub = Cypress.env('envType') === 'github';

describe('manipulate file', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('open file ', () => {
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains('File').click();
    cy.get('.rc-menu').contains('Open').click();
    cy.get('input#file-input').then(($input) => {
      cy.fixture('flux.png', 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then((blob) => {
          const el = $input[0];
          const testFile = new File([blob], 'flux.png', { type: 'image/png' });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el.files = dataTransfer.files;
          return cy.wrap($input).first().trigger('change', { force: true });
        });
    });
    cy.get('#svg_1').should('exist');
    cy.get('#w_size').should('have.value', '300');
    cy.get('#h_size').should('have.value', '210');
  });

  it('save file', () => {
    const cypressDownloadBeamPath = Cypress.env('cypressDownloadBeamPath');
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains('File').click();
    cy.get('.rc-menu').contains('Save').click();
    cy.wait(1000);

    cy.readFile(cypressDownloadBeamPath, null).then((buf) => {
      expect(crc32Buf(buf)).to.equal(isRunningAtGithub ? 969720500 : -210857373);
    });
  });

  it('save as file', () => {
    const cypressDownloadNewBeamPath = Cypress.env('cypressDownloadNewBeamPath');
    cy.clickToolBtn('Rectangle');
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist').should('not.have.attr', 'opacity');
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains('File').click();
    cy.get('.rc-menu').contains('Save As...').click();
    cy.readFile(cypressDownloadNewBeamPath, null).then((buf) => {
      expect(crc32Buf(buf)).to.equal(isRunningAtGithub ? -884772217 : -210857373);
    });
  });

  it('export bvg file ', () => {
    const cypressDownloadBvgPath = Cypress.env('cypressDownloadBvgPath');
    cy.get('div.menu-btn-container').click();
    cy.contains('File').click();
    cy.contains('Export To...').click();
    cy.contains('BVG').click();
    cy.readFile(cypressDownloadBvgPath).then((info) => {
      if (isRunningAtGithub) expect(md5(info)).equal('3287f0cfd3da5f41c24390bd321416a4');
      else expect(md5(info)).equal('d3226c3d45dc8843ad248c3ed701415d');
    });
  });

  it('export svg file ', () => {
    const cypressDownloadSvgPath = Cypress.env('cypressDownloadSvgPath');
    cy.get('div.menu-btn-container').click();
    cy.contains('File').click();
    cy.contains('Export To...').click();
    cy.contains('SVG').click();
    cy.readFile(cypressDownloadSvgPath).then((info) => {
      if (isRunningAtGithub) expect(md5(info)).equal('b603786b738bf72988499931b9add2f1');
      else expect(md5(info)).equal('80972cd225baaf9050633c875d7ec320');
    });
  });

  it('export png file ', () => {
    const cypressDownloadPngPath = Cypress.env('cypressDownloadPngPath');
    cy.get('div.menu-btn-container').click();
    cy.contains('File').click();
    cy.contains('Export To...').click();
    cy.contains('PNG').click();
    cy.readFile(cypressDownloadPngPath).then((info) => {
      expect(md5(info)).equal('b20a5f0d14f9b36425dca6e22ff2712c');
    });
  });

  it('export jpg file ', () => {
    const cypressDownloadJpgPath = Cypress.env('cypressDownloadJpgPath');
    cy.get('div.menu-btn-container').click();
    cy.contains('File').click();
    cy.contains('Export To...').click();
    cy.contains('JPG').click();
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
            files: [file],
            types: ['Files'],
          },
        };
        cy.get('#workarea').trigger('drop', dropEvent, { force: true });
      });
  });
});
