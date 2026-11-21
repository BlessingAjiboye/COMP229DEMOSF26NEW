describe("Mern_e-commerce", () => {
  it("tests Mern_e-commerce", () => {
    cy.viewport(626, 585);
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(3) > button").click();
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(8)").click();
    cy.get("#root > div > div > div.MuiGrid-root > div:nth-of-type(1) svg").click();
    cy.get("#root > div > div a:nth-of-type(1) > button").click();
    cy.get("#email").click();
    cy.get("#email").type("fair@");
    cy.get("#email").type("fair@yahoo.com");
    cy.get("#password").click();
    cy.get("#password").type("fairfair");
    cy.get("#root > div > div button").click();
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("a:nth-of-type(5) > button").click();
    cy.get("h6 button").click();
    cy.get("label > span").click();
    cy.get("div.MuiCardContent-root").click();
    cy.get("#icon-button-file").type("C:\\fakepath\\Screenshot 2026-05-03 205327.png");
    cy.get("#name").click();
    cy.get("#name").type("dgf");
    cy.get("#description").click();
    cy.get("#description").type("yfguguhh");
    cy.get("div.MuiCardActions-root > button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMAMBNBOBPBQBRBSBTBUBVBWBXBYBZBaB
