describe('show tutorial', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('show interface introduction', () => {
    openTutorial(3);
    checkInterfaceStep('1/18\nCamera PreviewNEXT');
    checkInterfaceStep('2/18\nSelect a machineNEXT');
    checkInterfaceStep('3/18\nRunning FrameNEXT');
    checkInterfaceStep('4/18\nPath previewNEXT');
    checkInterfaceStep('5/18\nStart WorkNEXT');
    checkInterfaceStep('6/18\nSelect / Image / TextNEXT');
    checkInterfaceStep('7/18\nBasic ShapesNEXT');
    checkInterfaceStep('8/18\nPen ToolNEXT');
    checkInterfaceStep('9/18\nAdd New LayerNEXT');
    checkInterfaceStep('10/18\nRename by double clickNEXT');
    checkInterfaceStep('11/18\nDrag to sortNEXT');
    checkInterfaceStep('12/18\nRight Click to select Layer Controls:\nDuplicate / Merge / Lock / Delete LayersNEXT');
    checkInterfaceStep('13/18\nSwitch between Layer Panel and Object PanelNEXT');
    checkInterfaceStep('14/18\nAlign ControlsNEXT');
    checkInterfaceStep('15/18\nGroup ControlsNEXT');
    checkInterfaceStep('16/18\nShape OperationNEXT');
    checkInterfaceStep('17/18\nFlipNEXT');
    checkInterfaceStep('18/18\nObject ActionsNEXT');
  });

  it('show gesture introduction', () => {
    openTutorial(4);
    checkGestureStep('.media-container > img', 'Scroll the canvas with two fingers.', '1/5', 'NEXT');
    checkGestureStep('.media-container > img', 'Pinch with two fingers to zoom in/out the canvas.', '2/5', 'NEXT');
    checkGestureStep('video', 'Tap to select the object.', '3/5', 'NEXT');
    checkGestureStep('video', 'Drag to select the multiple objects.', '4/5', 'NEXT');
    checkGestureStep('video', 'Press and hold to open the context menu.', '5/5', 'DONE');
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
    cy.get('button[class^="ant-btn"]').contains(`${text}`).click();
  };
});
