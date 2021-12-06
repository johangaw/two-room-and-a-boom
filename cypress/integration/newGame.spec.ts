export {};

describe("Create game Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.findByRole("link", { name: /new game/i }).click();
  });

  it("should be possible to create a new game by providing a name and the be redirected to the admin page", async () => {
    cy.findByText(/new game/i).should("exist");
    cy.findByLabelText(/name/i).type("My test game");
    cy.findByRole("button", { name: /create game/i }).click();

    cy.findByText("My test game").should("exist");
    cy.url().should("contain", "/admin");
  });
});
