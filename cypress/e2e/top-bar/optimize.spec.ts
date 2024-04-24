it('arrangement', () => {
  cy.landingEditor();
  cy.get('div.menu-btn-container').click();
  cy.get(':nth-child(2) > .rc-menu__item').click();
  cy.get(':nth-child(18) > .rc-menu__item').click();
  cy.contains('Arrangement').click();
  cy.get('.active > .text').should('exist').and('have.text', 'Arrange');
  cy.get(':nth-child(2) > .text').should('exist').and('have.text', 'Close');

  cy.get('.active > .text').click();
  cy.get('.ant-modal-content')
    .should('exist')
    .and('have.text', 'Arrangement OptimizationThere is no element to arrange.OK');
  cy.contains('button span', 'OK').click();

  cy.clickToolBtn('Rectangle');
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });

  cy.get('#svg_1').click({ force: true });
  cy.get('.active > .text').click();
  cy.wait(5000);
  cy.get('.active > .text').should('have.text', 'Stop');
  cy.get('#svg_1').should(($location) => {
    let xLocation = $location.attr('x');
    let yLocation = $location.attr('y');
    expect(xLocation.toString().substring(0, 6)).equal('-0.000');
    expect(yLocation.toString().substring(0, 6)).equal('0.0000');
  });
});
