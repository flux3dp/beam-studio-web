describe('machine selection and svg dimensions test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const svgDimensions = [
    {
      module: '10W Diode LaserCustom',
      x: 0,
      y: 0
    },
    {
      module: '20W Diode LaserCustom',
      x: 0,
      y: 0
    },
    {
      module: '2W Infrared LaserCustom',
      x: 0,
      y: 0
    },
    {
      module: 'PrintingCustomFM',
      x: 0,
      y: 0
    }
  ];

  // 20W Diode LaserCustom
  it('should change SVG dimensions when selecting different machines', () => {
    // Click on the top bar menu container
    cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();

    // Click on the "Edit" submenu
    cy.contains('li.rc-menu__submenu', 'Edit').click();

    // Click on "Document Settings"
    cy.contains('li[role="menuitem"]', 'Document Settings').click();

    // Select the machine from the dropdown
    cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
    cy.contains('.ant-select-item-option-content', 'Ador').click();

    // Click the confirm button
    cy.contains('span', 'Save')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    let module;
    // get the title
    // <span class="ant-select-selection-item" title="20W Diode Laser">20W Diode Laser</span>
    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        // return {
        //   x: parseFloat($el.attr('x')),
        //   y: parseFloat($el.attr('y'))
        // };
        for (const mod in svgDimensions) {
          if (svgDimensions[mod].module === module) {
            svgDimensions[mod].x = parseFloat($el.attr('x'));
            svgDimensions[mod].y = parseFloat($el.attr('y'));
          }
        }
        return {
          x: parseFloat($el.attr('x')),
          y: parseFloat($el.attr('y'))
        };
      })
      .then((coordinates) => {
        cy.log(`SVG Text X attribute: ${coordinates.x}, Y attribute: ${coordinates.y}`);
      });

    cy.contains('span.ant-select-selection-item', '20W Diode Laser')
      .click(); // Perform the click action

    // Ensure the element is visible before clicking
    cy.contains('div.ant-select-item-option-content', '10W Diode Laser')
      .should('be.visible') // Assert that the element is visible
      .click(); // Perform the click action

    // get the title
    // <span class="ant-select-selection-item" title="20W Diode Laser">20W Diode Laser</span>
    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        // return {
        //   x: parseFloat($el.attr('x')),
        //   y: parseFloat($el.attr('y'))
        // };
        for (const mod in svgDimensions) {
          if (svgDimensions[mod].module === module) {
            svgDimensions[mod].x = parseFloat($el.attr('x'));
            svgDimensions[mod].y = parseFloat($el.attr('y'));
          }
        }
        return {
          x: parseFloat($el.attr('x')),
          y: parseFloat($el.attr('y'))
        };
      })
      .then((coordinates) => {
        cy.log(`SVG Text X attribute: ${coordinates.x}, Y attribute: ${coordinates.y}`);
      });

    cy.contains('span.ant-select-selection-item', '10W Diode Laser')
      .click(); // Perform the click action

    // Ensure the element is visible before clicking
    cy.contains('div.ant-select-item-option-content', '2W Infrared Laser')
      .should('be.visible') // Assert that the element is visible
      .click(); // Perform the click action

    // get the title
    // <span class="ant-select-selection-item" title="20W Diode Laser">20W Diode Laser</span>
    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        // return {
        //   x: parseFloat($el.attr('x')),
        //   y: parseFloat($el.attr('y'))
        // };
        for (let mod in svgDimensions) {
          if (svgDimensions[mod].module === module) {
            svgDimensions[mod].x = parseFloat($el.attr('x'));
            svgDimensions[mod].y = parseFloat($el.attr('y'));
          }
        }
        return {
          x: parseFloat($el.attr('x')),
          y: parseFloat($el.attr('y'))
        }
      })
      .then((coordinates) => {
        cy.log(`SVG Text X attribute: ${coordinates.x}, Y attribute: ${coordinates.y}`);
      });


    cy.contains('span.ant-select-selection-item', '2W Infrared Laser')
      .click(); // Perform the click action

    // Ensure the element is visible before clicking
    cy.contains('div.ant-select-item-option-content', 'Printing')
      .should('be.visible') // Assert that the element is visible
      .click(); // Perform the click action

    // Ensure the button is visible before clicking
    cy.contains('button.ant-btn', 'Confirm')
      .should('be.visible')
      .click({ force: true });

    // get the title
    // <span class="ant-select-selection-item" title="20W Diode Laser">20W Diode Laser</span>
    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        for (let mod in svgDimensions) {
          if (svgDimensions[mod].module === module) {
            svgDimensions[mod].x = parseFloat($el.attr('x'));
            svgDimensions[mod].y = parseFloat($el.attr('y'));
          }
        }
        return {
          x: parseFloat($el.attr('x')),
          y: parseFloat($el.attr('y'))
        }
      })
      .then((coordinates) => {
        cy.log(`SVG Text X attribute: ${coordinates.x}, Y attribute: ${coordinates.y}`);
      });

    cy.wrap(svgDimensions).then((dims) => {
      let x = [];
      let y = [];

      for (let dim in dims) {
        x.push(dims[dim].x);
        y.push(dims[dim].y);
      }

      let set1 = new Set(x);
      let set2 = new Set(y);

      expect(set1.size).to.equal(x.length);
      expect(set2.size).to.equal(y.length);
    });
  });
});