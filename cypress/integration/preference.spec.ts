import { md5 } from '../support/utils';

describe('update the preference', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('check default value with preference page', () => {
    go2Preference();
    cy.get('#select-lang').find('option:selected').should('have.text', 'English');
    cy.get('#ip-input').should('have.attr', 'value', '192.168.1.1');
    cy.get('#set-guessing-poke').find('option:selected').should('have.value', '1');
    cy.get('#set-auto-connect').find('option:selected').should('have.value', '1');
    cy.get('#preview-input').should('have.attr', 'value', '100');
    cy.get('#diode-preview-input').should('have.attr', 'value', '60');
    cy.get('#set-default-units').find('option:selected').should('have.value', 'mm');
    if (window.navigator.language === 'zh-TW') {
      cy.get('#set-default-font-family').find('option:selected').should('have.value', 'Noto Sans TC');
      cy.get('#set-default-font-style').find('option:selected').should('have.value', 'NotoSansTC-Regular');
    } else {
      cy.get('#set-default-font-family').find('option:selected').should('have.value', 'Noto Sans');
      cy.get('#set-default-font-style').find('option:selected').should('have.value', 'NotoSans-Regular');
    }
    cy.get('#set-default-model').find('option:selected').should('have.value', 'fbb1b');
    cy.get('#set-guide').find('option:selected').should('have.value', 'FALSE');
    cy.get('#guide-x-input').should('have.attr', 'value', '0.00');
    cy.get('#guide-y-input').should('have.attr', 'value', '0.00');
    cy.get('#set-bitmap-quality').find('option:selected').should('have.value', 'TRUE');
    cy.get('#set-anti-aliasing').find('option:selected').should('have.value', 'TRUE');
    cy.get('#set-continuous-drawingg').find('option:selected').should('have.value', 'FALSE');
    cy.get('#set-simplify-clipper-path').find('option:selected').should('have.value', 'FALSE');
    cy.get('#set-fast-gradient').find('option:selected').should('have.value', 'TRUE');
    cy.get('#set-vector-speed-contraint').find('option:selected').should('have.value', 'TRUE');
    cy.get('#loop-input').should('have.attr', 'value', '0.00');
    cy.get('#set-mask').find('option:selected').should('have.value', 'FALSE');
    cy.get('#font-substitue').find('option:selected').should('have.value', 'TRUE');
    cy.get('#default-open-bottom').find('option:selected').should('have.value', 'FALSE');
    cy.get('#default-autofocus').find('option:selected').should('have.value', 'FALSE');
    cy.get('#default-diode').find('option:selected').should('have.value', 'FALSE');
    cy.get('#diode-offset-x-input').should('have.attr', 'value', '70.00');
    cy.get('#diode-offset-y-input').should('have.attr', 'value', '7.00');
    cy.get('#set-sentry').find('option:selected').should('have.value', '0');
  });

  it('choose de and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('de', 'Sprache', 'Ohne Titel');
  });

  it('choose en and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('en', 'Language', 'Untitled');
  });

  it('choose es and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('es', 'Idioma', 'Sin título');
  });

  it('choose ja and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('ja', '言語', '無題');
  });

  it('choose zh-tw and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('zh-tw', '語言', '無標題');
  });

  it('choose zh-cn and see if the translation of the preference page gets changed', () => {
    go2Preference();
    checkLang('zh-cn', '语言', '无标题');
  });

  it('change units and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-default-units').select('inches');
    cy.get('#preview-input').should('have.attr', 'value', '3.94');
    cy.get('#diode-preview-input').should('have.attr', 'value', '2.36');
    cy.contains('in/s').should('exist');
    cy.contains('in').should('exist');
    cy.get('div.btn-done').click();
    cy.get('#speed').should('have.attr', 'value', '0.79');
    cy.contains('in/s').should('exist');
  });

  it('change font and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-default-font-family').select('Airstream NF');
    cy.get('div.btn-done').click();
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('Bring Any Design to Life');
    cy.get('.react-select__value-container').should('have.text', 'Airstream NF');
  });

  it('change Font Style and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-default-font-style').select('Bold');
    cy.get('div.btn-done').click();
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('Bring Any Design to Life');
    cy.get('.select-container > select').find('option:selected').should('have.text', 'Bold');
  });

  it('change document setting and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-default-model').select('fbm1');
    cy.get('div.btn-done').click();
    cy.get('#svgroot').should('have.attr', 'x', '3000');
    cy.get('#svgroot').should('have.attr', 'y', '2100');

    go2Preference();
    cy.get('#set-default-model').select('fbb1b');
    cy.get('div.btn-done').click();
    cy.get('#svgroot').should('have.attr', 'x', '4000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');

    go2Preference();
    cy.get('#set-default-model').select('fbb1p');
    cy.get('div.btn-done').click();
    cy.get('#svgroot').should('have.attr', 'x', '6000');
    cy.get('#svgroot').should('have.attr', 'y', '3750');
  });

  it('change guide setting and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-guide').select('On');
    cy.get('#guide-x-input').clear({ force: true }).type('10').blur();
    cy.get('#guide-y-input').clear({ force: true }).type('10').blur();
    cy.get('div.btn-done').click();
    cy.get('#horizontal_guide').should('exist').should('have.attr', 'x1', '0').should('have.attr', 'y1', '100');
    cy.get('#vertical_guide').should('exist').should('have.attr', 'x1', '100').should('have.attr', 'y1', '0');
  });

  it('change bitmap preview quality setting and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-bitmap-quality').select('Normal');
    cy.get('div.btn-done').click();
    cy.uploadFile('flux.png', 'image/png');
    cy.wait(3000);
    cy.get('#svg_1').invoke('attr', 'xlink:href').then((href) => {
      expect(md5(href)).equal('89c7aa6cb93a4fd9f6e79c9da0e5ade2');
    });
  });

  it('change anti aliasing setting and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-anti-aliasing').select('On');
    cy.get('div.btn-done').click();
    drawingEllipse();
    cy.get('svg#svgcontent').should(($shapeRendering) => {
      let str = $shapeRendering.attr('style');
      expect(str.substring(50)).equal('');
    });
  });

  it('change continuous drawing setting and see if home page gets changed ', () => {
    go2Preference();
    cy.get('#set-continuous-drawingg').select('On');
    cy.get('div.btn-done').click();
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#left-Rectangle').should('have.class', 'tool-btn active');
    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_2').should('exist');
  });

  it('click reset button and see if home page gets changed ', () => {
    go2Preference();
    cy.get('b').click();
    cy.url().should('eq', 'http://localhost:8080/#/');
    cy.get('h1.headline').should('exist');
  });

  it('remove speed limit and see if home page gets changed ', () => {
    drawingEllipse();
    cy.get('.layers > .tab-icon').click();
    cy.get('#speed_value').realSwipe('toLeft');
    cy.get('.warning-icon').should('exist');
    cy.get('.warning-text').should('have.text', 'The cutting speed of vector path objects will be constrained to 20 mm/s.You can remove this limit at Preferences Settings.');
    go2Preference();
    cy.get(`[data-test-key="don't save"]`).click();
    cy.get('#set-vector-speed-contraint').select('Off');
    cy.get('div.btn-done').click();
    drawingEllipse();
    cy.get('.layers > .tab-icon').click();
    cy.get('#speed_value').realSwipe('toLeft');
    cy.get('.warning-icon').should('not.exist');
    cy.get('.warning-text').should('not.exist');
  });

  function go2Preference() {
    cy.get('div.top-bar-menu-container').click();
    cy.get('li.rc-menu__submenu').should('have.length', 5);
    cy.get('li.rc-menu__submenu:nth-child(1)').trigger('mouseover');
    cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click({ force: true });
  };

  function checkLang(lang, text, title) {
    cy.get('select#select-lang').select(lang);
    cy.get('.form > :nth-child(2) > .span3 > .font2').should('have.text', text);
    cy.get('div.btn-done').click();
    cy.wait(1000);
    cy.get('.file-title').should('have.text', title);
  };

  function drawingEllipse() {
    cy.get('div#left-Ellipse>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  };
});
