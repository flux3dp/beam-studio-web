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
    adorRes: 'b2638140ef30438b985b3acb4b582d21',
    beamseriesRes: '6552958c795c15e83494cd233155662b',
  },
  {
    label: 'Material Engraving Test',
    adorRes: '22f173149936c6013852f36b4c8c7d2c',
    beamseriesRes: 'f2e3b31af0acc0854e3b63e2f163a58d',
  },
  {
    label: 'Material Engraving Test - Classic',
    adorRes: 'c8106ce4d8aa62f980bbfc2f67ed218e',
    beamseriesRes: '329869c034836d173134be01da0f0378',
  },
  {
    label: 'Material Cutting Test',
    adorRes: 'e3282d392ba4b4117d826bc968ce228a',
    beamseriesRes: 'cb02eeff1b1484323609cd0fc753e902',
  },
  {
    label: 'Material Cutting Test - Simple',
    adorRes: 'cb190e98c4a193db5773daebf6a66f4b',
    beamseriesRes: 'e8397fe194e20d959fb2d6ed7a60b48c',
  },
  {
    label: 'Material Line Test',
    beamseriesRes: '68a995263933bcdc0aff470ae5449e68',
  },
  {
    label: 'Material Printing Test',
    adorRes: '05e3c6a61f49072007e8b9990db6fd86',
  },
  {
    label: 'Acrylic Focus Probe - 3mm',
    beamseriesRes: '056006eaa0484709b5599a7f7e0118c8',
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
