describe('Layer Color Setting', () => {
 it('Layer Color Setting', () => {
 cy.landingEditor();

 cy.get('div.menu-btn-container').click();
 cy.get('.rc-menu__submenu').contains("Edit").click();
 cy.get('.rc-menu__item').contains("Layer").click();
 cy.contains('Color Settings').click();
 cy.get('.ant-modal').should('be.visible');
 cy.get('.ant-btn').contains("Add Color").click();
 cy.get('input[type="text"][value="#FFFFFF"]')
   .clear().wait(50)
   .type('#AA0000')
   .should('have.value', '#AA0000');
 cy.get('input[type="text"][step="1"][value="50.0"]')
   .clear().wait(50)
   .type('25.0')
   .should('have.value', '25.0');
 cy.contains('.ant-btn-primary', /^Add$/).click();
 cy.get('button.ant-pagination-item-link')
   .find('span[aria-label="right"]')
   .click();

 // 表格內容
 const rowSelector = 'tr[data-row-key="#AA0000"]';
 // 確認顏色
 cy.get(`${rowSelector} .config-color-block`)
   .should('have.css', 'background-color', 'rgb(170, 0, 0)');
 // 確認内容
 cy.get(`${rowSelector} .editable-cell-value-wrap`).eq(0)
   .should('contain.text', '#AA0000');
 cy.get(`${rowSelector} .editable-cell-value-wrap`).eq(1)
 .should('contain','10\u00a0mm/s');
 cy.get(`${rowSelector} .editable-cell-value-wrap`).eq(2)
   .should('contain.text', '25\u00a0%');
 cy.get(`${rowSelector} .editable-cell-value-wrap`).eq(3)
   .should('contain.text', '1');
//確認有儲存
 cy.get('.ant-btn').contains("Save").click();
 cy.get('div.menu-btn-container').click();
 cy.get('.rc-menu__submenu').contains("Edit").click();
 cy.get('.rc-menu__item').contains("Layer").click();
 cy.contains('Color Settings').click();
 cy.get('button.ant-pagination-item-link')
   .find('span[aria-label="right"]')
   .click();
 cy.get('.ant-table-row').should('contain', '#AA0000');
  // 確認删除按钮並確定刪除
 cy.get(`${rowSelector} svg[data-icon="delete"]`).should('be.visible').click();
 cy.get('.ant-table-row').should('not.contain', '#AA0000');


   });
 });
