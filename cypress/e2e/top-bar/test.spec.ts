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
  });

  it('select connect Ador machine', () => {
    cy.connectMachine(adorName);
    cy.findAllByTestId('select-machine').contains(adorName);
  });
});