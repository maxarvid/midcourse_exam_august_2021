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

  describe('submits a search query', () => {
    beforeEach(() => {
      cy.get("[data-cy=user-search-input]").type("Barrack");
      cy.get("[data-cy=user-search-btn]").click();
    });
    
    it("is expected to return an array of users", () => {
      cy.get("[data-cy=user-search-result]").children().should("have.length", 3);
    });
  
    it('is expected to return a login name for users', () => {
      cy.get("[data-cy=user-search-result").first().should('contain.text', 'barack')
    });
  })

  describe('does not submit a search query', () => {
    beforeEach(() => {
      cy.get("[data-cy=user-search-btn]").click();
    });

    it('is expected to issue a prompt to fill out search input', () => {
      cy.get("[data-cy=input-prompt").should('contain.text', 'Please enter a search term')
    });
    
  })
  
});
