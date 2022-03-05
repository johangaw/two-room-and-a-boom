import { Role } from "../types/domain";

export const Bomber: Role = {
  id: "red-bomber",
  name: "Bomber",
  description:
    'You are a primary character. Everyone in the same room as you at the end of the game gains the "dead" condition. The Red Team wins if the President gains the "dead" condition.',
  notes: [
    'It is possible that the Bomber receives the "dead" condition before the end of the game. If this happens, then the Bomber does not detonate, failing to provide the "dead" condition to everyone in the same room at the end of the game.',
  ],
  team: "Red",
  tags: ["group-president", "primary"],
};

export const RedSpy: Role = {
  id: "red-spy",
  name: "Spy",
  description: "You card is Blue but you are actually on the Red team",
  team: "Red",
};

export const RedCupid: Role = {
  id: "red-cupid",
  name: "Cupid",
  description: "",
  notes: [
    `You have the CUPID power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You are in love with each other".`,
    `Those two players gain the "in love" condition. Players with the "in love" condition replace their original win objective with the following win objective: be in the same room with the player with whom you are "in love" at the end of the game or fail to win your objective. The CUPID power cannot be used on yourself.`,
    `Note: If a player with the "in love" condition were to acquire the "in hate" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["CUPID", "once-per-game", "in love", "lover-haters"],
};

export const RedDragon: Role = {
  id: "red-dragon",
  name: "Dragon",
  description: "",
  notes: [
    `You are a primary character. Everyone in the same room as you at the end of the game gains the "toast" condition. The Red Team wins if the King gains the "dead" condition.`,
    `Note: it is possible that the Dragon receives the "dead" condition before the end of the game. If this happens, then the Dragon does not breathe , failing to provide the "dead" condition to everyone in the same room at the end of the game.`,
  ],
  team: "Red",
  tags: ["group-king", "primary"],
};
export const RedDragonEgg: Role = {
  id: "red-dragon-egg",
  name: "Dragon Egg",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Dragon. If the Dragon card is buried or the Dragon receives the "toast" condition before the end of the game, you must carry out all responsibilities associated with the Dragon (for example: ending the game in the same room as the King, card sharing with the Eggineer).`,
  ],
  team: "Red",
  tags: ["group-king", "secondary"],
};

export const RedDrBoom: Role = {
  id: "red-dr-boom",
  name: "Dr. Boom",
  description: "",
  notes: [
    `You have the BOOM power: if you card share with the President, the game immediately ends. Red Team wins.`,
    `Note: the BOOM power never works on the President's Daughter. If the President is buried, the BOOM power is never used.`,
  ],
  team: "Red",
  tags: ["group-president"],
};

export const RedEggineer: Role = {
  id: "red-eggineer",
  name: "Eggineer",
  description: "",
  notes: [
    `When playing with the Eggineer, the Red Team has the following additional win condition: the Dragon must card share with the Eggineer before the end of the game or the Red Team loses.`,
    `At the end of the game, the Dragon will be asked if he/she card shared with the Eggineer. At that time both players will verify or deny having card shared.`,
    `Note: remember that if the Dragon character ever switches player control (perhaps due to the Hot Potato), then the new Dragon must card share with the Eggineer.`,
  ],
  team: "Red",
  tags: ["group-king"],
};

export const Engineer: Role = {
  id: "red-engineer",
  name: "Engineer",
  description:
    "When playing with the Engineer, the Red Team has the following additional win condition: the Bomber must card share with the Engineer before the end of the game or the Red Team loses. At the end of the game, the Bomber will be asked if he/she card shared with the Engineer. At that time both players will verify or deny having card shared.",
  notes: [
    "Remember that if the Bomber character ever switches player control (perhaps due to the Hot Potato), then the new Bomber must card share with the Engineer.",
  ],
  team: "Red",
  tags: ["group-president"],
};

export const RedExhibitionist: Role = {
  id: "red-exhibitionist",
  name: "Exhibitionist",
  description: "",
  notes: [
    `You begin with the "flashing" condition. Players with the "flashing" condition may ONLY publicly reveal even when a character's power might force a card share. A Exhibitionist can't card share or privately reveal their card or their color.`,
  ],
  team: "Red",
  tags: ["flashing"],
};

export const RedFanatic: Role = {
  id: "red-fanatic",
  name: "Fanatic",
  description: "",
  notes: [
    `You are the backup character for the Eggineer. If the Eggineer card is buried or the Eggineer receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Eggineer (card sharing with the Dragon).`,
  ],
  team: "Red",
  tags: ["group-king"],
};
export const RedFool: Role = {
  id: "red-fool",
  name: "Fool",
  description: "",
  notes: [
    `You begin with the "foolish" condition. Players with the "foolish" condition can never turn down an offer to card share or color share.`,
    `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["foolish"],
};
export const RedFugitive: Role = {
  id: "red-fugitive",
  name: "Fugitive",
  description: "",
  notes: [
    `If you card share with the One-Armed Man, the game immediately ends. Red Team wins.`,
  ],
  team: "Red",
  tags: ["group-marshal"],
};

export const RedGargoyle: Role = {
  id: "red-gargoyle",
  name: "Gargoyle",
  description: "",
  notes: [
    `You have the GARGOYLE power: whenever you are selected to leave a room (via hostage selection or a character's power) you may publicly reveal your card and verbally say, "Stone", to avoid leaving the room.`,
    `This means that any character that attempts to force you to leave the room (including the leader) must immediately choose a different player to leave. The GARGOYLE power can be used repeatedly at anytime.`,
    `Note: the GARGOYLE power can't be used while the leader is out of the room during parlay.`,
  ],
  team: "Red",
  tags: ["GARGOYLE"],
};
export const RedGorgon: Role = {
  id: "red-gorgon",
  name: "Gorgon",
  description: "",
  notes: [
    `You have the GORGON power: any player that card shares with you gains the "stoned" condition. Players with the "stoned" condition may no longer vote. Rather, any time a vote is called for (e.g. in the instance of nominating/usurping a leader), "stoned" players must act stiff with their arms straight down.`,
  ],
  team: "Red",
  tags: ["GORGON", "stoned", "card-share"],
};

export const RedPaparazzo: Role = {
  id: "red-paparazzo",
  name: "Paparazzo",
  description: "",
  notes: [
    `Do your best to make sure there are no private conversations. You must try to be as intrusive as possible, including looking over players' shoulders at their cards, and even getting on the ground to see the bottoms of cards being passed between players.`,
    `You can't physically manipulate other players, that is too rude. If playing with the Privacy Promise rule variant, ignore the rule as long as you publicly reveal your card to prove to others that you are permitted to be invasive.`,
  ],
  team: "Red",
  tags: [],
};

export const RedParanoid: Role = {
  id: "red-paranoid",
  name: "Paranoid",
  description: "",
  notes: [
    `You begin with the "paranoid" condition. Players with the "paranoid" condition may only card share. Moreover, they may only card share once per game.`,
  ],
  team: "Red",
  tags: ["paranoid", "once-per-game"],
};

export const RedPiper: Role = {
  id: "red-piper",
  name: "Piper",
  description: "",
  notes: [
    `You have the PIPER power: any player that card shares with you gains the "piped" condition. Characters with the "piped" condition have an additional win condition. If players with the "piped" condition lose if they are not in the same room as the Piper player that provided them with the "piped" condition.`,
    `Note: a player can only have a single "piped" condition.`,
    `Another Note: it is possible that both Piper characters gain the "piped" condition.`,
  ],
  team: "Red",
  tags: ["PIPER", "piped"],
};

export const RedPirate: Role = {
  id: "red-pirate",
  name: "Pirate",
  description: "",
  notes: [
    `You have the PIRATE power: you may publicly reveal your Pirate card, pick any player in the room (besides yourself) and verbally and loudly tell them, "Argh, walk the plank". However, your card must permanently remain publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. Your target player gains the "blasted" condition. A player with the "blasted" condition must be one of the hostages exchanged at the end of the round.`,
    `If the PIRATE power is used during the last round, then that player is the single hostage. Note: If a player with the "blasted" condition were to acquire the "tackled" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["PIRATE", "public-reveal", "once-per-game", "blasted"],
};

export const RedProfessor: Role = {
  id: "red-professor",
  name: "Professor",
  description: "",
  notes: [
    `Any player that card shares with you acquires the "savvy" condition. Players with the "savvy" condition may only card share. The "savvy" condition prevents the use of private reveal and color share powers.`,
    `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
  ],
  team: "Red",
  tags: ["card-share", "savvy"],
};

export const RedPsychologist: Role = {
  id: "red-psychologist",
  name: "Psychologist",
  description: "",
  notes: [
    `When you privately reveal your card to a character with the "shy" condition or the "coy" condition, that "shy" or "coy" character may then immediately card share with you, the Psychologist. If this is done, the "shy" and/or "coy" condition is removed. Furthermore, if someone with the "paranoid" condition card shares with you, the "paranoid" condition is removed.`,
  ],
  team: "Red",
  tags: ["shy", "coy", "paranoid"],
};

export const RedRageaholic: Role = {
  id: "red-rageaholic",
  name: "Rageaholic",
  description: "",
  notes: [
    `You have an alternative win objective. If you...`,
    `* are a room's leader`,
    `* have already selected your hostages`,
    `* are between rounds (the time between the end of a round and the beginning of the next round)`,
    `* and are waiting for the other room's leader during parlay … then you may begin yelling "I'm a raging one! I'm a raging two! I'm a raging three!..". and so on until either the other leader shows up for parlay or you get to "I'm a raging ten!" If you get to and complete yelling "I'm a raging ten!" then you win and all other players lose (including the opposing Rageaholic character).`,
    `Note: when yelling during parlay, you should be loud enough that both rooms can hear you.`,
  ],
  team: "Red",
  tags: [],
};

export const RedRat: Role = {
  id: "red-rat",
  name: "Rat",
  description: "",
  notes: [
    `You have the RAT power: once per game you may publicly reveal your card to the entire room, then leave to the opposing room. However, your card must permanently remain publicly revealed for the rest of the game. While in the other room, you have the "immune" condition.`,
    `Players with the "immune" condition are immune to all powers and conditions without exception. While in the other room Rats can never take part in any vote (e.g. voting to nominate or usurp a leader) and can never be picked by leaders to be transferred into another room (or by other characters with such powers) as they are never actually counted as part of a room's population.`,
    `You must return to your original room before the end of the round or you automatically lose.`,
  ],
  team: "Red",
  tags: ["RAT", "public-reveal"],
};

export const RedFist: Role = {
  id: "red-fist",
  name: "Red Fist",
  description: "",
  notes: [
    `You are a primary character. The Red Team wins if you are not in the same room as the Blue Drone at the end of the game.`,
  ],
  team: "Red",
  tags: ["group-drone", "primary"],
};

export const RedFoot: Role = {
  id: "red-foot",
  name: "Red Foot",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Red Fist. If the Red Fist card is buried or the Red Fist receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the Red Fist.`,
  ],
  team: "Red",
  tags: ["group-drone", "secondary", "backup"],
};

export const RedTeam: Role = {
  id: "red-team",
  name: "Red Team",
  description: "",
  notes: [
    `You are on Red Team, if the President gains the "dead" condition, you win.`,
    `Note: any character card that has the white bomb icon on it is considered to be on the Red Team.`,
  ],
  team: "Red",
  tags: [],
};

export const RedSecretPolice: Role = {
  id: "red-secret-police",
  name: "Secret Police",
  description: "",
  notes: [
    `You have an alternative win objective. While the Secret Police are in play, doing any action that could be deemed gameplay between rounds is strictly prohibited.`,
    `If any players discuss gameplay or attempt to do any form of card sharing or revealing, you (the Secret Police) may point to the player that is gameplaying between rounds, publicly reveal your card (like its a badge) and yell, "Secret Police!`,
    `You're under arrest!" As long as 1 other player in the game can verify that gameplay was indeed occurring between rounds, you win and all other players lose (including the opposing Secret Police character).`,
    `Note: When playing with the Secret Police it is important that all players understand when a round begins and when it ends. If players are having difficulty understanding this, remember that declaring "The round is over!" is not considered gameplay.`,
    `Another Note: Between rounds is the time between the end of a round and the beginning of the next round. This is the time when leaders parlay, swap hostages, and begin the next round.`,
    `Yet another Note: Tip: The easiest way to be sure that the Secret Police do not win is to remain silent and still between rounds.`,
    `Warning: A leader selecting hostages after a round's time has expired IS CONSIDERED GAMEPLAY! Leader's should be well prepared.`,
  ],
  team: "Red",
  tags: [],
};

export const RedSecurity: Role = {
  id: "red-security",
  name: "Security",
  description: "",
  notes: [
    `You have the TACKLE power: you may publicly reveal your Security card, pick any player in the room (besides yourself) and verbally tell them, "You're going nowhere". However, your card must permanently remain publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. If the target of your TACKLE power is not on the same team as you, they gain the "tackled" condition. "Tackled" players can't leave as a hostage this round.`,
    `If Security uses the TACKLE power on a member of their own team, then that teammate player gains the "torn" condition. A player with the "torn" condition must permanently publicly reveal their card regardless of any powers or acquired conditions. This permanent public reveal is a punishment for choosing a member of the same team.`,
    `Note: If a player with the "tackled" condition were to acquire the "blasted" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["TACKLE"],
};

export const RedSeer: Role = {
  id: "red-seer",
  name: "Seer",
  description: "",
  notes: [
    `Before the game begins, but after character cards have been dealt, everyone is to close their eyes and publicly reveal their cards for about 30 seconds. All players are to do this regardless of their character card's abilities, powers, and starting conditions.`,
    `Only the Seer characters may open their eyes and move freely throughout the play areas. Seer characters begin the game with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player. Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    `Tip: the best way to address Seer players getting to look at all players' cards is to have all players dealt their character cards before separating into the 2 separate rooms. Then have the 30 second mass public reveal, and then separate into separate rooms.`,
  ],
  team: "Red",
  tags: [],
};

export const RedShyGuy: Role = {
  id: "red-shy-guy",
  name: "Shy Guy",
  description: "",
  notes: [
    `You begin with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
    `Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["shy"],
};

export const RedSocialist: Role = {
  id: "red-socialist",
  name: "Socialist",
  description: "",
  notes: [
    `Any player that card shares with you must trade in their character card for a Red Team card before the beginning of the next round and before revealing any part of their card to another player.`,
    `Your power has no effect on primary characters (President, Bomber, Red Fist, etc)., backup characters for primaries (President's Daughter, Martyr, Firecracker, etc). or any character that is not aligned with either red or blue.`,
  ],
  team: "Red",
  tags: ["not-implemented"],
};

export const RedTinkerer: Role = {
  id: "red-tinkerer",
  name: "Tinkerer",
  description: "",
  notes: [
    `You are the backup character for the Engineer. If the Engineer card is buried or the Engineer receives the "dead" condition before activating the bomb, you must carry out all responsibilities associated with the Engineer (card sharing with the Bomber).`,
  ],
  team: "Red",
  tags: ["group-president", "backup"],
};

export const RedWitness: Role = {
  id: "red-witness",
  name: "Witness",
  description: "",
  notes: [
    `If you card share with the Marshal, the game immediately ends. Red Team wins.`,
  ],
  team: "Red",
  tags: ["group-marshal"],
};

export const RedXenomorph: Role = {
  id: "red-xenomorph",
  name: "Xenomorph",
  description: "",
  notes: [
    `You have the XENOMORPH power: the first member of the blue team that color or card shares with you gains the "impregnated" condition and you must give them your Xenomorph character card.`,
    `This means that using your XENOMORPH power will permanently remove your card from the game, not you. A player with the "impregnated" condition must not do anything with the Xenomorph card they hold, including showing the card to others or using powers associated with the card. They just have to hold onto it.`,
    `However, a player with the "impregnated" condition can still use their own card as per usual. At the end of the game, everyone in the same room as blue player with the "impregnated" condition gains the "dead" condition.`,
  ],
  team: "Red",
  tags: ["group-xeno", "XENOMORPH", "impregnated", "dead"],
};
