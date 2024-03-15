describe('Interface Introduction', () => {
  it('Show Interface Introduction', () => {
    cy.landingEditor();
    //確認x是否有用及x後能否使用
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains("Help").click();
    cy.get('.rc-menu__item').contains("Show Interface Introduction").click();
    cy.get('.close-btn.left').should('be.visible');
    cy.get('.close-btn.left').click();
    cy.contains('Are you sure to end new UI introduction?').should('be.visible');
    cy.get('.ant-btn').contains("No").click();
    cy.get('.dialog-box-arrow.top')
      .should('have.css', 'border-width', '0px 10px 17px')
      .should('have.css', 'left', '15px');
    cy.contains('Camera Preview').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');
    cy.get('.close-btn.left').click();
    cy.get('.ant-btn').contains("Yes").should('exist');
    cy.get('.ant-btn').contains("No").should('exist');
    cy.get('.ant-btn').contains("Yes").click();
    //步驟內容及下一步
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains("Help").click();
    cy.get('.rc-menu__item').contains("Show Interface Introduction").click();
    cy.get('.dialog-box-arrow.top')
      .should('have.css', 'border-width', '0px 10px 17px')
      .should('have.css', 'left', '15px');
    cy.contains('Camera Preview').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Select a machine').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('3/18').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('4/18').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Start Work').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Select / Image / Text').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Basic Shapes').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Pen Tool').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Add New Layer').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Rename by double click').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Drag to sort').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Right Click to select Layer').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Switch between Layer Panel and Object Panel').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Align Controls').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Group Controls').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Shape Operation').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Flip').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');

    cy.get('.next-button').click()
    cy.contains('Object Actions').should('be.visible');
    cy.get('.next-button').should('have.text', 'NEXT');
    cy.get('.next-button').click()
    cy.get('.tutorial-dialog').should('not.exist');

    //最後一步後點Next是否可以正常使用
    cy.clickToolBtn('Rectangle');
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_2').should('exist');
    cy.get('#svg_2')
      .should('have.attr', 'x', '641.3412864')
      .should('have.attr', 'y', '639.8556796')
      .should('have.attr', 'width', '1273.3446602000001')
      .should('have.attr', 'height', '636.6723301');
    cy.get('#svg_2')
      .should('have.attr', 'stroke', '#333333');
    cy.get('#svg_2')
      .should('have.attr', 'fill', 'none')
      .should('have.attr', 'fill-opacity', '0');
    cy.get('#svg_2')
      .should('have.attr', 'vector-effect', 'non-scaling-stroke')
      .should('have.attr', 'style', 'pointer-events:inherit');

  });
});
