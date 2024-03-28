describe('boxgen', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('bexgen max', () => {
    cy.get('#left-Boxgen')
      .click()
      .within({ timeout: 1000 }, () => { });
    cy.get('#width').type('999{enter}').within({ timeout: 1000 }, () => { });
    cy.get('#width').should('have.value', '375');
  });

  it('bexgen min', () => {
    cy.get('#left-Boxgen')
      .click()
      .within({ timeout: 1000 }, () => { });
    cy.get('#width').clear().type('20 {enter}');
    cy.get('#height').clear().type('20 {enter}');
    cy.get('#depth').clear().type('20 {enter}');
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .should('be.visible');
    cy.get('.ant-select-item.ant-select-item-option.ant-select-item-option-disabled')
      .should('exist');
  });

  it('bexgen import', () => {
    cy.get('#left-Boxgen')
      .click()
      .within({ timeout: 1000 }, () => { });
    cy.get('#width').clear().type('20 {enter}');
    cy.get('#height').clear().type('20 {enter}');
    cy.get('#depth').clear().type('20 {enter}');
    cy.get('.src-web-app-components-boxgen-Boxgen-module__footer--OgAFY > .ant-btn').click();
    cy.get('#textLabel > .ant-switch-inner').click();
    cy.get('.ant-modal-footer > .ant-btn-primary').click()
      .within({ timeout: 1000 }, () => { });
    cy.get('[data-color="#F44336"]')
      .should('exist')
      .should('contain', 'Top')
      .should('contain', 'Bottom')
      .should('contain', 'Front')
      .should('contain', 'Back')
  });
})
