describe('Element', () => {
 it('Use Element-Tools', () => {
   cy.landingEditor();
   cy.get('div#left-Element').click();
   cy.get('[class="ant-modal-header"]').contains('Element').should('exist');
   cy.get('[class="ant-modal-body"]').should('exist');
   cy.get('[class="adm-capsule-tabs-tab adm-capsule-tabs-tab-active"]').should('exist');
   cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
     .eq(0).click();
   cy.get('#svg_1').should('exist');
   cy.get(`#svg_1`).should('have.attr', 'cx', '250');
   cy.get(`#svg_1`).should('have.attr', 'cy', '250');
   cy.get(`#svg_1`).should('have.attr', 'fill', '#333333');
   cy.get(`#svg_1`).click().rightclick();
   cy.get(`[class="react-contextmenu-item"]`).contains('Delete').click({force: true});

   cy.get('div#left-Element').click();
   cy.get('[class="adm-capsule-tabs-tab-wrapper"]')
     .contains('Graphics').click();
   cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
     .eq(0).click();
  cy.get('#svg_10')
     .should('exist')
     .should('have.attr', 'fill', '#333333')
     .should('have.attr', 'd', 'M250.0001615,-1e-7 L327.5630628,156.1086281 L500.0000311,181.6358068 L375.4995411,303.6434539 L404.5082297,475.5284043 L250.0001615,394.8242581 L95.4920932,475.5284043 L124.5007819,303.6434539 L-2e-7,181.6358068 L172.4372602,156.1086281 L250.0001615,-1e-7 z');
   cy.get(`#svg_10`).click().rightclick();
   cy.get(`[class="react-contextmenu-item"]`).contains('Delete').click({force: true});

   cy.get('div#left-Element').click();
   cy.get('[class="adm-capsule-tabs-tab-wrapper"]')
     .contains('Line').click();
   cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
     .eq(4).click();
   cy.get('#svg_11')
     .should('exist')
     .should('have.attr', 'd', 'M0,250 L0,83.3333313 C0,37.3096658 37.3096658,0 83.3333313,0 L416.6666567,0 C462.689989,0 500,37.3096658 500,83.3333313 L500,250')  // 確保 d 屬性的值是指定的值
     .should('have.attr', 'stroke', '#333333')
     .should('have.attr', 'fill', 'none')
     .should('have.attr', 'data-ratiofixed', 'true')
     .should('have.attr', 'style', 'pointer-events:none')
     .should('have.attr', 'vector-effect', 'non-scaling-stroke');
 });
});
