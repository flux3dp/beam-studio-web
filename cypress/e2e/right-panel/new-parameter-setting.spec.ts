describe('add new parameter', () => {
  it('should add a new parameter successfully', () => {

    cy.landingEditor();

    // Step 1: Click the add button
    cy.get('div.src-web-app-views-beambox-Right-Panels-ConfigPanel-SaveConfigButton-module__btn--uh2Fr')
      .find('img[src="img/icon-plus.svg"]')
      .click();

    // Step 2: Input value 'Test'
    cy.get('input.ant-input.css-dev-only-do-not-override-1o1wjx9.text-input')
      .type('Test');

    // Step 3: Click the OK button
    cy.get('button.ant-btn.css-dev-only-do-not-override-1o1wjx9.ant-btn-primary')
      .contains('OK')
      .click();

    // Step 4: Click span.ant-select-selection-search
    cy.get('div.ant-select-selector')
      .click();

    // Step 5: Check if 'Test' exists in the list
    cy.get('div.ant-select-item-option-content')
      .should('exist')
      .then($elements => {
        const texts = $elements.map((_, el) => Cypress.$(el).text()).get();
        expect(texts).to.include('Test');
      });
  });
});