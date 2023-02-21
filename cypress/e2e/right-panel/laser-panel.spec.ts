describe('manipulate laser panel', () => {

  beforeEach(() => {
    cy.landingEditor();
  });

//   it('set customized List', () => {
//     cy.get('.layer-param-buttons > div.right').click();
//     cy.get('#wood_5mm_cutting').click({ force: true });
//     cy.get('#removeselect').click();
//     cy.get('#custom-config-list').children().should('have.length', '15');
//     cy.get('#default-config-list > :nth-child(2)').click({ force: true });
//     cy.get('#addselect').click();
//     cy.get('#custom-config-list').children().should('have.length', '16');
//   });

//   it('reset the parameter', () => {
//     cy.get('.layer-param-buttons > div.right').click();
//     cy.get('#wood_3mm_cutting').click({ force: true });
//     for (let n = 0; n < 9; n++) {
//       cy.get('#laser_delete').click();
//     };
//     cy.get('#laser_save_and_exit').click();
//     cy.get('#laser-config-dropdown').children().should('have.length', '10');
//     cy.get('.layer-param-buttons > div.right').click();
//     cy.get('#laser_reset').click();
//     cy.get('.button-group > .primary').click();
//     cy.get('#laser_save_and_exit').click();
//     cy.get('#laser-config-dropdown').children().should('have.length', '19');
//   });

//   it('add new parameter at initial panel', () => {
//     cy.get('#power').clear().type('100').blur();
//     cy.get('#speed').clear().type('70').blur();
//     cy.get('#repeat').clear().type('3').blur();
//     cy.get('div.add-preset-btn').click();
//     cy.get('.text-input').type('Hello Flux').blur();;
//     cy.get('.primary').click();
//     cy.get('.layer-param-buttons > div.right').click();
//     cy.contains('Hello Flux').should('exist');
//     cy.get('#custom-config-list > .no-border').click({ force: true });
//     cy.get('#laser_power').should('have.value', '100');
//     cy.get('#laser_speed').should('have.value', '70');
//     cy.get('#laser_repeat').should('have.value', '3');
//     cy.get('#laser_zStep').should('have.value', '0');
//   });

//   it('add new parameter at laser panel', () => {
//     cy.get('.layer-param-buttons > div.right').click();
//     cy.get('#add_btn').click({ force: true });
//     cy.get('.text-input').type('Flux Laser').blur();;
//     cy.get('[data-test-key="ok"]').click();
//     cy.contains('Flux Laser').should('exist');
//     cy.get('#laser_power').clear().type('40').blur();
//     cy.get('#laser_speed').clear().type('20').blur();
//     cy.get('#laser_repeat').clear().type('10').blur();
//     cy.get('#laser_zStep').clear().type('5').blur();
//     cy.get('#laser_save_and_exit').click();
//     cy.get('#laser-config-dropdown').select('Flux Laser');
//     checkValue(40, 20, 10);
//   });

//   it('check all parameter value with beamo canvas', () => {
//     openDocumentSettings();
//     cy.get('#workarea_dropdown').select('beamo');
//     cy.get('.primary').click();

//     cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
//     checkValue(45, 5, 1);
//     cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
//     checkValue(55, 4, 2);
//     cy.get('#laser-config-dropdown').select('Wood - Engraving');
//     checkValue(25, 150, 1);

//     cy.get('#laser-config-dropdown').select('Acrylic - 3mm Cutting');
//     checkValue(55, 4, 1);
//     cy.get('#laser-config-dropdown').select('Acrylic - 5mm Cutting');
//     checkValue(55, 5, 2);
//     cy.get('#laser-config-dropdown').select('Acrylic - Engraving');
//     checkValue(25, 150, 1);

//     cy.get('#laser-config-dropdown').select('Leather - 3mm Cutting');
//     checkValue(60, 3, 1);
//     cy.get('#laser-config-dropdown').select('Leather - 5mm Cutting');
//     checkValue(60, 3, 2);
//     cy.get('#laser-config-dropdown').select('Leather - Engraving');
//     checkValue(30, 150, 1);

//     cy.get('#laser-config-dropdown').select('Fabric - 3mm Cutting');
//     checkValue(50, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - 5mm Cutting');
//     checkValue(50, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - Engraving');
//     checkValue(20, 150, 1);

//     cy.get('#laser-config-dropdown').select('Rubber - Engraving');
//     checkValue(50, 140, 1);
//     cy.get('#laser-config-dropdown').select('Glass - Engraving');
//     checkValue(35, 150, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving');
//     checkValue(50, 80, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving (Diode Laser)');
//     checkValue(100, 10, 1);
//   });

//   it('check all parameter value with beambox canvas', () => {
//     cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
//     checkValue(60, 6, 1);
//     cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
//     checkValue(60, 3, 1);
//     cy.get('#laser-config-dropdown').select('Wood - Engraving');
//     checkValue(25, 150, 1);

//     cy.get('#laser-config-dropdown').select('Acrylic - 3mm Cutting');
//     checkValue(60, 8, 1);
//     cy.get('#laser-config-dropdown').select('Acrylic - 5mm Cutting');
//     checkValue(60, 4, 1);
//     cy.get('#laser-config-dropdown').select('Acrylic - Engraving');
//     checkValue(25, 150, 1);

//     cy.get('#laser-config-dropdown').select('Leather - 3mm Cutting');
//     checkValue(65, 3, 1);
//     cy.get('#laser-config-dropdown').select('Leather - 5mm Cutting');
//     checkValue(65, 3, 1);
//     cy.get('#laser-config-dropdown').select('Leather - Engraving');
//     checkValue(30, 150, 1);

//     cy.get('#laser-config-dropdown').select('Fabric - 3mm Cutting');
//     checkValue(60, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - 5mm Cutting');
//     checkValue(60, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - Engraving');
//     checkValue(20, 150, 1);

//     cy.get('#laser-config-dropdown').select('Rubber - Engraving');
//     checkValue(45, 130, 1);
//     cy.get('#laser-config-dropdown').select('Glass - Engraving');
//     checkValue(30, 150, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving');
//     checkValue(50, 120, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving (Diode Laser)');
//     checkValue(100, 10, 1);
//   });

//   it('check all parameter value with beamboxpro canvas', () => {
//     openDocumentSettings();
//     cy.get('#workarea_dropdown').select('Beambox Pro');
//     cy.get('.primary').click();

//     cy.get('#laser-config-dropdown').select('Wood - 3mm Cutting');
//     checkValue(55, 7, 1);
//     cy.get('#laser-config-dropdown').select('Wood - 5mm Cutting');
//     checkValue(55, 4, 1);
//     cy.get('#laser-config-dropdown').select('Wood - Engraving');
//     checkValue(20, 150, 1);

//     cy.get('#laser-config-dropdown').select('Acrylic - 3mm Cutting');
//     checkValue(55, 7, 1);
//     cy.get('#laser-config-dropdown').select('Acrylic - 5mm Cutting');
//     checkValue(55, 4, 1);
//     cy.get('#laser-config-dropdown').select('Acrylic - Engraving');
//     checkValue(15, 150, 1);

//     cy.get('#laser-config-dropdown').select('Leather - 3mm Cutting');
//     checkValue(55, 4, 1);
//     cy.get('#laser-config-dropdown').select('Leather - 5mm Cutting');
//     checkValue(55, 3, 1);
//     cy.get('#laser-config-dropdown').select('Leather - Engraving');
//     checkValue(20, 150, 1);

//     cy.get('#laser-config-dropdown').select('Fabric - 3mm Cutting');
//     checkValue(35, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - 5mm Cutting');
//     checkValue(35, 20, 1);
//     cy.get('#laser-config-dropdown').select('Fabric - Engraving');
//     checkValue(15, 150, 1);

//     cy.get('#laser-config-dropdown').select('Rubber - Engraving');
//     checkValue(40, 150, 1);
//     cy.get('#laser-config-dropdown').select('Glass - Engraving');
//     checkValue(25, 150, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving');
//     checkValue(50, 140, 1);
//     cy.get('#laser-config-dropdown').select('Metal - Engraving (Diode Laser)');
//     checkValue(100, 10, 1);
//   });

//   it('export parameter file', () => {
//     const cypressDownloadPath = Cypress.env('cypressDownloadPath');
//     cy.get('#power').clear().type('100').blur();
//     cy.get('#speed').clear().type('70').blur();
//     cy.get('#repeat').clear().type('3').blur();
//     cy.get('div.add-preset-btn').click();
//     cy.get('.text-input').type('Hi Flux').blur();;
//     cy.get('.primary').click();
//     cy.get('[title="Export"]').click();
//     cy.wait(5000);
//     cy.readFile(cypressDownloadPath).its('customizedLaserConfigs').its('16').its('name').should('eq', 'Hi Flux');
//   });

//   it('import parameter file', () => {
//     cy.get('[title="Import"] > img').click({ force: true });
//     cy.get('#file-input').attachFile('testfile.json');
//     cy.contains('Confirm').click();
//     cy.contains('testFile').should('exist');
//     cy.get('#laser-config-dropdown').select('testFile');
//     checkValue(100, 50, 10);
//   });

//   function checkValue(power, speed, repeat) {
//     cy.get('#power').should('have.value', power);
//     cy.get('#speed').should('have.value', speed);
//     cy.get('#repeat').should('have.value', repeat);
//   };

//   function openDocumentSettings() {
//     cy.get('div.menu-btn-container').click();
//     cy.get(':nth-child(2) > .rc-menu__item').click();
//     cy.get('.rc-menu > :nth-child(22)').click();
//   };
});
