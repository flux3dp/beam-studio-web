describe('text tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const fontDisplay = () =>
    cy
      .get('.ant-select[title="Font"]')
      .get('.ant-select-selector')
      .get('.ant-select-selection-item img');

  const drawText1 = () => {
    cy.clickToolBtn('Text');
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.realType('TEST TEXT FONT');
    cy.get('body').click();
    cy.get('body').click();
    cy.get('#svgcontent').should('exist');
    cy.wait(500);
  };

  it('text font', () => {
    drawText1();
    cy.get('#svgcontent').click();
    cy.get(
      '.ant-select.src-web-app-views-beambox-Right-Panels-Options-Blocks-TextOptions-module__font-family--Kgi2z.css-dev-only-do-not-override-42rbji.ant-select-single.ant-select-show-arrow.ant-select-show-search'
    ).should('exist');
    cy.wait(500);
    cy.get(
      '.ant-select.src-web-app-views-beambox-Right-Panels-Options-Blocks-TextOptions-module__font-family--Kgi2z.css-dev-only-do-not-override-42rbji.ant-select-single.ant-select-show-arrow.ant-select-show-search'
    )
      .should('exist')
      .click()
      .realType('Noto Sans');
    cy.get(
      '#rc_select_2_list_0 > .ant-select-item-option-content > .src-web-app-views-beambox-Right-Panels-Options-Blocks-TextOptions-module__family-option--fobNj > .src-web-app-views-beambox-Right-Panels-Options-Blocks-TextOptions-module__img-container--H9PO2 > img'
    ).click();
  });
});
