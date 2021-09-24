describe('mirror tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('horizontal flip ', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('TEST TEXT HORIZONTAL');
    cy.get('#horizontal_flip > img').click();
    cy.get('#svg_1').should('have.attr', 'transform', 'matrix(-1,0,0,1,4381.640625,0) ');
  });

  it('vertical flip', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('TEST TEXT VERTICAL');
    cy.get('#vertical_flip > img').click();
    cy.get('#svg_1').should('have.attr', 'transform', 'matrix(1,0,0,-1,0,4077.890625) ');
  });
});
