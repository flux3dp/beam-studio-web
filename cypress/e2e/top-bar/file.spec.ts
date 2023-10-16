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
        return info === 'f2ac03b0bb118666656ca2a164ab3609' || info === '41b785564628fd76f814c83ce670e471'
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
        // CLI MD5 / Cypress GUI MD5 / Remote(Github Action) MD5
        return info === 'fe7e2f088f387c0bf225db80a75c85c4' || info === 'f2ac03b0bb118666656ca2a164ab360' || info === 'd67fbeae90a992a20708cdef57b37440'
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
        return info === '857db785d4256f4871918d758c54108f' || info === 'a6ab2992e9f1998a4dbe8afb7d03f653'
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
        return info === 'b919bee615ef8dfa6f394c79e5537d51' || info === '461fc4b01b27924df91422e9b87f52d2'
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
