describe('manipulate document setting', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('resolution', () => {
    openDocument();
    cy.get('div.value').should('have.text', 'Medium (250 DPI)');
    cy.get('input.slider').realSwipe('toLeft', { length: 100 });
    cy.get('div.value').should('have.text', 'Low (100 DPI)');
    cy.get('input.slider').realSwipe('toRight');
    cy.get('div.value').should('have.text', 'High (500 DPI)');
    cy.get('input.slider').realSwipe('toRight', { length: 100 });
    cy.get('div.value').should('have.text', 'Ultra High (1000 DPI)');
  });

  it('working area of beamo', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    cy.get('.primary').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(672, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(470, 2); });
  });

  it('working area of beambox', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1b');
    cy.get('.primary').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(628, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(589, 2); });
  });

  it('working area of beambox pro', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1p');
    cy.get('.primary').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(672, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(420, 2); });
  });

  it('check default and adjust setting with working area of beamo', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    cy.get('div.controls.disabled').should('not.exist');
    clickAndCheck('5', 'Enable');
    clickAndCheck('6', 'Enable');
    clickAndCheck('7', 'Enable');
    clickAndCheck('8', 'Enable');
  });

  it('check default and adjust setting with working area of beambox', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1b');
    cy.get('div.controls.disabled').should('have.length', '3');
    clickAndCheck('5', 'Enable');
    clickAndCheck('6', 'Disable');
    clickAndCheck('7', 'Disable');
    clickAndCheck('8', 'Disable');
  });

  it('check default and adjust setting with working area of beambox pro', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1p');
    cy.get('div.controls.disabled').should('have.length', '3');
    clickAndCheck('5', 'Enable');
    clickAndCheck('6', 'Disable');
    clickAndCheck('7', 'Disable');
    clickAndCheck('8', 'Disable');
  });

  it('check rotary with different working area', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    clickAndCheck('5', 'Enable');
    checkRotary();
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1b');
    checkRotary();
    openDocument();
    cy.get('#workarea_dropdown').select('fbb1p');
    checkRotary();
  });

  it('check open bottom', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    clickAndCheck('6', 'Enable');
    cy.get('.primary').click();
    cy.get('#open-bottom-boundary').children().should('have.attr', 'display', 'block');
  });

  it('check autofocus', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    clickAndCheck('7', 'Enable');
    cy.get('.primary').click();
    cy.get('.addon-block > .label').should('exist').should('have.text', 'Add-on');
    cy.get('.addon-setting').should('exist').children().should('have.text', 'Focus Adjustment');
    cy.get('.panel > input').click();
    cy.get('.addon-setting > .without-drag').should('exist').children().first().should('have.text', 'Object Height');
    cy.get('#height').should('have.value', '3.00')
  });

  it('check diode laser', () => {
    openDocument();
    cy.get('#workarea_dropdown').select('fbm1');
    clickAndCheck('8', 'Enable');
    cy.get('.primary').click();
    cy.get('#diode-boundary').children().should('have.attr', 'd', 'M3000,2100H0,V2000H2500V0H3000V2100');
    cy.get('.addon-block > .label').should('exist').should('have.text', 'Add-on');
    cy.get('.addon-setting').should('exist').children().should('have.text', 'Diode Laser');
    cy.get('.panel > input').click();
    cy.get('#diode-boundary').children().should('have.attr', 'd', 'M0,0H3000V70H700V2100H0V0');
  });

  function openDocument() {
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu--open > :nth-child(2) > :nth-child(1)').click();
    cy.get(':nth-child(22)').click();
  };

  function clickAndCheck(sequence, status) {
    cy.get(`:nth-child(${sequence}) > .control > .switch-container > .onoffswitch > .onoffswitch-label > .onoffswitch-switch`).click();
    cy.get(`:nth-child(${sequence}) > .control > .switch-container > .switch-status`).should('have.text', status);
  };

  function checkRotary() {
    cy.get('.primary').click();
    cy.get('#rotaryLine').should('have.attr', 'display', 'visible');
    cy.get('#transparentRotaryLine').should('have.attr', 'display', 'visible');
  };
});
