const isRunningAtGithub = Cypress.env('envType') === 'github';
import { timeout } from 'rxjs/operators';
import { ShapeIcon } from 'app/icons/shape/ShapeIcon';
const beamSeriersName = Cypress.env('beamSeriersName');
const adorName = Cypress.env('AdorName');
const zoomBlockPrefix = 'src-web-app-components-beambox-ZoomBlock-module_';
const zoomRatioText = () => cy.get(`[class*="${zoomBlockPrefix}_ratio"]`);

describe('Camera', () => {
  if (isRunningAtGithub) {
    it('skip test on github', () => {
      cy.log('skip test on github');
    });
    return;
  }

  it('Camera-Ador', () => {
    cy.setUpBackend(Cypress.env('backendIP'));
    cy.landingEditor();
    cy.connectMachine(beamSeriersName);
    cy.findAllByTestId('select-machine').contains(beamSeriersName);
    cy.get('.src-web-app-components-beambox-top-bar-SelectMachineButton-module__button--MeIgr')
      .click();
    cy.get('.src-web-app-views-dialogs-DeviceSelector-module__name--g-K6l')
      .contains('ador(biubiu)').click();
    cy.get('.ant-btn').contains('Yes').click();
    cy.get('.src-web-app-components-beambox-top-bar-PreviewButton-module__button--wgUSF')
      .click();
    cy.get('.src-web-app-components-dialogs-PreviewHeight-module__text--nWaC1', {timeout:(10000)})
      .contains('Please move laser module head above the object, and follow the animation instructions to press AF to focus.')
      .should('exist');
    cy.get('.ant-btn').contains('Enter Manually').click();
    cy.get('.ant-btn').contains('Apply').click();
    cy.get('#background_image', {timeout:(30000)}).should('exist');
    cy.get('#background_image').should('have.attr', 'width', '100%');
    cy.get('#background_image').should('have.attr', 'height', '100%');
    cy.get('#background_image').should('have.attr', 'style', 'pointer-events:none; opacity: 1;');
    cy.get('#adjust-height').should('not.have.class', 'disabled');
    cy.get('#adjust-height').click();
    cy.get('.src-web-app-components-dialogs-PreviewHeight-module__text--nWaC1')
      .contains('You have already performed autofocus, use existing values?')
      .should('exist');
    cy.get('.ant-input-number-disabled').should('exist');
    cy.get('.ant-input-number-input').should('have.attr', 'value', '0.00');
    cy.get('.ant-checkbox-input').click();
    cy.get('.ant-input-number').should('exist');
    cy.get('.ant-btn').contains('Cancel').click();
    cy.get('#clear-preview').click();
    cy.get('#background_image').should('not.exist');
    cy.get('[title="End Preview"]').click();
    cy.get(`[class*="${zoomBlockPrefix}_container"]`).should('exist');
    cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().should('exist');
    cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().should('exist');

    let zoomRatio;
    zoomRatioText().should(($div) => {
      zoomRatio = parseInt($div.text().replace('%', ''));
    });

    cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().click();
    zoomRatioText().should(($div) => {
      expect(parseInt($div.text().replace('%', '')) > zoomRatio).to.be.true;
      zoomRatio = parseInt($div.text().replace('%', ''));
    });

    cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().click();
    zoomRatioText().should(($div) => {
      expect(parseInt($div.text().replace('%', '')) < zoomRatio).to.be.true;
    });


  });
});
