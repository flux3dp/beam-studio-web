describe('array tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const doAllThing = () => {
    cy.get('div#left-Cursor>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get('#array').click();
    cy.get('#columns').clear().type('2').blur();
    cy.get('#rows').clear().type('2').blur();
    cy.get('#array_width').clear().type('100').blur();
    cy.get('#array_height').clear().type('150').blur();
    cy.get('.primary').click();
  };

  it('image', () => {
    cy.uploadFile('flux.png', 'image/png');
    doAllThing();
    cy.wait(500);
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('g[data-tempgroup="true"]').children('image').should('have.length', '4');
  });

  it('geometry', () => {
    cy.get('div#left-Polygon>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('g[data-tempgroup="true"]').should('have.length', '4');
  });

  it('path', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('g[data-tempgroup="true"]').children('line').should('have.length', '4');
  });

  it('text', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 10, y: 20 });
    cy.get('#selectorGroup_svg_1', { timeout: 1000 }).should('exist');
    cy.realType('Test Array');
    doAllThing();
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('g[data-tempgroup="true"]').children('text').should('have.length', '4');
  });

  it('group', () => {
    cy.uploadFile('flux.png', 'image/png');
    // Create ellipse
    cy.get('div#left-Ellipse>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    // Select both
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 600, 600, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get('#group').click();
    cy.wait(500);
    doAllThing();
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('#svg_11').children('image').should('have.length', '1');
    cy.get('ellipse').should('have.length', '4');
  });

  it('mutilselect', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('div#left-Polygon>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('g[data-tempgroup="true"]', { timeout: 3000 })
      .children('line')
      .should('have.length', '4');
    cy.get('g[data-tempgroup="true"]', { timeout: 3000 })
      .children('polygon')
      .should('have.length', '4');
  });
});
