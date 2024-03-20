function openExample(exampleName: string, handleSave = false) {
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains('File').click();
  cy.get('.rc-menu__submenu').contains('Examples').click();
  cy.get('.rc-menu__item').contains(exampleName).click();
  if (handleSave) {
    cy.get('button.ant-btn').contains("Don't Save").click();
  }
}

describe('example', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('import example of Ador Laser', () => {
    cy.changeWorkarea('Ador');
    openExample('Example of Ador Laser', true);
    cy.get('#svg_5').should('exist');
    cy.get('#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('#svgcontent').trigger('mouseup', { force: true });
    cy.get('div.element-title').contains('Multiple Objects');
    cy.get('#x_position').should('have.value', '30.00');
    cy.get('#y_position').should('have.value', '30.00');
    cy.get('#w_size').should('have.value', '50.00');
    cy.get('#h_size').should('have.value', '50.00');
  });

  it('import example of Ador Printing Singlr Color', () => {
    cy.changeWorkarea('Ador');
    openExample('Example of Ador Printing - Single Color', true);
    cy.get('#svg_3').should('exist');
    cy.get('#svg_3').should('have.attr', 'x', '300');
    cy.get('#svg_3').should('have.attr', 'y', '300');
    cy.get('#svg_3').should('have.attr', 'width', '500');
    cy.get('#svg_3').should('have.attr', 'height', '500');
    cy.get('#svg_3').should('have.attr', 'filter', 'url(#filter#E6007E)');
  });

  it('import example of Ador Printing Full Color', () => {
    cy.changeWorkarea('Ador');
    openExample('Example of Ador Printing - Full Color', true);
    cy.get('#svg_2').should('exist');
    cy.get('#svg_2').should('have.attr', 'x', '234.99681');
    cy.get('#svg_2').should('have.attr', 'y', '198.11667');
  });

  it('import example of Beamo', () => {
    cy.changeWorkarea('Ador');
    openExample('Example of beamo', true);
    cy.get('#svg_5').should('exist');
    cy.get('#svg_5').should(
      'have.attr',
      'data-xform',
      'x=43.504661560058594 y=43.504661560058594 width=407.7339172363281 height=407.7339172363281 '
    );
    cy.get('#svg_5').should('have.attr', 'x', '144.00462');
    cy.get('#svg_5').should('have.attr', 'y', '170.18727');
  });

  it('import example of Beambox', () => {
    cy.changeWorkarea('Ador');
    openExample('Example of beambox', true);
    cy.get('#svg_4').should('exist');
    cy.get('#svg_4').should('have.attr', 'fill', '#FE0000');
    cy.get('#svg_4').should('have.attr', 'stroke', '#FE0000');
    cy.get('#svg_4').should('have.attr', 'height', 255.66541);
    cy.get('#svg_4').should('have.attr', 'width', 926.7871);
    cy.get('#svg_4').should('have.attr', 'y', 151.80275);
    cy.get('#svg_4').should('have.attr', 'x', 115.63276);
    cy.get('#svg_2').should('exist');
    cy.get('#svg_2').should('have.attr', 'y', 358.07825);
    cy.get('#svg_2').should('have.attr', 'x', 252.18133);
    cy.get('#svg_2').should('have.text', 'hello beambox.');
  });

  it('import example of Material Engraving Test', () => {
    cy.changeWorkarea('Ador');
    openExample('Material Engraving Test', true);
    cy.get('#svg_230').should('exist');
    cy.get('#svg_230').should('have.attr', 'height', 705.68322);
    cy.get('#svg_230').should('have.attr', 'width', 992.76481);
    cy.get('#svg_230').should('have.attr', 'y', 300);
    cy.get('#svg_230').should('have.attr', 'x', 299.99998);
    cy.get('#svg_230').should('have.attr', 'stroke', '#1B393D');
    cy.get('#svg_230').should('have.attr', 'fill', 'none');
    cy.get('#svg_114').should('exist');
    cy.get('#svg_114').should(
      'have.attr',
      'data-xform',
      'x=279.015625 y=567.6875 width=58.078125 height=38.078125 '
    );
    cy.get('#svg_114').should('have.attr', 'x', 143.74936);
    cy.get('#svg_114').should('have.attr', 'y', -85.9548);
    cy.get('#svg_244').should('exist');
    cy.get('#svg_244').should('have.attr', 'fill', '#00FE00');
    cy.get('#svg_244').should('have.attr', 'stroke', '#00FE00');
  });

  it('import example of Material Engraving Test-Classic', () => {
    cy.changeWorkarea('Ador');
    openExample('Material Engraving Test - Classic', true);
    cy.get('#svg_2').should('exist');
    cy.get('#svg_2').should(
      'have.attr',
      'data-xform',
      'x=0 y=0 width=600.0805053710938 height=950.0332641601562 '
    );
    cy.get('#svg_2').should('have.attr', 'x', 300);
    cy.get('#svg_2').should('have.attr', 'y', 284.84028);
    cy.get('#svg_30').should('exist');
    cy.get('#svg_30').should(
      'have.attr',
      'data-xform',
      'x=50.09169006347656 y=123.47222137451172 width=42.691612243652344 height=42.691612243652344 '
    );
    cy.get('#svg_30').should('have.attr', 'x', 299.36335);
    cy.get('#svg_30').should('have.attr', 'y', 299.99999);
    cy.get('#svg_66').should('exist');
    cy.get('#svg_66').should('have.attr', 'stroke', '#000000');
    cy.get('#svg_66').should('have.attr', 'fill', '#000000');
  });

  it('import example of Material Cutting Test', () => {
    cy.changeWorkarea('Ador');
    openExample('Material Cutting Test', true);
    cy.get('#svg_112').should('exist');
    cy.get('#svg_112').should(
      'have.attr',
      'data-xform',
      'x=150.82630920410156 y=99.20514678955078 width=1299.2283935546875 height=850.0291748046875 '
    );
    cy.get('#svg_112').should('have.attr', 'x', 104.17035);
    cy.get('#svg_112').should('have.attr', 'y', 189.00661);
    cy.get('#svg_159').should('exist');
    cy.get('#svg_159').should(
      'have.attr',
      'data-xform',
      'x=443.81103515625 y=310.16900634765625 width=75.57159423828125 height=45.337371826171875 '
    );
    cy.get('#svg_159').should('have.attr', 'x', 34.33538);
    cy.get('#svg_159').should('have.attr', 'y', 211.51802);
    cy.get('#svg_7').should('exist');
    cy.get('#svg_7').should('have.attr', 'fill', '#00FE00');
    cy.get('#svg_7').should('have.attr', 'stroke', '#00FE00');
  });

  it('import example of Material Cutting Test - Simple', () => {
    cy.changeWorkarea('Ador');
    openExample('Material Cutting Test - Simple', true);
    cy.get('#svg_62').should('exist');
    cy.get('#svg_62').should(
      'have.attr',
      'data-xform',
      'x=724.1315307617188 y=694.32470703125 width=1200.009521484375 height=599.997802734375 '
    );
    cy.get('#svg_62').should('have.attr', 'x', -501.06353);
    cy.get('#svg_62').should('have.attr', 'y', -431.94829);
    cy.get('#svg_63').should('exist');
    cy.get('#svg_63').should(
      'have.attr',
      'data-xform',
      'x=914.0941772460938 y=897.0205078125 width=78.851318359375 height=47.30780029296875 '
    );
    cy.get('#svg_63').should('have.attr', 'x', -476.84957);
    cy.get('#svg_63').should('have.attr', 'y', -394.3247);
    cy.get('#svg_25').should('exist');
    cy.get('#svg_25').should('have.attr', 'fill', '#00FE00');
    cy.get('#svg_25').should('have.attr', 'stroke', '#00FE00');
  });

  it('import example of Material Line Test', () => {
    openExample('Material Line Test');
    cy.get('#svg_101', { timeout: 3000 }).should('exist');
    cy.get('#svg_101').should(
      'have.attr',
      'data-xform',
      'x=839.4998779296875 y=786.4764404296875 width=4938.85546875 height=2998.6171875 '
    );
    cy.get('#svg_101').should('have.attr', 'x', -2121.94331);
    cy.get('#svg_101').should('have.attr', 'y', -1987.80619);
    cy.get('#svg_146').should('exist');
    cy.get('#svg_146').should(
      'have.attr',
      'data-xform',
      'x=1726.1251220703125 y=1640.2381591796875 width=266.6015625 height=159.941650390625 '
    );
    cy.get('#svg_146').should('have.attr', 'x', -2121.94331);
    cy.get('#svg_146').should('have.attr', 'y', -1987.80619);
    cy.get('#svg_202').should('exist');
    cy.get('#svg_202').should(
      'have.attr',
      'data-xform',
      'x=1203.18359375 y=1059.64453125 width=4202.3984375 height=2427.63671875 '
    );
    cy.get('#svg_202').should('have.attr', 'x', -2121.94331);
    cy.get('#svg_202').should('have.attr', 'y', -1987.80619);
  });

  it('import example of Material Printing Test', () => {
    cy.changeWorkarea('Ador');
    openExample('Material Printing Test', true);
    cy.get('#svg_463').should('exist');
    cy.get('#svg_463').should('have.attr', 'stroke', '#1D1D1B');
    cy.get('#svg_463').should('have.attr', 'fill', '#1D1D1B');
    cy.get('#svg_92').should('exist');
    cy.get('#svg_92').should(
      'have.attr',
      'data-xform',
      'x=3262.174560546875 y=1157.0972900390625 width=2009.220947265625 height=1199.2789306640625 '
    );
    cy.get('#svg_92').should('have.attr', 'x', -1353.94875);
    cy.get('#svg_92').should('have.attr', 'y', -1403.39449);
    cy.get('#svg_100').should('exist');
    cy.get('#svg_100').should(
      'have.attr',
      'data-xform',
      'x=8279.07421875 y=5368.45068359375 width=1204.1435546875 height=2018.64697265625 '
    );
    cy.get('#svg_100').should('have.attr', 'x', -1353.94875);
    cy.get('#svg_100').should('have.attr', 'y', -1403.39449);
  });

  it('import example of Acrylic Focus Probe - 3mm', () => {
    openExample('Acrylic Focus Probe - 3mm');
    cy.get('#svg_9').should('exist');
    cy.get('#svg_9').should('have.attr', 'data-xform', 'x=0 y=0 width=100 height=316 ');
    cy.get('#svg_9').should('have.attr', 'x', 100);
    cy.get('#svg_9').should('have.attr', 'y', 100);
  });
});
