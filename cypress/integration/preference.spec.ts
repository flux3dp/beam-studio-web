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
    cy.get('#set-default-font-family').find('option:selected').should('have.value', 'Noto Sans TC');
    cy.get('#set-default-font-style').find('option:selected').should('have.value', 'NotoSansTC-Regular');
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
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(672, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(470, 2); });

    go2Preference();
    cy.get('#set-default-model').select('fbb1b');
    cy.get('div.btn-done').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(628, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(589, 2); });

    go2Preference();
    cy.get('#set-default-model').select('fbb1p');
    cy.get('div.btn-done').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(672, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(420, 2); });

    go2Preference();
    cy.get('#set-default-model').select('fbb2b');
    cy.get('div.btn-done').click();
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('width')).to.be.closeTo(672, 2); });
    cy.get('#canvasBackground').should(($value) => { expect($value.attr('height')).to.be.closeTo(377, 2); });
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
    cy.wait(1000);
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
    cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click();
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

  function md5(inputString) {
    var hc = "0123456789abcdef";
    function rh(n) { var j, s = ""; for (j = 0; j <= 3; j++) s += hc.charAt((n >> (j * 8 + 4)) & 0x0F) + hc.charAt((n >> (j * 8)) & 0x0F); return s; }
    function ad(x, y) { var l = (x & 0xFFFF) + (y & 0xFFFF); var m = (x >> 16) + (y >> 16) + (l >> 16); return (m << 16) | (l & 0xFFFF); }
    function rl(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cm(q, a, b, x, s, t) { return ad(rl(ad(ad(a, q), ad(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cm((b & c) | ((~b) & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cm((b & d) | (c & (~d)), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cm(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cm(c ^ (b | (~d)), a, b, x, s, t); }
    function sb(x) {
      var i; var nblk = ((x.length + 8) >> 6) + 1; var blks = new Array(nblk * 16); for (i = 0; i < nblk * 16; i++) blks[i] = 0;
      for (i = 0; i < x.length; i++) blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
      blks[i >> 2] |= 0x80 << ((i % 4) * 8); blks[nblk * 16 - 2] = x.length * 8; return blks;
    }
    var i, x = sb(inputString), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
    for (i = 0; i < x.length; i += 16) {
      olda = a; oldb = b; oldc = c; oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330); a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983); a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329); a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302); a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501); a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734); a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640); a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189); a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055); a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799); a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551); a = ad(a, olda); b = ad(b, oldb); c = ad(c, oldc); d = ad(d, oldd);
    };
    return rh(a) + rh(b) + rh(c) + rh(d);
  };
});
