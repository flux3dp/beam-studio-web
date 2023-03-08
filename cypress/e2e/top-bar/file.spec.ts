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
        return info === '917032669987e291a375417a7701c15c' || info === '05306ee6546f831bc1e90dd8891364ce'
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
        return info === '39a9ac327155af2e54f8f4e2d47188e3' || info === '6f55b26fe235d9ee4edb0ed1343006de'
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
        return info === '594c05a5900bc9d162bb06042f0f3500' || info === 'bc940d355184270cf39bc7ca9c6d6df2'
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
        return info === 'eeec89beb519e13603b102de8be43ec9' || info === '1607e404a7da571a5e6388949fb73cf2'
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
