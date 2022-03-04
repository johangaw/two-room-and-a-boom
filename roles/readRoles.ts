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
  tags: ["group1", "primary"],
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
  tags: ["group1"],
};

export const RedSpy: Role = {
  id: "red-spy",
  name: "Spy",
  description: "You card is Blue but you are actually on the Red team",
  team: "Red",
};

export const RedCoy: Role = {
  id: "red-coy",
  name: "Coy",
  description: `You begin with the "coy" condition. Players with the "coy" condition may ONLY color share even when a character's power might force a card share. A Coy can't card share, privately reveal, or publicly reveal their card or their color.`,
  notes: [
    `"Coy" players can card share their cards to Psychologists after a Psychologist player has privately revealed their card to the "coy" player.`,
    `If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
};

export const RedAgent: Role = {
  id: "red-agent",
  name: "Agent",
  description: `You have the AGENT power: once per round, you may privately reveal your card to a player and force that player to card share with you. You must verbally say to the target player, "I'm using my AGENT power. You MUST reveal your card to me".`,
  notes: [
    `If used on a character that is unable to card share (e.g. has the "shy" condition or is a Paranoid character that has already card shared), the power is wasted. The target must prove they can't card share by verbally saying (even if "cursed") "I can't because (provide specific and honest (even if a Demon reason)".`,
  ],
  team: "Red",
  tags: ["AGENT"],
};

export const RedAlien: Role = {
  id: "red-alien",
  name: "Alien",
  description: `You have the ABDUCTION power: you must keep the card of any character that card shares with you. You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card.`,
  notes: [
    `Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others or use any power that requires them to private, public, color or card share.`,
    `if an Alien card shares with the other Alien, then both players lose their cards to the other, thus losing their ABDUCTION ability.`,
  ],
  team: "Red",
  tags: ["abduction"],
};

export const RedAmbassador: Role = {
  id: "red-ambassador",
  name: "Ambassador",
  description: "",
  notes: [
    `Before the game begins, but after character cards have been dealt, you must publicly announce "I am an Ambassador!" and keep your card publicly revealed for the rest of game. This public reveal is permanent.`,
    `Ambassadors have the "immune" condition. Players with the "immune" condition are immune to all powers and conditions without exception.`,
    `Ambassadors can walk freely between the two rooms. Ambassadors can never take part in any vote (e.g. voting to nominate or usurp a leader). Ambassadors can never be picked by leaders to be transferred into another room (or by other characters with such powers) as they are never actually counted as part of a room's population.`,
    `Note: because Ambassadors are never considered a part of a room's population, they don't count towards the player count in the game and they don't count for or against Team Zombie's win objective. This means if you have 18 players including the Ambassadors, you should be playing a 16 player game.`,
  ],
  team: "Red",
  tags: ["immune"],
};

export const RedAngle: Role = {
  id: "red-angle",
  name: "Angel",
  description: "",
  notes: [
    `You begin with the "honest" condition. Players with the "honest" condition must always verbally tell the truth (unless you're "seduced", "hypnotized", or any other condition that may influence your ability to tell the truth). This means that you are permitted to lie as long as it is not verbally.`,
    `Note: If a player with the "honest" condition were to acquire the "liar" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["honest"],
};

export const RedBlind: Role = {
  id: "red-blind",
  name: "Blind",
  description: "",
  notes: [
    `You begin with the "blind" condition. Players with the "blind" condition must do their best best to never open his or her eyes during the game. Don't worry, it is a short game.`,
    `Note: Blind players can still acquire conditions and have powers used upon them, but they should not be lied to about it.`,
  ],
  team: "Red",
  tags: ["blind"],
};

export const RedBodySnatcher: Role = {
  id: "red-body-snatcher",
  name: "Body Snatcher",
  description: "",
  notes: [
    `You have the BODY SNATCHER power: if anyone card shares with your Body Snatcher card, they must give you their character card. Cards captured in this way are considered your face cards. You may show any face card you wish in future private, public, color, and card shares as long as you still have a Body Snatcher card (even if it is not your own).`,
    `However, you gain neither the allegiance nor the powers of any acquired face cards, including any characters with powers that activate during a reveal. Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others or use any power that requires them to private, public, color or card share.`,
    `Note: if a Body Snatcher card shares with the other Body Snatcher, and both used their Body Snatcher card when doing so, then both players lose their Body Snatcher cards to the other.`,
    `However, both of these players may continue to show other players the face cards they've acquired, but neither player can continue to collect cards.`,
    `Another more confusing note: when using face cards that have powers, you should not allow players to believe your power has influence over them.`,
    `Note about primary characters: remember that characters still retain their abilities and powers. This means that the Bomber still provides everyone with the "dead" condition at the end of the game with or without his/her card. The President is still the President with or without his/her card.`,
  ],
  team: "Red",
  tags: ["BODY SNATCHER"],
};

export const RedBouncer: Role = {
  id: "red-bouncer",
  name: "Bouncer",
  description: "",
  notes: [
    `You have the BOUNCER power: if you are in a room that has more players than the other room, you may privately reveal your card to any player and verbally tell them, "get out!"`,
    `When you do, that player must immediately change rooms. You may do this at any time EXCEPT FOR THE LAST ROUND. This can be done limitlessly, but never to a room's leader.`,
    `Note: this card should only be included in the roleset if the two rooms do not have the same number of players in them.`,
  ],
  team: "Red",
  tags: ["BOUNCER"],
};

export const RedBully: Role = {
  id: "red-bully",
  name: "Bully",
  description: "",
  notes: [
    `You have the BULLY power: when a player agrees to color share with you, private reveal instead. They must private reveal their card too.`,
    `Note: The Bully forces a private reveal, not a card share.`,
  ],
  team: "Red",
  tags: ["BULLY"],
};

export const RedCentipede: Role = {
  id: "red-centipede",
  name: "Centipede",
  description: "",
  notes: [
    `You have the CENTIPEDE power: any player that card shares with you gains the "attached" condition. Any "attached" player that becomes separated from you (meaning they are no longer in the same room as you) loses the "attached" condition and replaces it with the "torn" condition.`,
    `Players with the "torn" condition must permanently publicly reveal their card regardless of any powers or acquired conditions. Heck, they might as well just stick their card on their forehead.`,
    `Note: if a player is no longer the Centipede (e.g. after card sharing with the Leprechaun), players with the "attached" condition remain "attached" to you.`,
  ],
  team: "Red",
  tags: ["CENTIPEDE", "attached", "torn"],
};

export const RedCleaner: Role = {
  id: "red-cleaner",
  name: "Cleaner",
  description: "",
  notes: [
    `You have the CLEANSE power: you cleanse any player that card shares with you. This means that any player that card shares with you has all of their acquired conditions removed from them. For example, a player who has been "cursed" by a Mummy would no longer have the "cursed" condition after card sharing with you.`,
    `This does not make yourself immune to acquiring conditions, as you might need to find the opposing Cleaner.`,
  ],
  team: "Red",
  tags: ["CLEANSE"],
};

export const RedClown: Role = {
  id: "red-clown",
  name: "Clown",
  description: "",
  notes: ["Do your best to smile at all times."],
  team: "Red",
  tags: [],
};

export const RedConspirator: Role = {
  id: "red-conspirator",
  name: "Conspirator",
  description: "",
  notes: [
    `You have the CONSPIRATOR power: any player that card shares with you and has the opposite team's win objective (example: blue Conspirator card sharing with a red aligned character) gains the "traitor" condition. A player with the "traitor" condition has their win objective changed to that of the opposing team.`,
    `For example, a Blue Team player with the "traitor" condition wins if the President gains the "dead" condition (which is the win objective of the Red Team). The CONSPIRATOR power does not work on players that are not red or blue aligned, primary characters, and secondary characters (e.g. grey character, President, Bomber, President's Daughter, Martyr, Blue Drone, etc)..`,
    `Note: a single player can only gain a single "traitor" condition.`,
  ],
  team: "Red",
  tags: ["CONSPIRATOR", "traitor"],
};

export const RedCoyBoy: Role = {
  id: "red-coy-boy",
  name: "Coy Boy",
  description: "",
  notes: [
    `You begin with the "coy" condition. Players with the "coy" condition may ONLY color share even when a character's power might force a card share. A Coy Boy can't card share, privately reveal, or publicly reveal their card or their color.`,
    `Note: "Coy" players can card share their cards to Psychologists after a Psychologist player has privately revealed their card to the "coy" player.`,
    `Another Note: If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["coy", "psychologists"],
};

export const RedCriminal: Role = {
  id: "red-criminal",
  name: "Criminal",
  description: "",
  notes: [
    `You have the CRIMINAL power: any player that card shares with you gains the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["CRIMINAL", "shy"],
};
