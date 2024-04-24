const configOperationsPrefix =
  "src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigOperations-module__";
const configListPrefix =
  "src-web-app-views-beambox-Right-Panels-LaserManage-ConfigList-module__";

describe("manipulate laser panel", () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  function checkValue(power, speed, repeat) {
    cy.get("#power-input").should("have.value", power);
    cy.get("#speed-input").should("have.value", speed);
    cy.get("#repeat").should("have.value", repeat);
  }

  it("set customized list", () => {
    cy.get(
      `div[class*="${configOperationsPrefix}button"][title="Manage"]`
    ).click();
    cy.get("#custom-config-list")
      .contains(`div[class*="${configListPrefix}name"]`, "Wood - 5mm Cutting")
      .parent()
      .click();
    cy.get('button[class*="ant-btn"]').eq(1).click();
    cy.get("#custom-config-list").children().should("have.length", "15");
    cy.get(`div[class*="${configListPrefix}list"]`)
      .get(`div[class*="${configListPrefix}name"]`)
      .eq(1)
      .click();
    cy.get('button[class*="ant-btn"]').eq(0).click();
    cy.get("#custom-config-list").children().should("have.length", "16");
  });

  it("reset the parameter", () => {
    cy.get(
      `div[class*="${configOperationsPrefix}button"][title="Manage"]`
    ).click();
    cy.get("#custom-config-list")
      .contains(`div[class*="${configListPrefix}name"]`, "Wood - 3mm Cutting")
      .parent()
      .click();
    cy.get('button[class^="ant-btn"]').contains("Delete").click();
    cy.get('button[class^="ant-btn"]').contains("Save and Exit").click();
    cy.get(
      `div[class*="${configOperationsPrefix}button"][title="Manage"]`
    ).click();
    cy.get('button[class^="ant-btn"]').contains("Reset").click();
    cy.get('button[class^="ant-btn"]').contains("Yes").click();
    cy.get('button[class^="ant-btn"]').contains("Save and Exit").click();
  });

  it("add new parameter at initial panel", () => {
    cy.get("#power-input").clear().type("100").blur();
    cy.get("#speed-input").clear().type("70").blur();
    cy.get("#repeat").clear().type("3").blur();
    cy.get('[class*="SaveConfigButton-module__btn"]').click();
    cy.get(".text-input").type("Hello Flux").blur();
    cy.get('button[class^="ant-btn"]').contains("OK").click();
    cy.get(
      `div[class*="${configOperationsPrefix}button"][title="Manage"]`
    ).click();
    cy.contains("Hello Flux").should("exist");
    cy.contains(`div[class*="${configListPrefix}name"]`, "Hello Flux").click();
    cy.get("#laser-power").should("have.value", "100");
    cy.get("#laser-speed").should("have.value", "70");
    cy.get("#laser-repeat").should("have.value", "3");
    cy.get("#laser-z-step").should("have.value", "0");
  });

  // it('add new parameter at laser panel', () => {
  //   cy.get('.layer-param-buttons > div.right').click();
  //   cy.get('span[class="anticon anticon-plus-circle"]').click();
  //   cy.get('.text-input').type('Flux Laser').blur();
  //   cy.get('button[class^="ant-btn"]').contains('OK').click();
  //   cy.contains('Flux Laser').should('exist');
  //   cy.get('#laser_power').clear().type('40').blur();
  //   cy.get('#laser_speed').clear().type('20').blur();
  //   cy.get('#laser_repeat').clear().type('10').blur();
  //   cy.get('#laser_zStep').clear().type('5').blur();
  //   cy.get('button[class^="ant-btn"]').contains('Save and Exit').click();
  //   cy.get('#laser-config-dropdown').select('Flux Laser');
  //   checkValue(40, 20, 10);
  // });

  it("check all parameter value with beamo canvas", () => {
    cy.changeWorkarea("beamo");
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Wood - 3mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "45");
    cy.get("#speed-input").should("have.value", "5");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Wood - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "25");
    cy.get("#speed-input").should("have.value", "150");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Acrylic - 3mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "55");
    cy.get("#speed-input").should("have.value", "4");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Acrylic - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "25");
    cy.get("#speed-input").should("have.value", "150");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Leather - 3mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "60");
    cy.get("#speed-input").should("have.value", "3");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Leather - 5mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "60");
    cy.get("#speed-input").should("have.value", "3");
    cy.get("#repeat").should("have.value", "2");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Fabric - 3mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "50");
    cy.get("#speed-input").should("have.value", "20");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Fabric - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "20");
    cy.get("#speed-input").should("have.value", "150");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Rubber - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "50");
    cy.get("#speed-input").should("have.value", "100");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Glass - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "35");
    cy.get("#speed-input").should("have.value", "150");
    cy.get("#repeat").should("have.value", "1");
    //
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Metal - Engraving")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "50");
    cy.get("#speed-input").should("have.value", "80");
    cy.get("#repeat").should("have.value", "1");
  });

  it("check all parameter value with Ador canvas to Laser", () => {
    cy.changeWorkarea("Ador");
    cy.get(
      ".src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigPanel-module__preset-dropdown-container--G71UZ > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Wood - 3mm Cutting")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "100");
    cy.get("#speed-input").should("have.value", "8");
    cy.get("#repeat").should("have.value", "1");
  });

  it("check all parameter value with Ador canvas to Printing", () => {
    cy.changeWorkarea("Ador");
    cy.get(
      ".src-web-app-views-beambox-Right-Panels-ConfigPanel-ModuleBlock-module__panel--Hw-Bu > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Printing")
      .click({ force: true });
    cy.get(".ant-btn-primary > span").click();
    cy.wait(500);
    cy.get(
      ".src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigPanel-module__preset-dropdown-container--G71UZ > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Wood - Printing")
      .click({ force: true });
    cy.get(
      ".src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"
    ).should("contain", "Low");
    cy.get(".layerparams > :nth-child(4)").should("contain", "Regular");
  });

  it("export parameter file", () => {
    const cypressDownloadPath = Cypress.env("cypressDownloadPath");
    cy.get("#power-input").clear().type("100").blur();
    cy.get("#speed-input").clear().type("70").blur();
    cy.get("#repeat").clear().type("3").blur();
    cy.get(
      ".src-web-app-views-beambox-Right-Panels-ConfigPanel-SaveConfigButton-module__btn--uh2Fr > img"
    ).click();
    cy.get(".ant-input").type("ABC!{enter}");
    cy.get('[title="Export"] > img').click();
    cy.wait(1000);
    cy.readFile(cypressDownloadPath)
      .its("customizedLaserConfigs")
      .its("16")
      .its("name")
      .should("eq", "ABC!");
  });

  it("import parameter file", () => {
    cy.get('[title="Import"] > img').click();
    cy.get("#file-input").attachFile("testfile.json");
    cy.contains("Confirm").click();
    cy.get(".ant-select-selection-item").click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Metal - Engraving (Diode Laser)")
      .click({ force: true });
    cy.get("#power-input").should("have.value", "100");
    cy.get("#speed-input").should("have.value", "10");
  });
});
