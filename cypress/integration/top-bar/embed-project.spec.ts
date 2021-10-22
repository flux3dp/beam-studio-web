describe('embed project', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('example of beamo', () => {
    openExampleFile(1);
    cy.get('#layerlist').children().should('have.length', '2');
    cy.get('div.layer:nth-child(1)').should('have.text', 'Engraving');
    cy.get('div.layer:nth-child(2)').should('have.text', 'Cutting');
    checkElementTitle(2, 'Cutting > Imported Object');
    checkElementTitle(5, 'Engraving > Imported Object');
    checkSize(2, 144.00462, 170.18727);
  });

  it('example of beambox', () => {
    openExampleFile(2);
    cy.get('#layerlist').children().should('have.length', '2');
    cy.get('div.layer:nth-child(1)').should('have.text', 'Engraving');
    cy.get('div.layer:nth-child(2)').should('have.text', 'Cutting');
    checkElementTitle(2, 'Engraving > Text');
    checkElementTitle(4, 'Cutting > Rectangle');
    cy.get('#svg_2').should('have.text', 'hello beambox.');
    checkSize(4, 115.63276, 151.80275);
  });

  it('example of material engraving test', () => {
    openExampleFile(3);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '112');
    checkElementTitle(2, '#000000 > Imported Object');
    cy.get('#svg_2').should((object) => {
      let svg = object.attr('data-xform');
      expect(svg.substring(0, 10)).equal('x=170.3806');
      expect(svg.substring(19, 29)).equal('y=249.5904');
    });
  });

  it('example of material engraving test classic', () => {
    openExampleFile(4);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '26');
    checkElementTitle(2, '#FE00FE > Imported Object');
    checkSize(2, 112.5, 87.5);
  });

  it('example of material cutting', () => {
    openExampleFile(5);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '112');
    checkElementTitle(112, '#000000 > Imported Object');
    checkSize(112, 106.37148, 41.51082);
  });

  it('example of material cutting simple', () => {
    openExampleFile(6);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '62');
    checkElementTitle(62, '#000000 > Imported Object');
    cy.get('#svg_62').should((object) => {
      let svg = object.attr('data-xform');
      expect(svg.substring(0, 10)).equal('x=724.1315');
      expect(svg.substring(20, 30)).equal('y=694.3247');
    });
  });

  it('example of material line', () => {
    openExampleFile(7);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '101');
    checkElementTitle(101, '#000000 > Imported Object');
    checkSize(101, -2121.94331, -1987.80619)
  });

  it('example of acrylic focus probe', () => {
    openExampleFile(8);
    cy.wait(1000);
    cy.get('#layerlist').children().should('have.length', '1');
    cy.get('div.layer:nth-child(1)').should('have.text', 'Cut');
    checkElementTitle(9, 'Cut > Imported Object');
    checkSize(9, 100, 100)
  });

  function openExampleFile(sequence) {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(1) > .rc-menu__item').click();
    cy.get(':nth-child(6) > .rc-menu__item').click();
    cy.get(`:nth-child(6) > .rc-menu > :nth-child(${sequence})`).click();
  };

  function checkElementTitle(number, text) {
    cy.get(`#svg_${number}`).click({ force: true });
    cy.get('div.top-bar div.element-title').should('have.text', text);
  };

  function checkSize(number, xValue, yValue) {
    cy.get(`#svg_${number}`).should('have.attr', 'x', xValue);
    cy.get(`#svg_${number}`).should('have.attr', 'y', yValue);
  };
});
