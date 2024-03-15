it('Move Element', () => {

  cy.landingEditor();
  cy.get('[class="src-web-app-components-beambox-right-panel-AddLayerButton-module__btn--i7y6f"]')
    .click({ force: true });
  cy.get('#power-input').clear().type('50{enter}');
  cy.get('#speed-input').clear().type('100{enter}');
  cy.get('#repeat').clear().type('5{enter}');
  cy.get('#layerdoubleclick-0').click();
  cy.clickToolBtn('Element');
  cy.get('[class="ant-modal-header"]').contains('Element').should('exist');
  cy.get('[class="ant-modal-body"]').should('exist');
  cy.get('[class="adm-capsule-tabs-tab adm-capsule-tabs-tab-active"]').should('exist');
  cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
    .eq(0).click();
  cy.get('[class="layer"]').should('exist')
    .should('have.attr', 'data-speed', '20')
    .should('have.attr', 'data-strength', '15')
    .should('have.attr', 'data-repeat', '1');
  cy.get('#svg_1').should('exist')
    .should('have.attr', 'fill', '#333333');
  cy.get('#svg_1').click();
  cy.get('[class="tab layers"]').click();
  cy.get('[class="src-web-app-components-beambox-right-panel-SelLayerBlock-module__select--dYlA+"]')
    .select('Layer 2');
  cy.get('[class*="ant-btn"]').contains('Yes').click();
  cy.get('#svg_1').click();
  cy.get('#svg_1').should('exist')
    .should('have.attr', 'fill', '#3F51B5');
  cy.get('#power-input').should('exist').should('have.attr', 'value', '50');
  cy.get('#speed-input').should('exist').should('have.attr', 'value', '100');
  cy.get('#repeat').should('exist').should('have.attr', 'value', '5');
});

it('Move three Elements', () => {
  cy.landingEditor();
  cy.get('[class="src-web-app-components-beambox-right-panel-AddLayerButton-module__btn--i7y6f"]')
    .click({ force: true });
  cy.get('#power-input').clear().type('50{enter}');
  cy.get('#speed-input').clear().type('100{enter}');
  cy.get('#repeat').clear().type('5{enter}');
  cy.get('#layerdoubleclick-0').click();
  cy.clickToolBtn('Element');
  cy.get('[class="ant-modal-header"]').contains('Element').should('exist');
  cy.get('[class="ant-modal-body"]').should('exist');
  cy.get('[class="adm-capsule-tabs-tab adm-capsule-tabs-tab-active"]').should('exist');
  cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
    .eq(0).click();
  cy.clickToolBtn('Element');
  cy.get('.adm-capsule-tabs-tab-wrapper').contains('Graphics').click();
  cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
    .eq(0).click();
  cy.clickToolBtn('Element');
  cy.get('.adm-capsule-tabs-tab-wrapper').contains('Line').click();
  cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
    .eq(0).click();
  cy.get('[class="layer"]').should('exist')
    .should('have.attr', 'data-speed', '20')
    .should('have.attr', 'data-strength', '15')
    .should('have.attr', 'data-repeat', '1');
  cy.get('#svg_1').should('exist')
    .should('have.attr', 'fill', '#333333');
  cy.get('#svg_10').should('exist')
    .should('have.attr', 'fill', '#333333');
  cy.get('#svg_11').should('exist')
    .should('have.attr', 'stroke', '#333333');
  cy.get('svg#svgcontent')
    .trigger('mousedown', { which: 1, pageX: 250, pageY: 250, force: true })
    .trigger('mousemove', { which: 1, pageX: 50, pageY: 50, shiftKey: true, force: true })
    .trigger('mouseup', { force: true });
  cy.get('[class="tab layers"]').click();
  cy.get('[class="src-web-app-components-beambox-right-panel-SelLayerBlock-module__select--dYlA+"]')
    .select('Layer 2');
  cy.get('[class*="ant-btn"]').contains('Yes').click();
  cy.get('#svg_1').should('exist')
    .should('have.attr', 'fill', '#3F51B5');
  cy.get('#power-input').should('exist').should('have.attr', 'value', '50');
  cy.get('#speed-input').should('exist').should('have.attr', 'value', '100');
  cy.get('#repeat').should('exist').should('have.attr', 'value', '5');
  cy.get('#svg_10').should('exist')
    .should('have.attr', 'fill', '#3F51B5');
  cy.get('#svg_11').should('exist')
    .should('have.attr', 'stroke', '#3F51B5');
});

