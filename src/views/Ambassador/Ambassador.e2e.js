// https://docs.cypress.io/api/introduction/api.html

describe("Ambassador", () => {
  it("has a title", () => {
    cy.visit("/ambassador/1");
    cy.contains("h2", "Getting to Know");
  });

  it("pronouns properly", () => {
    cy.visit("/ambassador/1");
    cy.contains(".title-pronoun", "him");
  });
});
