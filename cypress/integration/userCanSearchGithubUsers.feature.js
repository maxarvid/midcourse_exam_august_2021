describe("Gihub user search", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api.github.com/**", {
      fixture: "userSearchResponse.json",
    });
    cy.visit("/");
  });

  it("is expected to have an input field", () => {
    cy.get("[data-cy=user-search-input").should("be.visible");
  });

  it.only("is expected to return an array of users", () => {
    cy.get("[data-cy=user-search-input]").type("Barrack");
    cy.get("[data-cy=user-search-btn]").click();
    cy.get("[data-cy=user-search-result]").children().should("have.length", 3);
  });
});
