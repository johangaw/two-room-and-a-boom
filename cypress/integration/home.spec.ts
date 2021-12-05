export {};

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display links to new game and join game", () => {
    cy.findByRole("link", { name: /join game/i }).should("exist");
    cy.findByRole("link", { name: /new game/i }).should("exist");
  });
});
