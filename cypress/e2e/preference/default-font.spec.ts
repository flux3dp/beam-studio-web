describe(('dafault font'), () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('default font : noto serif', () => {
    // Open the menu
    cy.get('.menu-btn-container').click();

    // Navigate to File menu
    cy.contains('div[role="menuitem"]', 'File').click();

    // Click on Preferences
    cy.contains('li[role="menuitem"]', 'Preferences').click();

    // set-default-font-family
    cy.get('#set-default-font-family').select('Noto Serif');

    // Click the "Apply" button
    cy.get('div.btn.btn-done').click();

    // left-Text
    cy.get('div#left-Text').click();

    cy.get('svg#svgcontent').realClick({ x: 150, y: 150 });
    cy.wait(1000);
    cy.inputText('Noto Serif');

    cy.get('div#left-Cursor')
      .click({ force: true });

    cy.get('text#svg_1')
      .should('exist')
      .click({ force: true });

    // <div class="tab objects" title="Text (O)">
    cy.get('div.tab.objects[title="Text (O)"]')
      .click();

    cy.get('img[alt="Noto Serif"]')
      .should('exist');
  });

  it('default font : noto sans', () => {
    // Open the menu
    cy.get('.menu-btn-container').click();

    // Navigate to File menu
    cy.contains('div[role="menuitem"]', 'File').click();

    // Click on Preferences
    cy.contains('li[role="menuitem"]', 'Preferences').click();

    // set-default-font-family
    cy.get('#set-default-font-family').select('Noto Sans');

    // Click the "Apply" button
    cy.get('div.btn.btn-done').click();

    // left-Text
    cy.get('div#left-Text').click();

    cy.get('svg#svgcontent').realClick({ x: 150, y: 150 });
    cy.wait(1000);
    cy.inputText('Noto Sans');

    cy.get('div#left-Cursor')
      .click({ force: true });

    cy.get('text#svg_1')
      .should('exist')
      .click({ force: true });

    // <div class="tab objects" title="Text (O)">
    cy.get('div.tab.objects[title="Text (O)"]')
      .click();

    cy.get('img[alt="Noto Sans"]')
      .should('exist');
  });
});