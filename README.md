# Two room and a Boom

This is an inofficial version of the party game Two room and a Boom.

## User stories

- **GameMaster** - The creator and administrator of a game
- **Player** - A participant in a game
- **gameID** - A globally uniq id for a specific game

* [] A GameMaster should be able to create a new game by supplying a gameID
* [] A Player should be able to join a game by providing the corresponding gameID
  - The player should be assigned one of the available roles
  - Two players may not be assigned the same role instance (one role may have multiple instance in one game)
  - Upon joining the player should be redirected to the GameView where the role is shown behind an overlay
  - If the same device joins the same game again he/she should be assigned the same role
* [] Add President role
* [] Add Bomber role
* [] Add Peasant role

## Getting Started

```bash
npm run dev
```
