describe('manipulate view', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('zoom in while clicking on top bar button', () => {
    cy.get('.zoom-ratio').should('have.text', '100%');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get(':nth-child(1) > .action').click();
    cy.get('.zoom-ratio').should('have.text', '46%');
  });

  it('zoom out while clicking on top bar button', () => {
    cy.get('.zoom-ratio').should('have.text', '100%');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get(':nth-child(2) > .action').click();
    cy.get('.zoom-ratio').should('have.text', '38%');
  });

  it('zoom in while clicking on under button', () => {
    cy.get('.zoom-ratio').should('have.text', '100%');
    cy.get('.zoom-in > img').click();
    cy.get('.zoom-ratio').should('have.text', '110%');
  });

  it('zoom out while clicking on under button', () => {
    cy.get('.zoom-ratio').should('have.text', '100%');
    cy.get('.zoom-out > img').click();
    cy.get('.zoom-ratio').should('have.text', '90%');
  });

  it('fit to window size', () => {
    for (let n = 0; n < 5; n++) {
      cy.get('.zoom-in > img').click();
    };
    cy.get('.zoom-ratio').should('have.text', '150%');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get(':nth-child(3) > .rc-menu > :nth-child(3)').click();
    cy.get('.zoom-ratio').should('have.text', '42%');
  });

  it('auto fit to window size', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get(':nth-child(3) > .rc-menu > :nth-child(4)').click();
    cy.get('.zoom-ratio').should('have.text', '42%');
    cy.viewport(1500, 1200);
    cy.get('.zoom-ratio').should('have.text', '76%');
  });

  it('show grids', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get('.rc-menu > :nth-child(6)').should('have.attr', 'aria-checked', 'true');
    cy.get('#canvasGrid').should('have.attr', 'style', 'display: inline;');
  });

  it('show rulers', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get('.rc-menu > :nth-child(7)').click();
    cy.get('#ruler_x').should('exist');
    cy.get('#ruler_y').should('exist');
  });

  it('use layer color', () => {
    cy.get('div.add-layer-btn').click();
    cy.get('#layerbackgroundColor-1').should('have.attr', 'style', 'background-color: rgb(63, 81, 181);');
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('have.attr', 'stroke', '#3F51B5');
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get('.rc-menu > :nth-child(8)').click();
    cy.get('#svg_1').should('have.attr', 'stroke', '#000');
  });

  it('anti aliasing', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(3) > .rc-menu__item').click();
    cy.get('.rc-menu > :nth-child(9)').should('have.attr', 'aria-checked', 'true');
    cy.get('div#left-Ellipse>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').should(($shapeRendering) => {
      let str = $shapeRendering.attr('style');
      expect(str.substring(50)).equal('');
    });
  });
});
