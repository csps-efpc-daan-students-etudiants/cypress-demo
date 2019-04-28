describe('My First Test', () => {
  it('Should always pass', () => {
    expect(true).to.equal(true);
  });

  it('I"m sure this works', () => {
    expect(true).to.equal(false);
  });
  
  
    it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
});
