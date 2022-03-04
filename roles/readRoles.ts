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

export const RedDealer: Role = {
  id: "red-dealer",
  name: "Dealer",
  description: "",
  notes: [
    `You have the DEALER power: any player that card shares with you gains the "foolish" condition. Players with the "foolish" condition can never turn down an offer to card share.`,
    `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["DEALER", "foolish", "card-share"],
};

export const RedDemon: Role = {
  id: "red-demon",
  name: "Demon",
  description: "",
  notes: [
    `You begin with the "liar" condition. Players with the "liar" condition must always verbally tell the lie (unless you're "seduced", "hypnotized", or any other condition that may influence your ability to tell the truth). This means that you are permitted to communicate the truth as long as it is not verbally.`,
    `Note: If a player with the "honest" condition were to acquire the "liar" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["liar"],
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

export const RedEnforcer: Role = {
  id: "red-enforcer",
  name: "Enforcer",
  description: "",
  notes: [
    `You have the ENFORCER power: once per round, you may privately reveal your card to two players. You must verbally say to your target players, "You must reveal your card to one another". Those two players must card share to one another (not to you). You cannot use this power on yourself, but another Enforcer can use their power on you.`,
    `Note: If used on a character that is unable to card share (e.g. has the "shy" condition), the power is wasted. The target must prove they can't card share by verbally saying (even if "cursed") "I can't because I am (name specific condition)".`,
  ],
  team: "Red",
  tags: ["ENFORCER", "once-per-round", "private-reveal"],
};

export const RedEnlisted: Role = {
  id: "red-enlisted",
  name: "Enlisted",
  description: "",
  notes: [
    `You have the ENLIST power: during any round but the last, you may publicly reveal your card and automatically become one of the hostages for the end of that round. However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once.`,
    `The Enlisted must be a hostage during the same round in which the ENLIST power was used. If 2 Enlisted characters use their power in the same room during the same round and there is only 1 hostage position available, whichever Enlisted used their power first is to be the hostage, the other Enlisted character wasted their ENLIST power.`,
  ],
  team: "Red",
  tags: ["ENLIST", "public-reveal", "once-per-game"],
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

export const RedHunter: Role = {
  id: "red-hunter",
  name: "Hunter",
  description: "",
  notes: [
    `Take a player's character card anytime they attempt to use a card share power on you. You, the Hunter, are not affected by that player's card share power. You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card.`,
    `For example, if a Vampire card shares with you, the Vampire has no effect on you, but you get to keep the player's Vampire card. If 2 Hunters card share, nothing happens. Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others.`,
    `Note: the Clone's CLONE power still works even when encountering the Hunter.`,
  ],
  team: "Red",
  tags: ["card-share"],
};

export const RedHypnotist: Role = {
  id: "red-hypnotist",
  name: "Hypnotist",
  description: "",
  notes: [
    `You have the HYPNOTIST power: any player that card shares with you gains the "HYPNOTIST" condition. "Hypnotized" players must act as if they are the character that you suggest. You initiate hypnotism by saying, "You think you are the ________". You can only make a character suggestion at the time of the hypnotism (the card share). "Hypnotized" players do not gain nor lose their power or allegiance.`,
    `Note: this requires a bit of acting on the part of the "hypnotized" player as they are now to believe that their character card is actually the character card the Hypnotist suggests.`,
  ],
  team: "Red",
  tags: ["HYPNOTIST", "hypnotized", "card-share"],
};

export const RedIdentityThief: Role = {
  id: "red-identity-thief",
  name: "Identity Thief",
  description: "",
  notes: [
    `Any player that card shares with you trades cards with you and then acquires the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `The player with whom you traded cards is now considered the "Shy Identity Thief" and assumes the allegiance of the Identity Thief card. You, however, assume the powers, allegiance, win objectives, and all starting conditions of the newly stolen card as if you were dealt that character card at the beginning of the game.`,
    `If the 2 Identity Thief characters card share with one another, they trade cards, both gain the "shy" condition, and both trade their allegiances (red becomes blue and blue become red).`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
    `Another Note: If a player with the "shy" condition were to acquire the "foolish" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["shy", "card-share"],
};

export const RedImmunologist: Role = {
  id: "red-immunologist",
  name: "Immunologist",
  description: "",
  notes: [
    `You begin with the "immune" condition. Players with the "immune" condition are immune to all powers and conditions without exception.`,
    `Note: players should never lie about having the "immune" condition. If this becomes a problem an Immunologist might have to provide a private reveal to prove that they are indeed immune to a power or condition and you should get better friends.`,
  ],
  team: "Red",
  tags: ["immune"],
};

export const RedInformer: Role = {
  id: "red-informer",
  name: "Informer",
  description: "",
  notes: [
    `When a player of the opposing color (i.e. red when you're blue, or blue when you're on red team) privately reveals their card to you and verbally says, "Take my card", you MUST take that player's card.`,
    `You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card. If, at the end of the last round, if the red and blue teams tie (both win or both lose) then team whose Informer has more cards loses.`,
    `For example: Both the Red Fist and the President are destroyed by the Blue Drone and the Bomber. The red Informer acquired 3 cards during the game. The blue Informer acquired 2 cards during the game. Red Team loses, Blue Team wins.`,
  ],
  team: "Red",
  tags: [],
};

export const RedInterrogator: Role = {
  id: "red-interrogator",
  name: "Interrogator",
  description: "",
  notes: [
    `You have the INTERROGATE power: once per round you may privately reveal to any player in the room and ask them a single yes/no question to which they must answer honestly. If they sincerely don't know the answer to the question, then they should indicate such.`,
    `Answering doesn't have to be verbal (though it can be). The recipient of the INTERROGATE power can answer with a simple nod of the head, headshake, or shrug of the shoulders.`,
    `When using the Interrogate ability, you must verbally announce to your target player, "I am using my Interrogate ability", as you privately reveal your card to them.`,
    `Note: asking players about what they plan to do in the future is a waste of a question. Changing your plans doesn't make you dishonest. It makes you fickle.`,
  ],
  team: "Red",
  tags: ["INTERROGATE"],
};

export const RedKangaroo: Role = {
  id: "red-kangaroo",
  name: "Kangaroo",
  description: "",
  notes: [
    `You have the SWITCH-A-ROO power: during any round but the last, you may publicly reveal your card. You must then immediately leave your current room. Upon entering the opposing room, you must IMMEDIATELY choose any player, show them your publicly revealed card and verbally tell them, "I'm kicking you out".`,
    `You stay, but your target player must immediately leave the current room and go into the opposing room. After using the SWITCH-A-ROO power, your card must remain permanently publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. If the player you chose to remove from the room was the leader, the leader should immediately place the leader card on the ground. At this point, a new leader is nominated in the same method as in the first round.`,
  ],
  team: "Red",
  tags: ["SWITCH-A-ROO", "public-reveal"],
};

export const RedLoyalist: Role = {
  id: "red-loyalist",
  name: "Loyalist",
  description: "",
  notes: [
    `You are immune to the "traitor" condition. Moreover, if anyone card shares with you they lose the "traitor" condition.`,
  ],
  team: "Red",
  tags: ["traitor"],
};

export const RedMadScientist: Role = {
  id: "red-mad-scientist",
  name: "Mad Scientist",
  description: "",
  notes: [
    `You have the MAD SCIENTIST power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You MUST trade cards". Those two players must trade character cards. You can not use this power on yourself, but another Mad Scientist can use their MAD SCIENTIST power on you.`,
  ],
  team: "Red",
  tags: ["MAD SCIENTIST", "private-reveal"],
};

export const RedMayor: Role = {
  id: "red-mayor",
  name: "Mayor",
  description: "",
  notes: [
    `When you publicly reveal your card, your vote counts as two votes. This means that you can publicly reveal your card to count as two people for OR AGAINST the nomination of a new leader.`,
  ],
  team: "Red",
  tags: ["public-reveal"],
};

export const RedMedic: Role = {
  id: "red-medic",
  name: "Medic",
  description: "",
  notes: [
    `You have the MEDIC power: any player that card shares with you has all "conditions" removed. For example, a player who has been "cursed" by a Mummy would no longer have the "cursed" condition after card sharing with you. This does not make yourself immune to acquiring conditions, as you might need to find the opposing Medic.`,
  ],
  team: "Red",
  tags: ["MEDIC"],
};

export const RedMime: Role = {
  id: "red-mime",
  name: "Mime",
  description: "",
  notes: [`Do your best to not make any noise.`],
  team: "Red",
  tags: [],
};

export const RedMummy: Role = {
  id: "red-mummy",
  name: "Mummy",
  description: "",
  notes: [
    `You have the MUMMY power: any player that card shares with you gains the "cursed" condition. "Cursed" players must from then on do their best to not make any noise.`,
    `Note: Because of the MUMMY power, "Cursed" players are prevented from using any powers or abilities that requires a verbalization (e.g. Agent, Rageaholic, and even Zombie).`,
  ],
  team: "Red",
  tags: ["MUMMY", "cursed"],
};

export const RedNegotiator: Role = {
  id: "red-negotiator",
  name: "Negotiator",
  description: "",
  notes: [
    `You begin with the "savvy" condition. Players with the "savvy" condition may only card share. You may not publicly, privately, or color share.`,
    `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
  ],
  team: "Red",
  tags: ["savvy"],
};

export const RedNinja: Role = {
  id: "red-ninja",
  name: "Ninja",
  description: "",
  notes: [
    `The Ninja has the NINJA power: during any round but the last, you may publicly reveal your card. You must then immediately leave your current room. Upon entering the opposing room, you must IMMEDIATELY grab any player you choose in that room.`,
    `Both you and the chosen player are removed from the game (but do NOT gain the "dead" condition). In the case where the chosen player is a character who is unaffected by powers (example: the Immunologist), the Ninja's power has been wasted and the Ninja leaves the game alone.`,
    `Removed characters still win or lose based upon their team or character's win objective. Backup characters become active if their corresponding characters are removed from the game (e.g. the Nurse becomes the Doctor if the Ninja removes the Doctor from the game).`,
    `If the Ninja uses the NINJA power on a room's leader, the leader should immediately place the leader card on the ground. At this point, a new leader is nominated in the same method as the first round.`,
    `Note: if a primary character (President or Bomber) and its corresponding backup character (President's Daughter or Martyr) are both removed from the game, the opposing team automatically wins.`,
    `Another Note: If the leader of a room is removed, the room must nominate a new leader as in the first round. Note: because Ninjas and the targets of their NINJA power are removed from a room's population, the player count for the sake of hostages should always be 4 less than the amount of starting players. This means if you have 18 players including the Ninjas, you should be playing a 14 player game.`,
  ],
  team: "Red",
  tags: ["NINJA"],
};

export const Red: Role = {
  id: "red-",
  name: "",
  description: "",
  notes: [],
  team: "Red",
  tags: [],
};
