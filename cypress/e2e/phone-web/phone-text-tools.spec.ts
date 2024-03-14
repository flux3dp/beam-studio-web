describe('select tools', () => {
  beforeEach(() => {
    cy.landingEditor();
    cy.viewport('iphone-xr');
    cy.wait(500);
    cy.get('.adm-tab-bar-item').contains('Text').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').dblclick({ x: 300, y: 200 });
    cy.wait(500);
    cy.realType('{backspace}{backspace}{backspace}{backspace}');
    cy.realType('TEST TEXT FONT');
    cy.get('#svg_1').should('exist');
    cy.wait(500);
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__selected-content--J0vox"]')
    .contains('Noto Sans')
    .click({force: true});
  cy.wait(500);
  cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__option--gupZR src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__active--Z6bvX"]')
    .get('img[alt="Noto Sans"]')
    .click();
  });

  it('text font', () => {
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
    cy.get('div#object-panel').should('exist');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__selected-content--J0vox"]')
      .contains('Noto Sans')
      .click({force: true});
    cy.wait(500);
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__option--gupZR src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__active--Z6bvX"]')
      .get('img[alt="Noto Sans"]')
      .click();
    cy.get('#svg_1').should('have.attr','font-family','\'Noto Sans\'');
  });

  it('text style', () => {
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
    cy.get('div#object-panel').should('exist');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__main--5u0A-"]')
      .contains('Regular')
      .click({force: true});
    cy.contains('Italic').click();
    cy.get('#svg_1').should('have.attr', 'font-style').and('eq', 'italic');
  });

  it('text size', () => {
    cy.get('#svg_1').click({force: true});
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__main--5u0A-"]')
      .contains('200').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('1').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('0').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('0').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'font-size').and('eq', '100');
  });

  it('text letter spacing', () => {
    cy.get('#svg_1').click({force: true});
    cy.get('#letter_spacing').click({force: true});
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('0').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('.').click({ force: true });
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ObjectPanelItem-module__input-keys--PK4UJ"]').contains('1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'letter-spacing').and('eq', '0.1em');
  });

  it('line spacing', () => {
    cy.realPress('Tab');
    cy.get('#svg_1').dblclick({ force: true });
    cy.realPress(['Shift', 'Enter']);
    cy.realType('LINE SPACING TEST');
    cy.get('#svg_1').should('include.text', 'LINE SPACING TEST');
    cy.get('#line_spacing').click({force: true});
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('1').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('.').click({ force: true });
    cy.get('[class="adm-button adm-button-default adm-button-shape-rounded"]').contains('5').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-line-spacing').and('eq', '1.5');
  });

  it('vertical', () => {
    cy.get('#svg_1').click({ force: true });
    cy.get('#vertical-text').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'data-verti').and('eq', 'true');
  });

  it('infill', () => {
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get('#infill').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'fill').and('not.eq', 'none');
  });

  it('Weld Text', () => {
    cy.get('#svg_1').click({ force: true });
    cy.get('#weld').click({ force: true });
    cy.get('.ant-modal-content').should('exist');
    cy.get('[class*="src-web-app-views-dialogs-Alert-module__message--"]')
      .contains('#801 We can\'t find your machine on the network')
      .should('exist');
    cy.get('a[target="_blank"][href="https://support.flux3dp.com/hc/en-us/articles/360001683556"]')
      .should('exist');
    cy.get('.ant-btn').contains('Machine Setup').should('exist');




  });

});
