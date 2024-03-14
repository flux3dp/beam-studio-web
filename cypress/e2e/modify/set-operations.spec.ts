describe('set operations', () => {
  beforeEach(() => {
    cy.landingEditor();
    cy.get('div#left-Rectangle').click();
    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#infill').click();
    cy.get('div#left-Ellipse').click();
    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#infill').click();
 });

  it('Union', () => {
    cy.get('#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 300, pageY: 300,force: true })
      .trigger('mousemove', { which: 1, pageX: 0, pageY: 0,force: true })
      .trigger('mouseup')
    cy.get('button#union').click();
    cy.get('#svg_4')
      .should('have.attr', 'fill', '#333333')
      .should('have.attr', 'd', 'M641.34129,639.85568L4.66896,639.85568C-346.95546,639.85568 -632.00337,354.80777 -632.00337,3.18335C-632.00337,-348.44107 -346.95546,-633.48898 4.66896,-633.48898C356.29338,-633.48898 641.34129,-348.44107 641.34129,3.18335L641.34129,639.85568z')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
  });

  it('Subtract', () => {
    cy.get('#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 300, pageY: 300,force: true })
      .trigger('mousemove', { which: 1, pageX: 0, pageY: 0,force: true })
      .trigger('mouseup')
    cy.get('button#subtract').click();
    cy.get('#svg_4')
      .should('have.attr', 'fill', '#333333')
      .should('have.attr', 'd', 'M641.34129,639.85568L4.66896,639.85568C356.29337,639.85568 641.34128,354.80777 641.34129,3.18336L641.34129,639.85568z')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
  });

  it('Intersect', () => {
    cy.get('#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 300, pageY: 300,force: true })
      .trigger('mousemove', { which: 1, pageX: 0, pageY: 0,force: true })
      .trigger('mouseup')
    cy.get('button#intersect').click();
    cy.get('#svg_4')
      .should('have.attr', 'fill', '#333333')
      .should('have.attr', 'd', 'M4.66896,3.18335L641.34129,3.18335C641.34129,354.80777 356.29338,639.85568 4.66896,639.85568L4.66896,3.18335z')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
  });

  it('Difference', () => {
    cy.get('#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 300, pageY: 300,force: true })
      .trigger('mousemove', { which: 1, pageX: 0, pageY: 0,force: true })
      .trigger('mouseup')
    cy.get('button#difference').click();
    cy.get('#svg_4')
      .should('have.attr', 'fill', '#333333')
      .should('have.attr', 'd', 'M4.66896,3.18335L641.34129,3.18335C641.34129,-348.44107 356.29338,-633.48898 4.66896,-633.48898C-346.95546,-633.48898 -632.00337,-348.44107 -632.00337,3.18335C-632.00337,354.80777 -346.95546,639.85568 4.66896,639.85568L4.66896,3.18335zM641.34129,639.85568L4.66896,639.85568C356.29337,639.85568 641.34128,354.80777 641.34129,3.18336L641.34129,639.85568z')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
  });
});
