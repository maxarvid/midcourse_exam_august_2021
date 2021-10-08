describe('Gihub user search', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to have an input field', () => {
    cy.get('[data-cy=user-search-input').should('be.visible')
  });
})
