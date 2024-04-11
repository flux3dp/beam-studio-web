const isRunningAtGithub = Cypress.env('envType') === 'github';
const machineName = Cypress.env('machineName');
const adorName = Cypress.env('adorName');

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
    cy.connectMachine(machineName);
  });

  it('select connect Ador machine', () => {
    cy.connectMachine(adorName);
  });
});
