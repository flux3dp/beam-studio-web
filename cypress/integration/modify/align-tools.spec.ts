it('top align', () => {
  cy.landingEditor();
  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_1').should('exist');

  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 150, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_2').should('exist');

  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });

  cy.get('div#left-Cursor>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#top_align > img').click();
  cy.get('#selectorGrip_resize_s').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(150, 2); });
  cy.get('#selectorGrip_resize_s').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(100, 2); });
});

it('middle align', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#middle_align > img').click();
  cy.get('#selectorGrip_resize_se').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(250, 2); });
  cy.get('#selectorGrip_resize_se').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(175, 2); });
});

it('bottom align', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#bottom_align > img').click();
  cy.get('#selectorGrip_resize_n').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(150, 2); });
  cy.get('#selectorGrip_resize_n').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(200, 2); });
});

it('left align', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#left_align > img').click();
  cy.get('#selectorGrip_resize_e').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(100, 2); });
  cy.get('#selectorGrip_resize_e').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(150, 2); });
});

it('center align', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#center_align > img').click();
  cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(125, 2); });
  cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(250, 2); });
});

it('right align', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#right_align > img').click();
  cy.get('#selectorGrip_resize_w').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(200, 2); });
  cy.get('#selectorGrip_resize_w').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(150, 2); });
});

it('hdist of distribute', () => {
  cy.get('[src="img/top-bar/icon-undo.svg"]').click();
  selectAll();
  cy.get('#hdist').click();
  cy.get('div#left-Cursor>img').click();
  cy.get('#svg_2').click({ force: true });
  cy.get('#selectorGrip_resize_se').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(175, 2); });
  cy.get('#selectorGrip_resize_se').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(200, 2); });
});

it('vdist of distribute', () => {
  selectAll();
  cy.get('#vdist').click();
  cy.get('div#left-Cursor>img').click();
  cy.get('#svg_2').click({ force: true });
  cy.get('#selectorGrip_resize_nw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(125, 2); });
  cy.get('#selectorGrip_resize_nw').first().should(($grip) => { expect($grip.attr('cy')).to.be.closeTo(125, 2); });
});

function selectAll() {
  cy.get('div#left-Cursor>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
}
