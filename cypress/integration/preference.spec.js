it('preference', () => {
  cy.landing();

  cy.get('div.top-bar-menu-container').click();
  cy.get('li.rc-menu__submenu').should('have.length', 5);
  cy.get('li.rc-menu__submenu:nth-child(1)').trigger('mouseover');
  cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click();

  cy.url().should('contain', '#/studio/settings');
  cy.get('select#select-lang').select('zh-tw');
  cy.get('div.subtitle:first-child').should('have.text', '一般');
  cy.get('div.btn-done').click();

  cy.url().should('contain', '#/studio/beambox');
  cy.get('div.modal-body').should('exist');
  cy.get('button[data-test-key="否"]').click();
  cy.get('div.top-bar > div.file-title').should('have.text', '無標題');
});
