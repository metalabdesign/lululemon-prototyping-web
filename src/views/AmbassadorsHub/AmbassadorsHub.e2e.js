// https://docs.cypress.io/api/introduction/api.html

describe("Ambassadors Hub", () => {
  it("has a link", () => {
    cy.visit("/ambassadors");
    cy.contains("a", "Ambassador 1");
  });
});
