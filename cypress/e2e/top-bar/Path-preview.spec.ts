const isRunningAtGithub = Cypress.env('envType') === 'github';
import { md5 } from '../../support/utils';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');

describe('Path Preview', () => {
  if (isRunningAtGithub) {
    it('skip test on github', () => {
      cy.log('skip test on github');
    });
    return;
  }

  it('Path Preview', () => {
    cy.setUpBackend(Cypress.env('backendIP'));
    cy.landingEditor();
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#w_size').clear().type('20{enter}');
    cy.fixture('svg.svg').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'svg.svg',
        mimeType: 'image/svg+xml',
      });
    cy.get('.ant-space-item').contains('Layer').click();
    cy.get('.ant-modal-footer .ant-btn').contains('OK').click();
    cy.get('#svg_3', {timeout:50000}).should('exist');
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent')
     .trigger('mousedown', { pageX: 100, pageY: 200, force: true  })
     .trigger('mousemove', { pageX: 150, pageY: 250, force: true  })
     .trigger('mouseup');
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.get('[title="Path preview"]').click();
    cy.get('.tools-panel').should('exist');
    cy.get('#path-preview-side-panel').should('exist');
    cy.get('[title="Play"]').click({timeout:(55000)});
    cy.get('.react-contextmenu').should('have.attr', 'style', 'position: fixed; opacity: 0; pointer-events: none;')
    cy.get('[title="Undo"]').should('not.exist');
    cy.get('[title="Redo"]').should('not.exist');
    cy.get('[title="Delet"]').should('not.exist');
    cy.get('.btn').contains('End Preview').click();
    cy.get('[title="Undo"]', {timeout:(5000)}).should('exist');
    cy.get('[title="Redo"]').should('exist');
    cy.get('[title="Delete"]').should('exist');
    cy.get('#svg_1').should('exist')
      .should('have.attr', 'width', '200')
      .should('have.attr', 'height', '140');
    cy.get('symbol#svg_2>g>g')
      .invoke('prop', 'innerHTML')
      .then((html) => {
        expect(md5(html)).equal('5fa966ee7b8d7e29490ff2244f67047a');
      });

  });
});
});
