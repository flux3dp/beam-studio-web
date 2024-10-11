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
    cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();

    cy.contains('li.rc-menu__submenu', 'Edit').click();

    cy.contains('li[role="menuitem"]', 'Document Settings').click();

    cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
    cy.contains('.ant-select-item-option-content', 'Ador').click();

    cy.contains('span', 'Save')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    let module;

    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        const matchingDim = svgDimensions.find((dim) => dim.module === module);
        if (matchingDim) {
          const x = Number($el.attr('x'));
          const y = Number($el.attr('y'));
          if (Number.isFinite(x) && Number.isFinite(y)) {
            Object.assign(matchingDim, { x, y });
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
      .click();

    // Ensure the element is visible before clicking
    cy.contains('div.ant-select-item-option-content', '10W Diode Laser')
      .should('be.visible')
      .click();

    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        const matchingDim = svgDimensions.find((dim) => dim.module === module);
        if (matchingDim) {
          const x = Number($el.attr('x'));
          const y = Number($el.attr('y'));
          if (Number.isFinite(x) && Number.isFinite(y)) {
            Object.assign(matchingDim, { x, y });
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
      .click();

    cy.contains('div.ant-select-item-option-content', '2W Infrared Laser')
      .should('be.visible')
      .click();

    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        for (const mod in svgDimensions) {
          if (Object.prototype.hasOwnProperty.call(svgDimensions, mod)) {
            const dim = svgDimensions[mod];
            if (dim.module === module) {
              dim.x = parseFloat($el.attr('x'));
              dim.y = parseFloat($el.attr('y'));
            }
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

    cy.contains('span.ant-select-selection-item', '2W Infrared Laser')
      .click();

    cy.contains('div.ant-select-item-option-content', 'Printing')
      .should('be.visible')
      .click();

    cy.contains('button.ant-btn', 'Confirm')
      .should('be.visible')
      .click({ force: true });

    cy.get('span.ant-select-selection-item').then(($title) => {
      cy.log($title.text());
      module = $title.text();
    });

    cy.get('#module-boundary text')
      .then(($el) => {
        for (const mod in svgDimensions) {
          if (Object.prototype.hasOwnProperty.call(svgDimensions, mod)) {
            const dim = svgDimensions[mod];
            if (dim.module === module) {
              dim.x = parseFloat($el.attr('x'));
              dim.y = parseFloat($el.attr('y'));
            }
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

    cy.wrap(svgDimensions).then((dims) => {
      const x = [];
      const y = [];

      Object.keys(dims).forEach((dim) => {
        const value = dims[dim];
        x.push(value.x);
        y.push(value.y);
      });

      const set1 = new Set(x);
      const set2 = new Set(y);

      expect(set1.size).to.equal(x.length);
      expect(set2.size).to.equal(y.length);
    });
  });
});
