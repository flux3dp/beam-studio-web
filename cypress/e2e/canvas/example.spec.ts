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
    beamseriesRes: 'd4e9154a144a9a742c016f68e8fc879f',
  },
  {
    label: 'Example of beambox',
    adorRes: 'b2638140ef30438b985b3acb4b582d21',
    beamseriesRes: '1e4436aa12db8fb12c9c17d94485fe4f',
  },
  {
    label: 'Material Engraving Test',
    adorRes: '22f173149936c6013852f36b4c8c7d2c',
    beamseriesRes: 'f123c86896564f55eb0a863093df2804',
  },
  {
    label: 'Material Engraving Test - Classic',
    adorRes: '3b79e4ed6a970d48d7c71e29672acc64',
    beamseriesRes: '329869c034836d173134be01da0f0378',
  },
  {
    label: 'Material Cutting Test',
    adorRes: 'b4a0f15fe65965e3a45ad68a335129f5',
    beamseriesRes: 'cb02eeff1b1484323609cd0fc753e902',
  },
  {
    label: 'Material Cutting Test - Simple',
    adorRes: 'cb190e98c4a193db5773daebf6a66f4b',
    beamseriesRes: '901273c1ef562f00cb16cf8e1a457c1f',
  },
  {
    label: 'Material Line Test',
    beamseriesRes: '335f2040e868be7883f0390a5aff7a0c',
  },
  {
    label: 'Material Printing Test',
    adorRes: '05e3c6a61f49072007e8b9990db6fd86',
  },
  {
    label: 'Acrylic Focus Probe - 3mm',
    beamseriesRes: 'd5444e1ec2065635296e20af38f71eb7',
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
