describe('General-scale tests with different inputs', () => {
  const testData = [
    { inputValue: `cy-test-input-${Date.now()}-1` },
    { inputValue: `cy-test-input-${Date.now()}-2` },
    { inputValue: `cy-test-input-${Date.now()}-3` },
  ];

  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000/');
  });

  testData.forEach((data) => {
    it(`should check that header, progress and completed elements are visible for input: ${data.inputValue}`, () => {
      cy.get('[data-test="cy-header"]').should('be.visible');
      cy.get('[data-test="cy-progress"]').should('be.visible');
      cy.get('[data-test="cy-completed"]').should('be.visible');
    });

    it(`should type the input and submit if not already included for input: ${data.inputValue}`, () => {
      cy.get('[data-test="cy-progress"]').then(($progress) => {
        if (!$progress.text().includes(data.inputValue)) {
          cy.get('[data-test="cy-input"]')
            .should('be.visible')
            .type(data.inputValue);
          cy.get('[data-test="cy-submit"]')
            .should('be.enabled')
            .click({ force: true });
        }
      });
    });

    it(`should show the progress with the input text for input: ${data.inputValue}`, () => {
      cy.get('[data-test="cy-progress"]').should(
        'contain.text',
        data.inputValue
      );
    });

    it(`should allow editing the input in the progress for input: ${data.inputValue}`, () => {
      cy.get(`[data-test="${data.inputValue}-edit"]`)
        .should('exist')
        .click({ force: true });
      cy.get('[data-test="cy-completed"]').should(
        'contain.text',
        data.inputValue
      );
    });

    it(`should verify the edit functionality for input: ${data.inputValue}`, () => {
      cy.get(`[data-test="${data.inputValue}-edit"]`).click({
        force: true,
      });
      cy.get('[data-test="cy-progress"]').should(
        'contain.text',
        data.inputValue
      );
    });

    it(`should delete the input from progress for input: ${data.inputValue}`, () => {
      cy.get(`[data-test="${data.inputValue}-delete"]`)
        .should('exist')
        .click({ force: true });
      cy.get('[data-test="cy-progress"]').should(
        'not.contain.text',
        data.inputValue
      );
    });
  });
});
