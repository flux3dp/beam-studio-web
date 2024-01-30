describe('set operations', () => {

  it('Creat Text On Path', () => {
    cy.landingEditor();
    cy.get('div#left-Text').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.realType('123456789');
    cy.get('div#left-Line').click();
    cy.get('svg#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 100, pageY: 50, force: true })
      .trigger('mousemove', { which: 1, pageX: 250, pageY: 200, shiftKey: true, force: true })
      .trigger('mouseup', { force: true })
    cy.get('svg#svgcontent').click({ force: true });
    cy.get('#svgcontent')
      .trigger('mousedown', { pageX: 500, pageY: 500,force: true })
      .trigger('mousemove', { pageX: 200, pageY: 100,force: true })
      .trigger('mouseup',{ force: true })
      .get('button#convert_to_path').click();
    cy.get('#svgcontent')
      .trigger('mousedown', { pageX: 500, pageY: 500,force: true })
      .trigger('mousemove', { pageX: 200, pageY: 100,force: true })
      .trigger('mouseup',{ force: true });
    cy.get('button#create_textpath').click();
    cy.get('textPath')
      .should('exist')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
      .should('have.attr', 'startOffset', '0%')
      .should('have.attr', 'href', '#svg_2')
      .should('have.text', '123456789');

  //'Aligment'
    cy.get('[class="ant-select-selection-item"]').contains("Bottom Align").click();
    cy.get('[class="ant-select-item-option-content"]').contains("Middle Align").click();
    cy.get('textPath')
      .should('exist')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
      .should('have.attr', 'startOffset', '0%')
      .should('have.attr', 'alignment-baseline', 'middle')
      .should('have.attr', 'href', '#svg_2')
      .should('have.text', '123456789');
    cy.get('[class="ant-select-selection-item"]').contains("Middle Align").click();
    cy.get('[class="ant-select-item-option-content"]').contains("Top Align").click();
    cy.get('textPath')
      .should('exist')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
      .should('have.attr', 'startOffset', '0%')
      .should('have.attr', 'alignment-baseline', 'top')
      .should('have.attr', 'href', '#svg_2')
      .should('have.text', '123456789');

  //'Offset'
    cy.get('[class="src-web-app-views-beambox-Right-Panels-OptionsPanel-module__option-input--ycNhZ ui ui-control-unit-input-v2"]')
      .clear()
      .type('10{enter}');
    cy.get('textPath')
      .should('exist')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
      .should('have.attr', 'startOffset', '10%')
      .should('have.attr', 'alignment-baseline', 'top')
      .should('have.attr', 'href', '#svg_2')
      .should('have.text', '123456789');

  //'Decompose Text on Path'
    cy.get('button#detach_path').click();
    cy.get('textPath')
      .should('not.exist')
  });
});
