const isRunningAtGithub = Cypress.env('envType') === 'github';
const machineName = Cypress.env('machineName');

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

  it('select connect machine', () => {
    cy.connectMachine(machineName);
    cy.findAllByTestId('select-machine').contains(machineName);
  });
});
