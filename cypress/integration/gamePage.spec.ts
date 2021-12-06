export {};

describe("Game Page", () => {
  describe("When the game could not be found", () => {
    it("return an error message", async () => {
      cy.visit("http://localhost:3000/games/not-a-game");
      cy.findByRole("alert").should("exist");
      cy.findByText(/game with id not-a-game does not exists/i).should("exist");
    });
  });

  describe("Happy flow", () => {
    const createGame = (gameName: string) => {
      cy.visit("http://localhost:3000");
      cy.findByRole("link", { name: /new game/i }).click();
      cy.findByLabelText(/name/i).type(gameName);
      cy.findByRole("button", { name: /create game/i }).click();
      cy.url().should("contain", "/admin");
      return cy
        .url()
        .then((url) => url.match(/\/games\/(.*)\/admin/)?.[1] ?? "");
    };

    it("should be possible to create, join and start a game ", () => {
      return createGame("Test game").then((gameId) => {
        cy.visit(`http://localhost:3000/games/${gameId}`);

        cy.findByLabelText(/name/i).type("Test user");
        cy.findByRole("button", { name: /join/i }).click();

        cy.findByText("Waiting for game to start").should("exist");
        cy.findByText("Test user").should("exist");

        cy.visit(`http://localhost:3000/games/${gameId}/admin`);
        cy.findByRole("button", { name: /start game/i }).click();

        cy.visit(`http://localhost:3000/games/${gameId}`);
        return cy.findByText("Cover").should("exist");
      });
    });

    describe("when a player has previously joined a game", () => {
      it("should remember the last name used", async () => {
        createGame("Test game").then((gameId) => {
          cy.visit(`http://localhost:3000/games/${gameId}`);

          cy.findByLabelText(/name/i).type("Player1");
          cy.findByRole("button", { name: /join/i }).click();
          cy.findByText("Player1").should("exist");

          return createGame("Test game 2").then((gameId) => {
            cy.visit(`http://localhost:3000/games/${gameId}`);
            return cy.findByLabelText(/name/i).should("have.value", "Player1");
          });
        });
      });
    });
  });
});
