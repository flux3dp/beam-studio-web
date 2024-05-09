import { md5 } from '../../support/utils';

function checkExample(exampleName: string, res: string | undefined) {
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains('File').click();
  cy.get('.rc-menu__submenu').contains('Examples').click();
  cy.get('.rc-menu__item').contains(exampleName).click();

  if (res) {
    cy.get('#svgcontent')
      .invoke('prop', 'outerHTML')
      .then((html) => expect(md5(html)).equal(res));
  } else {
    cy.get('.ant-modal-content')
      .contains('The selected example file is not supported by current workarea.')
      .should('exist');
  }
}

const exampleList = [
  {
    label: 'Example of Ador Laser',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
  },
  {
    label: 'Example of Ador Printing - Single Color',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
  },
  {
    label: 'Example of Ador Printing - Full Color',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
  },
  {
    label: 'Example of beamo',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Example of beambox',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Engraving Test',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Engraving Test - Classic',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Cutting Test',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Cutting Test - Simple',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Line Test',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
  {
    label: 'Material Printing Test',
    adorRes: '18850d5792e9ae861b47a40ce5b412a7',
  },
  {
    label: 'Acrylic Focus Probe - 3mm',
    beamseriesRes: '92aa987b1188bf082911e23cbaabb51b',
  },
];

describe('example', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  exampleList.forEach((example) => {
    it(`import ${example.label} with ador workarea`, () => {
      cy.changeWorkarea('Ador');
      checkExample(example.label, example.adorRes, true);
    });

    it(`import ${example.label} with beamseries workarea`, () => {
      checkExample(example.label, example.beamseriesRes);
    });
  });
});
