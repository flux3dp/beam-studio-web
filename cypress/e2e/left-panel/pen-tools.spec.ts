describe('pen tools', () => {
  it('curve', () => {
    cy.landingEditor();
    cy.get('div#left-Pen>img').click();

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, -50, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 250, 20, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 400, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 500, -50, { force: true });
    cy.get('svg#svgcontent').dblclick({ force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#drawingCtrlPoint_0c2').should('exist');

    cy.get('#pathpointgrip_0').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(100, 1); });
    cy.get('#pathpointgrip_0').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(100, 1); });
    cy.get('#pathpointgrip_1').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(250, 1); });
    cy.get('#pathpointgrip_0').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(100, 1); });
  });

  it('tCorner', () => {
    cy.get('#pathpointgrip_3').dblclick();
    cy.get('#pathedit-panel').should('exist');
    cy.get('#ctrlpointgrip_4c1')
      .trigger('mousedown', { which: 1, pageX: 50, pageY: 50 })
      .trigger('mousemove', { which: 1, pageX: 100, pageY: 400 })
      .trigger('mouseup')
    cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(650, 1); });
    cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(400, 1); });
  });

  // it('tSmooth', () => {
  //   cy.get('[title="tSmooth"]').click();

  //   cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(567, 1); });
  //   cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(132, 1); });
  // });

  // it('tSymmetry', () => {
  //   cy.get('[title="tSymmetry"]').click();

  //   cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(600, 1); });
  //   cy.get('#ctrlpointgrip_4c1').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(50, 1); });
  // });
});
