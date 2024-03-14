import { md5 } from '../../support/utils';
const isRunningAtGithub = Cypress.env('envType') === 'github';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');

function savetoador() {
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains("Edit").click();
  cy.contains('Document Settings').click();
  cy.wait(500);
  cy.get('[class^="ant-select-selection-item"]').eq(0).click();
  cy.wait(700);
  cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({ force: true });
  cy.get('button[class^="ant-btn"]').contains('Save').click({ force: true });
  cy.wait(500);
}

describe('SVG & PDF', () => {
  if (isRunningAtGithub) {
    it('skip test on github', () => {
      cy.log('skip test on github');
    });
    return;
  }

  beforeEach(() => {
    cy.setUpBackend(Cypress.env('backendIP'));
    cy.landingEditor();
  });

  it('SVG On Laser > Layer', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    savetoador();
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
      cy.get('.ant-space-item').contains('Laser').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('.ant-space-item').contains('Layer').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('#svg_2', { timeout: 50000 }).should('exist');
      cy.get('div.element-title').contains('Layer 1 > SVG Object').should('exist');
      cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
        .should('have.attr', 'data-layer', 'Layer 1');
      cy.get('symbol#svg_1>g>g').invoke('prop', 'innerHTML')
        .then((html) => {
          expect(md5(html)).equal('00205b6848f32edfda5855c1f2fab5e3');
        });
      cy.get('symbol#svg_1_image>image').invoke('attr', 'filter').should('eq', 'url(#filter#333333)');
    });
  });

  it('SVG On Laser > Color', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    savetoador();
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
      cy.get('.ant-space-item').contains('Laser').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('.ant-space-item').contains('Color').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('#svg_2', { timeout: 50000 }).should('exist');
      cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
        .should('have.attr', 'data-layer', '#3F51B5');
      cy.get('#layerdoubleclick-1').should('have.text', '#3F51B5');
      cy.get('#svg_8').should('have.attr', 'data-xform', 'x=122.34765625 y=105.8125 width=200 height=200 ');
      cy.get('symbol#svg_6_image>image').invoke('attr', 'filter').should('eq', 'url(#filter#3F51B5)');
      cy.get('#layerdoubleclick-0').should('have.text', '#333333');
      cy.get('#svg_7').should('have.attr', 'data-xform', 'x=221.6484375 y=105.8125 width=200 height=200 ');
      cy.get('symbol#svg_5_image>image').invoke('attr', 'filter').should('eq', 'url(#filter#333333)');
    });
  });

  /*it('SVG On Laser > Single Layer', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    savetoador();
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
    cy.get('.ant-space-item').contains('Laser').click();
    cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
    cy.get('.ant-space-item').contains('Single Layer').click();
    cy.get('.ant-modal-footer .ant-btn').contains('OK').click();

    cy.get('#svg_2',{timeout:50000}).should('exist');
  });*/

  it('SVG On Printing > Layer & Change Color', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    savetoador();
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
      cy.get('.ant-space-item').contains('Printing').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('.ant-space-item').contains('Layer').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('#svg_2', { timeout: 50000 }).should('exist');
      cy.get('div.element-title').contains('Printing > SVG Object');
      cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
        .should('have.attr', 'data-layer', 'Printing');
      cy.get('symbol#svg_1>g>g').invoke('prop', 'innerHTML')
        .then((html) => {
          expect(md5(html)).equal('00205b6848f32edfda5855c1f2fab5e3');
        });
      cy.get('.src-web-app-views-beambox-Right-Panels-Options-Blocks-MultiColorOptions-module__controls--p0P0u')
        .get('.src-web-app-widgets-ColorPicker-module__trigger----xSM').eq(0)
        .get('.src-web-app-widgets-ColorPicker-module__color--Q6lUp').eq(0)
        .invoke('attr', 'style').should('eq', 'background: rgb(63, 81, 181);')
      cy.get('.src-web-app-views-beambox-Right-Panels-Options-Blocks-MultiColorOptions-module__controls--p0P0u')
        .get('.src-web-app-widgets-ColorPicker-module__trigger----xSM').eq(1)
        .get('.src-web-app-widgets-ColorPicker-module__color--Q6lUp').eq(1)
        .invoke('attr', 'style')
        .should('eq', 'background: rgb(51, 51, 51);');
    });
    cy.get('.src-web-app-widgets-ColorPicker-module__color--Q6lUp').eq(0).click();
    cy.get('.src-web-app-widgets-ColorPicker-module__preset-block--f1R8T')
      .get('.src-web-app-widgets-ColorPicker-module__inner---5lat').eq(0)
      .click();
    cy.get('.src-web-app-widgets-ColorPicker-module__footer--SxFtL')
      .get('.ant-btn').contains('OK').click();
    cy.get('symbol#svg_1>g>g')
      .invoke('prop', 'innerHTML')
      .then((html) => {
        expect(md5(html)).equal('57b2c7998a22f7c14d2617c844263aeb');
      });
  });

  /*it('SVG On Printing > Single Layer', () => {
  cy.connectMachine(beamSeriersName);
  cy.findAllByTestId('select-machine').contains(beamSeriersName);
  savetoaador();
  cy.fixture('svg.svg').then(fileContent => {
    cy.get("input[data-file-input='import_image").attachFile({
      fileContent: fileContent.toString(),
      fileName: 'svg.svg',
      mimeType: 'image/svg+xml',
    });
  cy.get('.ant-space-item').contains('Printing').click();
  cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
  cy.get('.ant-space-item').contains('Single Layer').click();
  cy.get('.ant-modal-footer .ant-btn').contains('OK').click();

  cy.get('#svg_2',{timeout:50000}).should('exist');
  cy.get('div.element-title').contains('Printing > SVG Object');
  cy.get('symbol#svg_1>g>g')
    .invoke('prop', 'innerHTML')
    .then((html) => {
      expect(md5(html)).equal('00205b6848f32edfda5855c1f2fab5e3');
    });

});*/

  it('Gradient SVG', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.fixture('gradient.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'gradient.svg',
        mimeType: 'image/svg+xml',
      });
      cy.get('.ant-space-item').contains('Layer').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('#svg_1', { timeout: 50000 }).should('exist');
      cy.get('image#svg_1')
        .should('have.attr', 'xlink:href')
        .then((html) => {
          expect(md5(html)).equal('b73f32e8725c86f654a8375e199e6a99');
        });
    });
  });

  it('Bitmap SVG', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.fixture('bitmap.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'bitmap.svg',
        mimeType: 'image/svg+xml',
      });
      cy.get('.ant-space-item').contains('Layer').click();
      cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
      cy.get('#svg_1', { timeout: 50000 }).should('exist');
      cy.get('div.element-title').contains('Bitmap > Image');
      cy.get('image#svg_1')
        .should('have.attr', 'xlink:href')
        .then((html) => {
          expect(md5(html)).equal('2338842539207490c618b487d23cd549');
        });
    });
  });

  it('upload pdf>color', () => {
    cy.uploadFile('PDF.pdf');
    cy.get('.ant-modal-content', { timeout: (10000) }).should('exist');
    cy.get('.ant-space-item').contains('Color').click();
    cy.get('.ant-btn').contains('OK').click();
    cy.get('#svg_3', { timeout: (10000) }).should('exist');
    cy.get('#w_size').should('have.value', '20.00');
    cy.get('#h_size').should('have.value', '20.00');
  });

  it('upload pdf>single layer', () => {
    cy.uploadFile('PDF.pdf');
    cy.get('.ant-modal-content', { timeout: (10000) }).should('exist');
    cy.get('.ant-space-item').contains('Single Layer').click();
    cy.get('.ant-btn').contains('OK').click();
    cy.get('#svg_1', { timeout: (10000) }).should('exist');
    cy.get('#w_size').should('have.value', '20.00');
    cy.get('#h_size').should('have.value', '20.00');
  });

  it('upload ai>Color', () => {
    cy.uploadFile('ai.ai');
    cy.get('.ant-modal-content', { timeout: (10000) }).should('exist');
    cy.get('.ant-space-item').contains('Color').click();
    cy.get('.ant-btn').contains('OK').click();
    cy.get('#svg_4', { timeout: (10000) }).should('exist');
    cy.get('#w_size').should('have.value', '20.00');
    cy.get('#h_size').should('have.value', '20.00');
  });

  it('upload ai>single layer', () => {
    cy.uploadFile('ai.ai');
    cy.get('.ant-modal-content', { timeout: (10000) }).should('exist');
    cy.get('.ant-space-item').contains('Single Layer').click();
    cy.get('.ant-btn').contains('OK').click();
    cy.get('#svg_4', { timeout: (10000) }).should('exist');
    cy.get('#w_size').should('have.value', '20.00');
    cy.get('#h_size').should('have.value', '20.00');
  });
});
