describe('manipulate layers', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('the side panel and its components should exist', () => {
    cy.get('div#sidepanels').should('exist');
    cy.get('div.right-panel-tabs').should('exist');
    cy.get('div#layerpanel').should('exist');
    cy.get('div#laser-panel').should('exist');
  });

  it('there is only one layer by default', () => {
    cy.get('div.layer').should('have.length', 1);
    cy.get('div.layer').should('have.class', 'current');
    cy.get('div.layer div.layername').should('have.text', 'Layer 1');
    cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Layer 1)');
    cy.get('div#layerbackgroundColor-0').should('have.attr', 'style', 'background-color: rgb(51, 51, 51);')
  });

  it('add one new layer', () => {
    cy.get('div.add-layer-btn').should('exist');
    cy.get('div.add-layer-btn').click();
    cy.get('div.layer').should('have.length', 2);
    cy.get('div.layer:nth-child(1)').should('have.class', 'current');
    cy.get('div.layer:nth-child(2)').should('not.have.class', 'current');
    cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Layer 2)');
    cy.get('div#layerbackgroundColor-1').should('have.attr', 'style', 'background-color: rgb(63, 81, 181);');
  });

  // it('rename the new layer', () => {
  //   cy.get('div.layer:nth-child(1)').dblclick();
  //   cy.get('input.text-input').clear().type('Hello Flux');
  //   cy.get('button[data-test-key="ok"]').click();
  //   cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Hello Flux)');
  // });

  it('delete the layer', () => {
    cy.get('div.layer').trigger('mousedown', { button: 2 });
    cy.get('#deletelayer').click({ force: true });
    cy.get('div.layer').should('have.length', 1);
    cy.get('div.add-layer-btn').click();
    cy.get('div.layer').should('have.length', 2);
    cy.get('div.layer:nth-child(2)').click({ force: true }).trigger('mousedown', { button: 2 });
    cy.get('#deletelayer').click({ force: true });
    cy.get('div.layer').should('have.length', 1);
    cy.get('div.layer div.layername').should('have.text', 'Layer 2');
  });

  it('duplicate the layer', () => {
    cy.get('div.layer').trigger('mousedown', { button: 2 });
    cy.get('#dupelayer').click({ force: true });
    cy.get('div.layer').should('have.length', 2);
    cy.get('div.layer:nth-child(1)').should('have.text', 'Layer 1 copy');
    cy.get('#layerbackgroundColor-1').should('have.attr', 'style', 'background-color: rgb(51, 51, 51);');
  });

  it('drag the layer ', () => {
    cy.get('div.add-layer-btn').dblclick();
    cy.get('div.layer[data-test-key="layer-2"]').dragTo('[data-index="0"]');
    cy.get('#layerlist').children().first().should('have.attr', 'data-test-key', 'layer-2');
  });

  it('lock the layer ', () => {
    cy.get('div.layer:nth-child(1)').trigger('mousedown', { button: 2 });
    cy.get('#locklayer').click({ force: true });
    cy.get('#layerlock-0 > img').should('have.css', 'display', 'block');
    cy.get('#layerlock-0 > img').should('be.visible');
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('g.layer').should('have.attr', 'data-lock', 'true');
    cy.get('div#left-Cursor>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '0');
    });
  });

  it('hide the layer ', () => {
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('div.tab.layers').click();
    cy.get('#layervis-0 > .vis-icon').click();
    cy.get('#svg_1').should('be.hidden');
  });

  it('merge all layer', () => {
    for (let n = 0; n < 9; n++) {
      cy.get('div.add-layer-btn').click();
    };
    cy.get('div.layer').should('have.length', 10);
    cy.get('div.layer:nth-child(1)').trigger('mousedown', { button: 2 });
    cy.get('#merge_all_layer').click({ force: true });
    cy.get('div.layer').should('have.length', 1);
    cy.get('div.layer:nth-child(1)').should('have.text', 'Layer 1');
  });

  it('merge down one layer', () => {
    cy.get('div.add-layer-btn').dblclick();
    cy.get('div.layer').should('have.length', 3);
    cy.get('div.layer:nth-child(1)').trigger('mousedown', { button: 2 });
    cy.get('#merge_down_layer').click({ force: true });
    cy.get('div.layer').should('have.length', 2);
    cy.get('#layerbackgroundColor-1').should('have.attr', 'style', 'background-color: rgb(63, 81, 181);');
  });

  it('merge the layer selected', () => {
    for (let n = 0; n < 3; n++) {
      cy.get('div.add-layer-btn').click();
    };
    cy.get('div.layer').should('have.length', 4);
    cy.get('div.layer:nth-child(1)').should('have.text', 'Layer 4');
    cy.get('div.layer:nth-child(1)').click();
    cy.get('div.layer:nth-child(2)').trigger('mousedown', { button: 2, metaKey: true });
    cy.get('#merge_down_layer').click({ force: true });
    cy.get('div.layer').should('have.length', 3);
    cy.get('div.layer:nth-child(1)').should('have.text', 'Layer 3');
    cy.get('div.layer:nth-child(2)').should('have.text', 'Layer 2');
    cy.get('#layerbackgroundColor-2').should('have.attr', 'style', 'background-color: rgb(244, 67, 54);');
  });

  it('switch the layer and check the parameter ', () => {
    cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
    cy.get('div.add-layer-btn').click();
    cy.get('#laser-config-dropdown').select('Acrylic - 3mm Cutting');
    cy.get('div.layer:nth-child(2)').click();
    cy.get('#power').should('have.value', '60');
    cy.get('#speed').should('have.value', '6');
    cy.get('#repeat').should('have.value', '1');
    cy.get('div.layer:nth-child(1)').click();
    cy.get('#power').should('have.value', '60');
    cy.get('#speed').should('have.value', '8');
    cy.get('#repeat').should('have.value', '1');
  });

  it('create object on different layer and check the color', () => {
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('have.attr', 'stroke', '#333333');
    cy.get('div.tab.layers').click();
    cy.get('div.add-layer-btn').click();
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_2').should('have.attr', 'stroke', '#3F51B5');
  });

  // it('move object to different layer', () => {
  //   cy.get('div#left-Rectangle>img').click();
  //   cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
  //   cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  //   cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  //   cy.get('div.tab.layers').click();
  //   cy.get('#laser-config-dropdown').select('Leather - 3mm Cutting');
  //   cy.get('#power').should('have.value', '65');
  //   cy.get('#speed').should('have.value', '3');
  //   cy.get('#repeat').should('have.value', '1');
  //   cy.get('div.add-layer-btn').click();
  //   cy.get('#laser-config-dropdown').select('Fabric - 5mm Cutting');
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('div.tab.layers').click();
  //   cy.get('#selLayerNames').select('Layer 2');
  //   cy.get('button[data-test-key="yes"]').click();
  //   cy.get('#svg_1').should('have.attr', 'stroke', '#3F51B5');
  //   cy.get('div#left-Cursor>img').click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('div.tab.layers').click();
  //   cy.get('#power').should('have.value', '60');
  //   cy.get('#speed').should('have.value', '20');
  //   cy.get('#repeat').should('have.value', '1');
  // });
});
