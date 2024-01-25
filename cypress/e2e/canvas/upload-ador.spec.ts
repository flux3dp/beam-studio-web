import { find } from "cypress/types/lodash";

const isRunningAtGithub = Cypress.env('envType') === 'github';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');

describe('test machine connection', () => {
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

  it('select connect Beam Seriers machine', () => {
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.get('.src-web-app-components-beambox-top-bar-SelectMachineButton-module__button--MeIgr').should('exist').click();
    cy.contains('.src-web-app-views-dialogs-DeviceSelector-module__name--g-K6l', 'Ador (Cruz)').click()
    cy.get('.ant-btn-primary').contains('Yes').click();
    cy.fixture('svg.svg').then(fileContent => {
        cy.get("input[data-file-input='import_image").attachFile({
          fileContent: fileContent.toString(),
          fileName: 'svg.svg',
          mimeType: 'image/svg+xml',
        })
    cy.get('.ant-btn').contains('OK').click()    
    cy.get('.ant-btn').contains('OK').click()
    cy.wait(8000);
    })
  })
})
