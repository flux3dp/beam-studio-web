describe('manipulate document setting', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const openDocument = () => {
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu--open > :nth-child(2) > :nth-child(1)').click();
    cy.contains('Document Settings').click();
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
    cy.changeWorkarea('beamo');
    cy.get('#svgroot').should('have.attr', 'x', '3000');
    cy.get('#svgroot').should('have.attr', 'y', '2100');
  });

  it('working area of beambox', () => {
    cy.changeWorkarea('Beambox');
    cy.get('#svgroot').should('have.attr', 'x', '4000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');
  });

  it('working area of beambox pro', () => {
    cy.changeWorkarea('Beambox Pro');
    cy.get('#svgroot').should('have.attr', 'x', '6000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');
  });

  it('working area of HEXA', () => {
    cy.changeWorkarea('HEXA');
    cy.get('#svgroot').should('have.attr', 'x', '7400');
    cy.get('#svgroot').should('have.attr', 'y', '4100');
  });

  it('working area of Ador', () => {
    cy.changeWorkarea('Ador');
    cy.get('#svgroot').should('have.attr', 'x', '4300');
    cy.get('#svgroot').should('have.attr', 'y', '3200');
  });

  it('change Ador printing layer to Beamseries', () => {
    cy.changeWorkarea('Ador');
    cy.get('#svgroot').should('have.attr', 'x', '4300');
    cy.get('#svgroot').should('have.attr', 'y', '3200');
    cy.get('.ant-select-selector').click();
    cy.get('.ant-select-item-option-content').contains('Printing').click();
    cy.get('button.ant-btn').contains('Confirm').should('exist').click({ force: true });
    cy.get('#svgroot').should('have.attr', 'x', '4300');
    cy.get('#svgroot').should('have.attr', 'y', '3200');
    cy.changeWorkarea('beamo');
    cy.get('.ant-modal-content').should('exist');
    cy.get('[class*="src-web-app-views-dialogs-Alert-module__message-container"]').should(
      'have.text',
      'Do you want to convert the Printing Layers into Laser Layers?'
    );
    cy.get('button.ant-btn').contains('Confirm').should('exist').click({ force: true });
    cy.get('#svgroot').should('have.attr', 'x', '3000');
    cy.get('#svgroot').should('have.attr', 'y', '2100');
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
    cy.changeWorkarea('beamo', false);
    cy.get('div.controls.disabled').should('not.exist');
    clickAndCheck('rotary_mode', true);
    clickAndCheck('borderless_mode', true);
    clickAndCheck('autofocus-module', true);
    clickAndCheck('diode_module', true);
  });

  it('check default and adjust setting with working area of beambox', () => {
    cy.changeWorkarea('Beambox', false);
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of beambox pro', () => {
    cy.changeWorkarea('Beambox Pro', false);
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of HEXA', () => {
    cy.changeWorkarea('HEXA', false);
    clickAndCheck('rotary_mode', true);
    checkDisabled('borderless_mode');
    checkDisabled('autofocus-module');
    checkDisabled('diode_module');
  });

  it('check default and adjust setting with working area of Ador', () => {
    cy.changeWorkarea('Ador', false);
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
    cy.changeWorkarea('beamo', false);
    clickAndCheck('rotary_mode', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    checkRotary();
    cy.changeWorkarea('Beambox');
    checkRotary();
    cy.changeWorkarea('Beambox Pro');
    checkRotary();
    cy.changeWorkarea('HEXA');
    checkRotary();
    cy.changeWorkarea('Ador', false);
    checkDisabled('rotary_mode');
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#rotaryLine').should('have.attr', 'display', 'none');
    cy.get('#transparentRotaryLine').should('have.attr', 'display', 'none');
  });

  it('check open bottom', () => {
    cy.changeWorkarea('beamo', false);
    clickAndCheck('borderless_mode', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#open-bottom-boundary > rect').should('have.attr', 'display', 'block');
  });

  it('check autofocus', () => {
    cy.changeWorkarea('beamo', false);
    clickAndCheck('autofocus-module', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.findAllByText('Add-on').should('exist');
    cy.findAllByText('Focus Adjustment').should('exist');
    cy.findAllByText('Focus Adjustment').next().should('have.attr', 'type', 'checkbox').click();
    cy.findAllByText('Object Height').should('exist');
    cy.get('#height').should('have.value', '3.00');
  });

  it('check diode laser', () => {
    cy.changeWorkarea('beamo', false);
    clickAndCheck('diode_module', true);
    cy.get('button[class^="ant-btn"]').contains('Save').click();
    cy.get('#diode-boundary')
      .children()
      .should('have.attr', 'd', 'M3000,2100H0,V2000H2500V0H3000V2100');
    cy.findAllByText('Add-on').should('exist');
    cy.findAllByText('Diode Laser').should('exist');
    cy.findAllByText('Diode Laser').next().should('have.attr', 'type', 'checkbox').click();
    cy.get('#diode-boundary').children().should('have.attr', 'd', 'M0,0H3000V70H700V2100H0V0');
  });
});
