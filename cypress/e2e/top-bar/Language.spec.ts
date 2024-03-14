function go2Preference() {
  cy.get('div.top-bar-menu-container').click();
  cy.get('li.rc-menu__submenu').should('have.length', 5);
  cy.get('li.rc-menu__submenu:nth-child(1)').trigger('mouseover');
  cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click({ force: true });
}

function checkLang(lang, text, title) {
  cy.get('select#select-lang').select(lang);
  cy.get('.form > :nth-child(2) > .span3 > .font2').should('have.text', text);
  cy.get('div.btn-done').click();
  cy.get('.file-title', {timeout:1000}).should('exist');
  cy.get('.file-title').should('have.text', title);
}

describe('update the preference', () => {
  const { baseUrl } = Cypress.config();
  beforeEach(() => {
    cy.landingEditor();
  });

it('choose id and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('id', 'Bahasa', 'Tanpa Judul');
});

it('choose da and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('da', 'Sprog', 'Untitled');
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

it('choose fr and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('fr', 'Langue', 'Sans titre');
});

it('choose it and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('it', 'Lingua', 'Senza titolo');
});

it('choose ms and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('ms', 'Bahasa', 'Tanpa Tajuk');
});

it('choose nl and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('nl', 'Taal', 'Naamloos');
});

it('choose no and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('no', 'Språk', 'Uten tittel');
});

it('choose pt and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('pt', 'Idioma', 'Sem título');
});

it('choose pl and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('pl', 'Język', 'Bez nazwy');
});

it('choose se and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('se', 'Språk', 'Namnlös');
});

it('choose fi and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('fi', 'Kieli', 'Nimeämätön');
});

it('choose vi and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('vi', 'Ngôn ngữ', 'Chưa đặt tên');
});

it('choose el and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('el', 'Γλώσσα', 'Χωρίς τίτλο');
});

it('choose th and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('th', 'ภาษา', 'ไม่มีชื่อ');
});

it('choose kr and see if the translation of the preference page gets changed', () => {
  go2Preference();
  checkLang('kr', '언어', '언타이틀');
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

})
