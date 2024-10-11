describe('machine selection and svg dimensions test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('should change SVG dimensions when selecting different machines', () => {
    const machines = ['beamo', 'Beambox', 'HEXA'];
    const svgDimensions = {};

    // Iterate through each machine
    machines.forEach((machine) => {
      cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();

      cy.contains('li.rc-menu__submenu', 'Edit').click();

      cy.contains('li[role="menuitem"]', 'Document Settings').click();

      cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
      cy.contains('.ant-select-item-option-content', machine).click();

      cy.contains('span', 'Save')
        .should('be.visible')
        .and('not.be.disabled')
        .click({ force: true });

      cy.get('#svgroot').then(($svg) => {
        svgDimensions[machine] = {
          y: parseFloat($svg.attr('y'))
        };
      });

      cy.wrap(svgDimensions).then((dims) => {
        const y = [];

        Object.keys(dims).forEach((dim) => {
          cy.log(`dims[${dim}]: ${dims[dim].y}`);
          y.push(dims[dim].y);
        });

        const set1 = new Set(y);
        expect(set1.size).to.equal(y.length);
      });
    });
  });
});
