describe('infill', () => {
  beforeEach(() => {
    cy.landingEditor();
  });
 it('infill-Tools', () => {
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
   cy.get('#svg_1').click();
   cy.get('#infill').click();
   cy.get(`#svg_1`).should('have.attr', 'fill', 'none');
 });
});
