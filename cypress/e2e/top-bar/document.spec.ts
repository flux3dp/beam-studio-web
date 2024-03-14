describe('manipulate document setting', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const openDocument = () => {
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu--open > :nth-child(2) > :nth-child(1)').click();
    cy.contains('Document Settings').click();
  };

  const selectModal = (modal :string) => {
    cy.get('[class^="ant-select-selection-item"]').eq(0).click();
    cy.get('[class^="ant-select-item-option-content"]').contains(modal).click();
  };

  it('resolution', () => {
    openDocument();
    cy.wait(300);
    cy.get('input.ant-input').should('have.value', 'Medium (250 DPI)');
    cy.get('.ant-modal-body div.ant-slider-handle').click().realSwipe('toLeft', { length: 50 });
    cy.get('input.ant-input').should('have.value', 'Low (100 DPI)');
    cy.get('.ant-modal-body div.ant-slider-handle').click().realSwipe('toRight', { length: 150 });
    cy.get('input.ant-input').should('have.value', 'Ultra High (1000 DPI)');
  });

  it('working area of beamo', () => {
    openDocument();
    selectModal('beamo');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#svgroot').should('have.attr', 'x', '3000');
    cy.get('#svgroot').should('have.attr', 'y', '2100');
  });

  it('working area of beambox', () => {
    openDocument();
    selectModal('Beambox');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#svgroot').should('have.attr', 'x', '4000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');
  });

  it('working area of beambox pro', () => {
    openDocument();
    selectModal('Beambox Pro');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#svgroot').should('have.attr', 'x', '6000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');
  });

  it('working area of HEXA', () => {
    openDocument();
    selectModal('HEXA');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#svgroot').should('have.attr', 'x', '7400');
    cy.get('#svgroot').should('have.attr', 'y', '4100');
  });

  it('working area of Ador', () => {
    openDocument();
    selectModal('Ador');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#svgroot').should('have.attr', 'x', '4300');
    cy.get('#svgroot').should('have.attr', 'y', '3200');
  });

  const clickAndCheck = (id: string, status: boolean) => {
    cy.get(`button#${id}`).should('have.attr', 'aria-checked', 'false');
    cy.get(`button#${id}`).click();
    cy.get(`button#${id}`).should('have.attr', 'aria-checked', String(status));
  };

  const checkDisabled = (id: string) => {
    cy.get(`button#${id}`).should('have.attr', 'aria-checked', 'false');
    cy.get(`button#${id}`).should('have.attr', 'disabled');
  };

  it('check default and adjust setting with working area of beamo', () => {
    openDocument();
    selectModal('beamo');
    cy.get('div.controls.disabled').should('not.exist');
    clickAndCheck('rotary_mode', true);
    clickAndCheck('borderless_mode', true);
    clickAndCheck('autofocus-module', true);
    clickAndCheck('diode_module', true);
  });

  it('check default and adjust setting with working area of beambox', () => {
    openDocument();
    selectModal('Beambox');
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of beambox pro', () => {
    openDocument();
    selectModal('Beambox Pro');
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of HEXA', () => {
    openDocument();
    selectModal('HEXA');
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of Ador', () => {
    openDocument();
    selectModal('Ador');
    checkDisabled('rotary_mode');
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  const checkRotary = () => {
    cy.get('#rotaryLine').should('have.attr', 'display', 'visible');
    cy.get('#transparentRotaryLine').should('have.attr', 'display', 'visible');
  };

  it('check rotary with different working area', () => {
    openDocument();
    selectModal('beamo');
    clickAndCheck('rotary_mode', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    checkRotary();
    openDocument();
    selectModal('Beambox');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    checkRotary();
    openDocument();
    selectModal('Beambox Pro');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    checkRotary();
    openDocument();
    selectModal('HEXA');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    checkRotary();
    openDocument();
    selectModal('Ador');
    checkDisabled('rotary_mode');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#rotaryLine').should('have.attr', 'display', 'none');
    cy.get('#transparentRotaryLine').should('have.attr', 'display', 'none');
  });

  it('check open bottom', () => {
    openDocument();
    selectModal('beamo');
    clickAndCheck('borderless_mode', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#open-bottom-boundary > rect').should('have.attr', 'display', 'block');
  });

  it('check autofocus', () => {
    openDocument();
    selectModal('beamo');
    clickAndCheck('autofocus-module', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.findAllByText('Add-on').should('exist');
    cy.findAllByText('Focus Adjustment').should('exist');
    cy.findAllByText('Focus Adjustment').next().should('have.attr', 'type', 'checkbox').click();
    cy.findAllByText('Object Height').should('exist');
    cy.get('#height').should('have.value', '3.00');
  });

  it('check diode laser', () => {
    openDocument();
    selectModal('beamo');
    clickAndCheck('diode_module', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#diode-boundary').children().should('have.attr', 'd', 'M3000,2100H0,V2000H2500V0H3000V2100');
    cy.findAllByText('Add-on').should('exist');
    cy.findAllByText('Diode Laser').should('exist');
    cy.findAllByText('Diode Laser').next().should('have.attr', 'type', 'checkbox').click();
    cy.get('#diode-boundary').children().should('have.attr', 'd', 'M0,0H3000V70H700V2100H0V0');
  });
});
