describe('show tutorial', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('show interface introduction', () => {
    openTutorial(3);
    checkInterfaceStep('1/14\nCamera PreviewNEXT');
    checkInterfaceStep('2/14\nSelect / Image / TextNEXT');
    checkInterfaceStep('3/14\nBasic ShapesNEXT');
    checkInterfaceStep('4/14\nPen ToolNEXT');
    checkInterfaceStep('5/14\nAdd New LayerNEXT');
    checkInterfaceStep('6/14\nRename by double clickNEXT');
    checkInterfaceStep('7/14\nDrag to sortNEXT');
    checkInterfaceStep('8/14\nRight Click to select Layer Controls:\nDuplicate / Merge / Lock / Delete LayersNEXT');
    checkInterfaceStep('9/14\nSwitch between Layer Panel and Object PanelNEXT');
    checkInterfaceStep('10/14\nAlign ControlsNEXT');
    checkInterfaceStep('11/14\nGroup ControlsNEXT');
    checkInterfaceStep('12/14\nShape OperationNEXT');
    checkInterfaceStep('13/14\nFlipNEXT');
    checkInterfaceStep('14/14\nObject ActionsNEXT');
  });

  it('show gesture introduction', () => {
    openTutorial(4);
    checkGestureStep('.media-container > img', 'Scroll the canvas with two fingers.', '1/5', 'next');
    checkGestureStep('.media-container > img', 'Pinch with two fingers to zoom in/out the canvas.', '2/5', 'next');
    checkGestureStep('video', 'Tap to select the object.', '3/5', 'next');
    checkGestureStep('video', 'Drag to select the multiple objects.', '4/5', 'next');
    checkGestureStep('video', 'Press and hold to open the context menu.', '5/5', 'done');
  });

  function openTutorial(sequence) {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(5) > .rc-menu__item').click();
    cy.get(`:nth-child(5) > .rc-menu > :nth-child(${sequence})`).click();
  };

  function checkInterfaceStep(text) {
    cy.get('.tutorial-dialog').should('have.text', text);
    cy.get('.next-button').click();
  };

  function checkGestureStep(media, description, step, text) {
    cy.get(media).should('exist');
    cy.get('.description').should('have.text', description);
    cy.get('.step').should('have.text', step);
    cy.get(`[data-test-key="${text}"]`).click();
  };
});
