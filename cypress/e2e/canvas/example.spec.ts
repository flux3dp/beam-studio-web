describe('Example', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

    it('Exampl-Ador Laser', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Example of Ador Laser").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_5').should('exist');
       cy.get('#svg_5')
         .invoke('attr', 'data-xform')
         .should('include', 'x=223');
       cy.get('#svg_5')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 809.45829);
       cy.get('#svg_5')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 774.29579);
      });

    it('Exampl-Ador Printing Singlr Color', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Example of Ador Printing - Single Color").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_3').should('exist');
       cy.get('#svg_3')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 300);
       cy.get('#svg_3')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 300);
       cy.get('#svg_3')
         .invoke('attr', 'width')
         .then(parseFloat)
         .should('eq', 500);
       cy.get('#svg_3')
         .invoke('attr', 'height')
         .then(parseFloat)
         .should('eq', 500);
       cy.get('#svg_3')
         .invoke('attr', 'filter')
         .should('eq', 'url(#filter#E6007E)');
      });

    it('Exampl-Ador Printing Full Color', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);

       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Example of Ador Printing - Full Color").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       // 确保元素存在
       cy.get('#svg_2').should('exist');
       // 验证 x、y 属性值
       cy.get('#svg_2')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 234.99681);
       cy.get('#svg_2')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 198.11667);
       // 验证 style 属性值
       cy.get('#svg_2')
         .invoke('attr', 'style')
         .should('include', 'pointer-events:inherit');
       // 验证 data-wireframe 属性值
       cy.get('#svg_2')
         .invoke('attr', 'data-wireframe')
         .should('eq', 'false');
      });

    it('Exampl-Beamo', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Example of beamo").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_5').should('exist');
       cy.get('#svg_5')
         .invoke('attr', 'data-xform')
         .should('include', 'x=43.504661560058594 y=43.504661560058594 width=407.7339172363281 height=407.7339172363281');
       cy.get('#svg_5')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 144.00462);
       cy.get('#svg_5')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 170.18727);
       cy.get('#svg_5')
         .invoke('attr', 'style')
         .should('include', 'pointer-events:inherit');
       cy.get('#svg_5')
         .invoke('attr', 'data-wireframe')
         .should('eq', 'false');
      });

    it('Exampl-Beambox', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Example of beambox").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_4').should('exist');
       cy.get('#svg_4')
         .invoke('attr', 'fill')
         .should('eq', '#FE0000');
       cy.get('#svg_4')
         .invoke('attr', 'stroke')
         .should('eq', '#FE0000');
       cy.get('#svg_4')
         .invoke('attr', 'height')
         .then(parseFloat)
         .should('eq', 255.66541);
       cy.get('#svg_4')
         .invoke('attr', 'width')
         .then(parseFloat)
         .should('eq', 926.7871);
       cy.get('#svg_4')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 151.80275);
       cy.get('#svg_4')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 115.63276);
       cy.get('#svg_2').should('exist');
       cy.get('#svg_2')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 358.07825);
       cy.get('#svg_2')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 252.18133);
       cy.get('#svg_2').should('have.text', 'hello beambox.');
      });

    it('Exampl-Material Engraving Test', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Engraving Test").eq(0).click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_230').should('exist');
       cy.get('#svg_230')
         .invoke('attr', 'height')
         .then(parseFloat)
         .should('eq', 705.68322);
       cy.get('#svg_230')
         .invoke('attr', 'width')
         .then(parseFloat)
         .should('eq', 992.76481);
       cy.get('#svg_230')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 300);
       cy.get('#svg_230')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 299.99998);
       cy.get('#svg_230')
         .invoke('attr', 'stroke')
         .should('eq', '#1B393D');
       cy.get('#svg_230')
         .invoke('attr', 'fill')
         .should('eq', 'none');
       cy.get('#svg_114').should('exist');
       cy.get('#svg_114')
         .invoke('attr', 'data-xform')
         .should('include', 'x=279.015625 y=567.6875 width=58.078125 height=38.078125');
       cy.get('#svg_114')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 143.74936);
       cy.get('#svg_114')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -85.9548);
       cy.get('#svg_244').should('exist');
       cy.get('#svg_244')
         .invoke('attr', 'fill')
         .should('eq', '#00FE00');
       cy.get('#svg_244')
         .invoke('attr', 'stroke')
         .should('eq', '#00FE00');
      });

    it('Exampl-Material Engraving Test-Classic', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Engraving Test - Classic").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_2').should('exist');
       cy.get('#svg_2')
         .invoke('attr', 'data-xform')
         .should('include', 'x=0 y=0 width=600.0805053710938 height=950.0332641601562');
       cy.get('#svg_2')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 300);
       cy.get('#svg_2')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 284.84028);
       cy.get('#svg_30').should('exist');
       cy.get('#svg_30')
         .invoke('attr', 'data-xform')
         .should('include', 'x=50.09169006347656 y=123.47222137451172 width=42.691612243652344 height=42.691612243652344');
       cy.get('#svg_30')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 299.36335);
       cy.get('#svg_30')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 299.99999);
       cy.get('#svg_66').should('exist');
       cy.get('#svg_66')
         .invoke('attr', 'stroke')
         .should('eq', '#000000');
       cy.get('#svg_66')
         .invoke('attr', 'fill')
         .should('eq', '#000000');
      });

    it('Exampl-Material Cutting Test', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Cutting Test").eq(0).click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(1000)
       cy.get('#svg_112').should('exist');
       cy.get('#svg_112')
         .invoke('attr', 'data-xform')
         .should('include', 'x=150.82630920410156 y=99.20514678955078 width=1299.2283935546875 height=850.0291748046875');
       cy.get('#svg_112')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 104.17035);
       cy.get('#svg_112')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 189.00661);
       cy.get('#svg_159').should('exist');
       cy.get('#svg_159')
         .invoke('attr', 'data-xform')
         .should('include', 'x=443.81103515625 y=310.16900634765625 width=75.57159423828125 height=45.337371826171875');
       cy.get('#svg_159')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 34.33538);
       cy.get('#svg_159')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 211.51802);
       cy.get('#svg_7').should('exist');
       cy.get('#svg_7')
         .invoke('attr', 'fill')
         .should('eq', '#00FE00');
       cy.get('#svg_7')
         .invoke('attr', 'stroke')
         .should('eq', '#00FE00');
      });

    it('Exampl-Material Cutting Test - Simple', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Cutting Test - Simple").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(1000)
       cy.get('#svg_62').should('exist');
       cy.get('#svg_62')
         .invoke('attr', 'data-xform')
         .should('include', 'x=724.1315307617188 y=694.32470703125 width=1200.009521484375 height=599.997802734375');
       cy.get('#svg_62')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -501.06353);
       cy.get('#svg_62')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -431.94829);
       cy.get('#svg_63').should('exist');
       cy.get('#svg_63')
         .invoke('attr', 'data-xform')
         .should('include', 'x=914.0941772460938 y=897.0205078125 width=78.851318359375 height=47.30780029296875');
       cy.get('#svg_63')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -476.84957);
       cy.get('#svg_63')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -394.3247);
       cy.get('#svg_25').should('exist');
       cy.get('#svg_25')
         .invoke('attr', 'fill')
         .should('eq', '#00FE00');
       cy.get('#svg_25')
         .invoke('attr', 'stroke')
         .should('eq', '#00FE00');
      });

    it('Exampl-Material Line Test', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Line Test").click();
       cy.wait(1000)
       cy.get('#svg_101').should('exist');
       cy.get('#svg_101')
         .invoke('attr', 'data-xform')
         .should('include', 'x=839.4998779296875 y=786.4764404296875 width=4938.85546875 height=2998.6171875');
       cy.get('#svg_101')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -2121.94331);
       cy.get('#svg_101')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -1987.80619);
       cy.get('#svg_146').should('exist');
       cy.get('#svg_146')
         .invoke('attr', 'data-xform')
         .should('include', 'x=1726.1251220703125 y=1640.2381591796875 width=266.6015625 height=159.941650390625');
       cy.get('#svg_146')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -2121.94331);
       cy.get('#svg_146')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -1987.80619);
       cy.get('#svg_202').should('exist');
       cy.get('#svg_202')
         .invoke('attr', 'data-xform')
         .should('include', 'x=1203.18359375 y=1059.64453125 width=4202.3984375 height=2427.63671875');
       cy.get('#svg_202')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -2121.94331);
       cy.get('#svg_202')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -1987.80619);
      });

    it('Exampl-Material Printing Test', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("Edit").click();
       cy.contains('Document Settings').click();
       cy.wait(500);
       cy.get('[class^="ant-select-selection-item"]').eq(0).click();
       cy.wait(700);
       cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
       cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
       cy.wait(500);
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Material Printing Test").click();
       cy.get('button[class^="ant-btn"]').eq(1).click({force: true});
       cy.wait(500)
       cy.get('#svg_463').should('exist');
       cy.get('#svg_463')
         .invoke('attr', 'stroke')
         .should('eq', '#1D1D1B');
       cy.get('#svg_463')
         .invoke('attr', 'fill')
         .should('eq', '#1D1D1B');
       cy.get('#svg_92').should('exist');
       cy.get('#svg_92')
         .invoke('attr', 'data-xform')
         .should('include', 'x=3262.174560546875 y=1157.0972900390625 width=2009.220947265625 height=1199.2789306640625');
       cy.get('#svg_92')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -1353.94875);
       cy.get('#svg_92')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -1403.39449);
       cy.get('#svg_100').should('exist');
       cy.get('#svg_100')
         .invoke('attr', 'data-xform')
         .should('include', 'x=8279.07421875 y=5368.45068359375 width=1204.1435546875 height=2018.64697265625');
       cy.get('#svg_100')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', -1353.94875);
       cy.get('#svg_100')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', -1403.39449);
      });

    it('Exampl-Acrylic Focus Probe - 3mm', () => {
       cy.get('div.menu-btn-container').click();
       cy.get('.rc-menu__submenu').contains("File").click();
       cy.get('.rc-menu__submenu').contains("Examples").click();
       cy.get('.rc-menu__item').contains("Acrylic Focus Probe - 3mm").click();
       cy.wait(500)
       cy.get('#svg_9').should('exist');
       cy.get('#svg_9')
         .invoke('attr', 'data-xform')
         .should('include', 'x=0 y=0 width=100 height=316');
       cy.get('#svg_9')
         .invoke('attr', 'x')
         .then(parseFloat)
         .should('eq', 100);
       cy.get('#svg_9')
         .invoke('attr', 'y')
         .then(parseFloat)
         .should('eq', 100);
    });
});
