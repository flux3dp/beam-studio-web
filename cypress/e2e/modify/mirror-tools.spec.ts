describe('mirror tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('horizontal flip ', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.focused({ timeout: 1000 }).should('have.id', 'text');
    cy.realType('TEST TEXT HORIZONTAL');
    cy.get('#horizontal_flip').click();
    cy.get('#svg_1').should(($value) => {
      const str = $value.attr('transform');
      expect(str.substring(7, 15)).equal('-1,0,0,1');
    });
  });

  it('vertical flip', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.focused({ timeout: 1000 }).should('have.id', 'text');
    cy.realType('TEST TEXT VERTICAL');
    cy.get('#vertical_flip').click();
    cy.get('#svg_1').should(($value) => {
      const str = $value.attr('transform');
      expect(str.substring(7, 15)).equal('1,0,0,-1');
    });
  });
});
