describe('object boolean tools', () => {
  beforeEach(() => {
    cy.landingEditor();
    drawingEllipse();
    selectAll();
  });

//   it('union', () => {
//     cy.get('#union > img').click();
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(150, 2); });
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(0, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(0, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(150, 2); });
//   });

//   it('subtract', () => {
//     cy.get('#subtract > img').click();
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(150, 2); });
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(50, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(50, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(150, 2); });
//   });

//   it('intersect', () => {
//     cy.get('#intersect > img').click();
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(100, 2); });
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(50, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(50, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(100, 2); });
//   });

//   it('difference', () => {
//     cy.get('#difference > img').click();
//     cy.get('div.onoffswitch').click();
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(150, 2); });
//     cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(0, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(0, 2); });
//     cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(150, 2); });
//     cy.get('#svg_4').should('have.attr', 'fill').and('not.eq', 'none');
//   });

//   function drawingEllipse() {
//     cy.get('div#left-Ellipse>img').click();
//     cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
//     cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
//     cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//     cy.get('#svg_1').should('exist');
//     cy.get('div#left-Ellipse>img').click();
//     cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
//     cy.get('svg#svgcontent').trigger('mousemove', 150, 150, { force: true });
//     cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//     cy.get('#svg_2').should('exist');
//   };

//   function selectAll() {
//     cy.get('div#left-Cursor>img').click();
//     cy.get('svg#svgcontent').trigger('mousedown', -100, -100, { force: true });
//     cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
//     cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//     cy.wait(1000);
//   };
});
