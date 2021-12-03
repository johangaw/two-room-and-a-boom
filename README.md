# Two room and a Boom

This is an inofficial version of the party game Two room and a Boom.

## User stories

- **GameMaster** - The creator and administrator of a game
- **Player** - A participant in a game
- **gameID** - A globally uniq id for a specific game

* [x] A GameMaster should be able to create a new game by supplying a gameName
  - The game should be assigned a gameID
* [x] A Player should be able to join a game by providing the corresponding gameID
  - The player should be assigned one of the available roles
  - Two players may not be assigned the same role instance (one role may have multiple instance in one game)
  - Upon joining the player should be redirected to the GameView where the role is shown behind an overlay
  - If the same device joins the same game again he/she should be assigned the same role
* [x] Complete President role
* [x] Complete Bomber role
* [x] Complete Engineer role
* [x] Complete Doctor role
* [x] Complete Spy role
* [x] Complete Coy role
* [x] Complete Mi6 role
* [x] Complete Gambler role
* [] A GameMaster should be able to starta a game from the admin page
* [] Roles should be assigned to players when the game is started
* [] A Player should not be able to join a started game
* [] A Player should be able to reach the least game he/she visited from the start page

## Getting Started

```bash
npm run dev
```
