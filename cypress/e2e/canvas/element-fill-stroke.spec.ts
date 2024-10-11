describe('Element fill or stroke test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('performs a series of clicks and checks', () => {
    const elements = [
      '#left-Element',
      '#basic\\/icon-circle',
      '#svg_1',
      'div.tab.objects'
    ];

    const infillButtonSelector = '#infill';
    const filledClass = 'src-web-app-views-beambox-Right-Panels-Options-Blocks-InFillBlock-module__filled--Fq1Rj';

    // Click through elements
    elements.forEach((element) => {
      cy.get(element).click();
      cy.wait(1000);
    });

    // Check initial state of infill button
    cy.get(`${infillButtonSelector}.${filledClass}`).should('exist');
    cy.wait(1000);

    // Toggle infill button and check states
    for (let i = 0; i < 2; i=i+1) {
      cy.get(infillButtonSelector).click();
      cy.wait(1000);

      cy.get(infillButtonSelector)
        .should('exist')
        .and(i === 0 ? 'not.have.class' : 'have.class', filledClass);
      cy.wait(1000);
    }
  });
});
