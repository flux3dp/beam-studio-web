import { md5 } from '../../support/utils';

function checkExample(exampleName: string, res: string | undefined) {
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains('File').click();
  cy.get('.rc-menu__submenu').contains('Examples').click();
  cy.get('.rc-menu__item').contains(exampleName).click();

  if (res) {
    cy.contains('Untitled*').should('exist');
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
    adorRes: 'f3c150b26bd1bf9eb32a3f835faf7ab7',
  },
  {
    label: 'Example of Ador Printing - Single Color',
    adorRes: 'a81fb260b245bbf47ee9d4d747704dd4',
  },
  {
    label: 'Example of Ador Printing - Full Color',
    adorRes: '4ef75140e86526fb32095d76f3f2df54',
  },
  {
    label: 'Example of beamo',
    adorRes: 'bc3f0fed38f408ae26316944269c76ea',
    beamseriesRes: '17d386fdbc8e27f34447fa4c175b8fb8',
  },
  {
    label: 'Example of beambox',
    adorRes: '72ffd96e4b207003140e9a9c91e7a6f0',
    beamseriesRes: 'b2aa822c005d161d05b386b3866a0c2b',
  },
  {
    label: 'Material Engraving Test',
    adorRes: '4b4a0beb99dd27da7da3fc0709d567f0',
    beamseriesRes: '3e05a5aa480e0e070ea8e62f2ef2730e',
  },
  {
    label: 'Material Engraving Test - Classic',
    adorRes: '690a99a330b4f4944a4086ded5c832ad',
    beamseriesRes: '3e9e5c89bef49a6db995bff71cab9c98',
  },
  {
    label: 'Material Cutting Test',
    adorRes: 'd19a8397ca414b456bda82aa6dcdeb56',
    beamseriesRes: '47d84072e129d41229f761f05206c554',
  },
  {
    label: 'Material Cutting Test - Simple',
    adorRes: '78e76a8b821d13c235deba113efe228b',
    beamseriesRes: 'd4aaf0836cc4fd257029e2795c8e7173',
  },
  {
    label: 'Material Line Test',
    beamseriesRes: 'd4e1895e948aa112416c3b83b8f1613f',
  },
  {
    label: 'Material Printing Test',
    adorRes: '5e911e3af7ad0cbd145ba846337e6726',
  },
  {
    label: 'Acrylic Focus Probe - 3mm',
    beamseriesRes: '4315dc3e7775ce39c78a54a9b41af118',
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
