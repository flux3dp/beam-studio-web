import { md5 } from '../../support/utils';

function checkExample(exampleName: string, res: string | undefined) {
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains('File').click();
  cy.get('.rc-menu__submenu').contains('Examples').click();
  cy.get('.rc-menu__item').contains(exampleName).click();

  if (res) {
    cy.findByTestId('Layer 1', { timeout: 10000 }).should('not.exist');
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
    adorRes: '21094e29e4aa055e51f2579e0ddcdcc9',
  },
  {
    label: 'Example of Ador Printing - Single Color',
    adorRes: '1f6a7c0a62535d5f7adbbd96f8084f19',
  },
  {
    label: 'Example of Ador Printing - Full Color',
    adorRes: 'f5fae608f9a4e41d205bdb77edad7d55',
  },
  {
    label: 'Example of beamo',
    adorRes: 'bc3f0fed38f408ae26316944269c76ea',
    beamseriesRes: '17d386fdbc8e27f34447fa4c175b8fb8',
  },
  {
    label: 'Example of beambox',
    adorRes: 'ea5a3e9f7dfbf480369d19fb79a85d94',
    beamseriesRes: '803189fb875a8ee7bdcec110acf407ec',
  },
  {
    label: 'Material Engraving Test',
    adorRes: '22f173149936c6013852f36b4c8c7d2c',
    beamseriesRes: '000023114baaf69be16cc7d3a5a1ffa8',
  },
  {
    label: 'Material Engraving Test - Classic',
    adorRes: 'c8106ce4d8aa62f980bbfc2f67ed218e',
    beamseriesRes: '3e9e5c89bef49a6db995bff71cab9c98',
  },
  {
    label: 'Material Cutting Test',
    adorRes: 'e3282d392ba4b4117d826bc968ce228a',
    beamseriesRes: 'b62963dfec2c59cc8510b87b0a66e0c6',
  },
  {
    label: 'Material Cutting Test - Simple',
    adorRes: 'cb190e98c4a193db5773daebf6a66f4b',
    beamseriesRes: '33377b55bedf39cbc59fa0fe95b8882b',
  },
  {
    label: 'Material Line Test',
    beamseriesRes: 'f6dde5457c57f0e9112d769db9413460',
  },
  {
    label: 'Material Printing Test',
    adorRes: '05e3c6a61f49072007e8b9990db6fd86',
  },
  {
    label: 'Acrylic Focus Probe - 3mm',
    beamseriesRes: '52d222a0a8ccb01c5919d6a4bd86948f',
  },
];

describe('example', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  exampleList.forEach((example) => {
    it(`import ${example.label} with ador workarea`, () => {
      cy.changeWorkarea('Ador');
      checkExample(example.label, example.adorRes);
    });

    it(`import ${example.label} with beamseries workarea`, () => {
      checkExample(example.label, example.beamseriesRes);
    });
  });
});
