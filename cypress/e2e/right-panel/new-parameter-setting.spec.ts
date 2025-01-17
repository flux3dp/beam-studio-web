describe('add new parameter', () => {
  it('should add a new parameter successfully', () => {
    cy.landingEditor();

    cy.get('div.src-web-app-views-beambox-Right-Panels-ConfigPanel-SaveConfigButton-module__btn--uh2Fr')
      .find('img[src="img/icon-plus.svg"]')
      .click();

    cy.get('input.ant-input.css-dev-only-do-not-override-1o1wjx9.text-input')
      .type('Test');

    cy.get('button.ant-btn.css-dev-only-do-not-override-1o1wjx9.ant-btn-primary')
      .contains('OK')
      .click();

    cy.get('div.ant-select-selector')
      .click();

    cy.get('div.ant-select-item-option-content')
      .should('exist')
      .then(($elements) => {
        const texts = $elements.map((_, el) => Cypress.$(el).text()).get();
        expect(texts).to.include('Test');
      });
  });
});
