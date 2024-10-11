describe(('dafault font'), () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('default font : noto serif', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-default-font-family').select('Noto Serif');

    cy.get('div.btn.btn-done').click();

    cy.get('div#left-Text').click();

    cy.get('svg#svgcontent').realClick({ x: 150, y: 150 });
    cy.wait(1000);
    cy.inputText('Noto Serif');

    cy.get('div#left-Cursor')
      .click({ force: true });

    cy.get('text#svg_1')
      .should('exist')
      .click({ force: true });

    cy.get('div.tab.objects[title="Text (O)"]')
      .click();

    cy.get('img[alt="Noto Serif"]')
      .should('exist');
  });

  it('default font : noto sans', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-default-font-family').select('Noto Sans');

    cy.get('div.btn.btn-done').click();

    cy.get('div#left-Text').click();

    cy.get('svg#svgcontent').realClick({ x: 150, y: 150 });
    cy.wait(1000);
    cy.inputText('Noto Sans');

    cy.get('div#left-Cursor')
      .click({ force: true });

    cy.get('text#svg_1')
      .should('exist')
      .click({ force: true });

    cy.get('div.tab.objects[title="Text (O)"]')
      .click();

    cy.get('img[alt="Noto Sans"]')
      .should('exist');
  });
});
