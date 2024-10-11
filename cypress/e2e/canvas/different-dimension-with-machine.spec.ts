describe('machine selection and svg dimensions test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('should change SVG dimensions when selecting different machines', () => {  
    const machines = ['beamo', 'Beambox', 'HEXA'];
    const svgDimensions = {}; 

    // Iterate through each machine
    machines.forEach((machine) => {
      // Click on the top bar menu container
      cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();
  
      // Click on the "Edit" submenu
      cy.contains('li.rc-menu__submenu', 'Edit').click();
  
      // Click on "Document Settings"
      cy.contains('li[role="menuitem"]', 'Document Settings').click();


      // Select the machine from the dropdown

      cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
      cy.contains('.ant-select-item-option-content', machine).click();

      // Click the confirm button
      cy.contains('span', 'Save')
        .should('be.visible')
        .and('not.be.disabled')
        .click({ force: true });

      // Get and store the SVG dimensions
      cy.get('#svgroot').then(($svg) => {
        svgDimensions[machine] = {
          y: parseFloat($svg.attr('y'))
        };
      });

      // Log the svgDimensions object using cy.log
      cy.wrap(svgDimensions).then((dims) => {
        let y = [];
          
          for (let dim in dims) {
            cy.log(`dims[${dim}]: ${dims[dim].y}`);
            y.push(dims[dim].y);
          }

        let set1 = new Set(y);
        // set1 length = y length
        expect(set1.size).to.equal(y.length);
      });
    });
  });
});