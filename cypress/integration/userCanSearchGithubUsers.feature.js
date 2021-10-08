describe('Gihub user search', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to have an input field', () => {
    cy.get('[data-cy=user-search-input').should('be.visible')
  });

  it('is expected to return an array of users', () => {
    cy.get('[data-cy=user-search-input]').type('Barrack')
    cy.get('[data-cy=user-search-btn]').click()
    cy.get('[data-cy=user-search-result]').should('have.length', 3)
  });
})
