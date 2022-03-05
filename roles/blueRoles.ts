import { Role } from "../types/domain";

export const President: Role = {
  id: "blue-president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
  tags: ["group-president", "primary"],
};

export const Doctor: Role = {
  id: "blue-doctor",
  name: "Doctor",
  description:
    "When playing with the Doctor, the Blue Team has the following additional win condition: the President must card share with the Doctor before the end of the game or the Blue Team loses. At the end of the game, the President will be asked if he/she card shared with the Doctor. At that time both players will verify or deny having card shared.",
  notes: [
    "Remember that if the President character ever switches player control (perhaps due to the Hot Potato), then the new President must card share with the Doctor.",
  ],
  team: "Blue",
  tags: ["group-president"],
};

export const BlueSpy: Role = {
  id: "blue-spy",
  name: "Spy",
  description: "You card is Blue but you are actually on the Blue team",
  team: "Blue",
};

export const BlueFirecracker: Role = {
  id: "blue-firecracker",
  name: "Blue Firecracker",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Blue Drone. If the Blue Drone card is buried or the Blue Drone receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Blue Drone.`,
  ],
  team: "Blue",
  tags: ["group-drone", "secondary", "backup"],
};

export const BlueTeam: Role = {
  id: "blue-Team",
  name: "Blue Team",
  description: "",
  notes: [
    `You are on the Blue Team. If the President does not gain the "Dead" condition, you win. Note: any character card that has the white star icon on it is considered to be on the Blue Team.`,
  ],
  team: "Blue",
  tags: [],
};

export const BlueCapitalist: Role = {
  id: "blue-capitalist",
  name: "Capitalist",
  description: "",
  notes: [
    `Any player that card shares with you must trade in their character card for a Blue Team card before the beginning of the next round and before revealing any part of their card to another player. Your power has no effect any of the primary characters, secondary characters, or any character that is not aligned with either red or blue.`,
  ],
  team: "Blue",
  tags: ["not-implemented", "card-share"],
};

export const BlueDealer: Role = {
  id: "blue-dealer",
  name: "Dealer",
  description: "",
  notes: [
    `You have the DEALER power: any player that card shares with you gains the "foolish" condition. Players with the "foolish" condition can never turn down an offer to card share.`,
    `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["DEALER", "foolish", "card-share"],
};

export const BlueDemon: Role = {
  id: "blue-demon",
  name: "Demon",
  description: "",
  notes: [
    `You begin with the "liar" condition. Players with the "liar" condition must always verbally tell the lie (unless you're "seduced", "hypnotized", or any other condition that may influence your ability to tell the truth). This means that you are permitted to communicate the truth as long as it is not verbally.`,
    `Note: If a player with the "honest" condition were to acquire the "liar" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["liar"],
};

export const BlueEnforcer: Role = {
  id: "blue-enforcer",
  name: "Enforcer",
  description: "",
  notes: [
    `You have the ENFORCER power: once per round, you may privately reveal your card to two players. You must verbally say to your target players, "You must reveal your card to one another". Those two players must card share to one another (not to you). You cannot use this power on yourself, but another Enforcer can use their power on you.`,
    `Note: If used on a character that is unable to card share (e.g. has the "shy" condition), the power is wasted. The target must prove they can't card share by verbally saying (even if "cursed") "I can't because I am (name specific condition)".`,
  ],
  team: "Blue",
  tags: ["ENFORCER", "once-per-round", "private-reveal"],
};

export const BlueEnlisted: Role = {
  id: "blue-enlisted",
  name: "Enlisted",
  description: "",
  notes: [
    `You have the ENLIST power: during any round but the last, you may publicly reveal your card and automatically become one of the hostages for the end of that round. However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once.`,
    `The Enlisted must be a hostage during the same round in which the ENLIST power was used. If 2 Enlisted characters use their power in the same room during the same round and there is only 1 hostage position available, whichever Enlisted used their power first is to be the hostage, the other Enlisted character wasted their ENLIST power.`,
  ],
  team: "Blue",
  tags: ["ENLIST", "public-reveal", "once-per-game"],
};

export const BlueEris: Role = {
  id: "blue-eris",
  name: "Eris",
  description: "",
  notes: [
    `You have the ERIS power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You hate each other".`,
    `Those two players gain the "in hate" condition. Players with the "in hate" condition replace their original win objective with the following win objective: be in the opposite room of the player with whom you are "in hate" at the end of the game or fail to win this objective. You cannot use this power on yourself.`,
    `Note: If a player with the "in hate" condition were to acquire the "in love" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["ERIS", "in hate", "lover-haters", "once-per-game"],
};

export const BlueFatPrincess: Role = {
  id: "blue-fat-princess",
  name: "Fat Princess",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the King. If the King card is buried or the King receives the "toast" condition before the end of the game, you must carry out all responsibilities associated with the King (for example: ending the game in the same room as the King, card sharing with the Alchemist).`,
  ],
  team: "Blue",
  tags: ["group-king", "secondary"],
};

export const BlueFirefighter: Role = {
  id: "blue-firefighter",
  name: "Firefighter",
  description: "",
  notes: [
    `You have the FIREFIGHTER power: card sharing with the President provides the President the "fireproof" condition. If the President has the "fireproof" condition, then, at the end of the game, all players in the same room as the President also gain the "fireproof" condition. Players with the "fireproof" condition do not gain the "dead" condition from the "firebomb" condition.`,
  ],
  team: "Blue",
  tags: ["FIREFIGHTER", "fireproof", "firebomb", "group-president"],
};

export const BlueHunter: Role = {
  id: "blue-hunter",
  name: "Hunter",
  description: "",
  notes: [
    `Take a player's character card anytime they attempt to use a card share power on you. You, the Hunter, are not affected by that player's card share power. You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card.`,
    `For example, if a Vampire card shares with you, the Vampire has no effect on you, but you get to keep the player's Vampire card. If 2 Hunters card share, nothing happens. Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others.`,
    `Note: the Clone's CLONE power still works even when encountering the Hunter.`,
  ],
  team: "Blue",
  tags: ["card-share"],
};

export const BlueHypnotist: Role = {
  id: "blue-hypnotist",
  name: "Hypnotist",
  description: "",
  notes: [
    `You have the HYPNOTIST power: any player that card shares with you gains the "HYPNOTIST" condition. "Hypnotized" players must act as if they are the character that you suggest. You initiate hypnotism by saying, "You think you are the ________". You can only make a character suggestion at the time of the hypnotism (the card share). "Hypnotized" players do not gain nor lose their power or allegiance.`,
    `Note: this requires a bit of acting on the part of the "hypnotized" player as they are now to believe that their character card is actually the character card the Hypnotist suggests.`,
  ],
  team: "Blue",
  tags: ["HYPNOTIST", "hypnotized", "card-share"],
};

export const BlueIdentityThief: Role = {
  id: "blue-identity-thief",
  name: "Identity Thief",
  description: "",
  notes: [
    `Any player that card shares with you trades cards with you and then acquires the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `The player with whom you traded cards is now considered the "Shy Identity Thief" and assumes the allegiance of the Identity Thief card. You, however, assume the powers, allegiance, win objectives, and all starting conditions of the newly stolen card as if you were dealt that character card at the beginning of the game.`,
    `If the 2 Identity Thief characters card share with one another, they trade cards, both gain the "shy" condition, and both trade their allegiances (red becomes blue and blue become red).`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
    `Another Note: If a player with the "shy" condition were to acquire the "foolish" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["shy", "card-share"],
};

export const BlueImmunologist: Role = {
  id: "blue-immunologist",
  name: "Immunologist",
  description: "",
  notes: [
    `You begin with the "immune" condition. Players with the "immune" condition are immune to all powers and conditions without exception.`,
    `Note: players should never lie about having the "immune" condition. If this becomes a problem an Immunologist might have to provide a private reveal to prove that they are indeed immune to a power or condition and you should get better friends.`,
  ],
  team: "Blue",
  tags: ["immune"],
};

export const BlueInformer: Role = {
  id: "blue-informer",
  name: "Informer",
  description: "",
  notes: [
    `When a player of the opposing color (i.e. red when you're blue, or blue when you're on red team) privately reveals their card to you and verbally says, "Take my card", you MUST take that player's card.`,
    `You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card. If, at the end of the last round, if the red and blue teams tie (both win or both lose) then team whose Informer has more cards loses.`,
    `For example: Both the Red Fist and the President are destroyed by the Blue Drone and the Bomber. The red Informer acquired 3 cards during the game. The blue Informer acquired 2 cards during the game. Red Team loses, Blue Team wins.`,
  ],
  team: "Blue",
  tags: [],
};

export const BlueInterrogator: Role = {
  id: "blue-interrogator",
  name: "Interrogator",
  description: "",
  notes: [
    `You have the INTERROGATE power: once per round you may privately reveal to any player in the room and ask them a single yes/no question to which they must answer honestly. If they sincerely don't know the answer to the question, then they should indicate such.`,
    `Answering doesn't have to be verbal (though it can be). The recipient of the INTERROGATE power can answer with a simple nod of the head, headshake, or shrug of the shoulders.`,
    `When using the Interrogate ability, you must verbally announce to your target player, "I am using my Interrogate ability", as you privately reveal your card to them.`,
    `Note: asking players about what they plan to do in the future is a waste of a question. Changing your plans doesn't make you dishonest. It makes you fickle.`,
  ],
  team: "Blue",
  tags: ["INTERROGATE"],
};

export const BlueKangaroo: Role = {
  id: "blue-kangaroo",
  name: "Kangaroo",
  description: "",
  notes: [
    `You have the SWITCH-A-ROO power: during any round but the last, you may publicly reveal your card. You must then immediately leave your current room. Upon entering the opposing room, you must IMMEDIATELY choose any player, show them your publicly revealed card and verbally tell them, "I'm kicking you out".`,
    `You stay, but your target player must immediately leave the current room and go into the opposing room. After using the SWITCH-A-ROO power, your card must remain permanently publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. If the player you chose to remove from the room was the leader, the leader should immediately place the leader card on the ground. At this point, a new leader is nominated in the same method as in the first round.`,
  ],
  team: "Blue",
  tags: ["SWITCH-A-ROO", "public-reveal"],
};

export const BlueKing: Role = {
  id: "blue-king",
  name: "King",
  description: "",
  notes: [
    `You are a primary character. Blue Team wins if you do not gain the "toast" condition.`,
  ],
  team: "Blue",
  tags: ["toast", "group-king", "primary"],
};

export const BlueLoyalist: Role = {
  id: "blue-loyalist",
  name: "Loyalist",
  description: "",
  notes: [
    `You are immune to the "traitor" condition. Moreover, if anyone card shares with you they lose the "traitor" condition.`,
  ],
  team: "Blue",
  tags: ["traitor"],
};

export const BlueMadScientist: Role = {
  id: "blue-mad-scientist",
  name: "Mad Scientist",
  description: "",
  notes: [
    `You have the MAD SCIENTIST power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You MUST trade cards". Those two players must trade character cards. You can not use this power on yourself, but another Mad Scientist can use their MAD SCIENTIST power on you.`,
  ],
  team: "Blue",
  tags: ["MAD SCIENTIST", "private-reveal"],
};

export const BlueMarshal: Role = {
  id: "blue-marshal",
  name: "Marshal",
  description: "",
  notes: [
    `If you card share with the Fugitive, the game immediately ends. Blue Team wins.`,
  ],
  team: "Blue",
  tags: ["group-marshal"],
};

export const BlueMayor: Role = {
  id: "blue-mayor",
  name: "Mayor",
  description: "",
  notes: [
    `When you publicly reveal your card, your vote counts as two votes. This means that you can publicly reveal your card to count as two people for OR AGAINST the nomination of a new leader.`,
  ],
  team: "Blue",
  tags: ["public-reveal"],
};

export const BlueMedic: Role = {
  id: "blue-medic",
  name: "Medic",
  description: "",
  notes: [
    `You have the MEDIC power: any player that card shares with you has all "conditions" removed. For example, a player who has been "cursed" by a Mummy would no longer have the "cursed" condition after card sharing with you. This does not make yourself immune to acquiring conditions, as you might need to find the opposing Medic.`,
  ],
  team: "Blue",
  tags: ["MEDIC"],
};

export const BlueMime: Role = {
  id: "blue-mime",
  name: "Mime",
  description: "",
  notes: [`Do your best to not make any noise.`],
  team: "Blue",
  tags: [],
};

export const BlueMummy: Role = {
  id: "blue-mummy",
  name: "Mummy",
  description: "",
  notes: [
    `You have the MUMMY power: any player that card shares with you gains the "cursed" condition. "Cursed" players must from then on do their best to not make any noise.`,
    `Note: Because of the MUMMY power, "Cursed" players are prevented from using any powers or abilities that requires a verbalization (e.g. Agent, Rageaholic, and even Zombie).`,
  ],
  team: "Blue",
  tags: ["MUMMY", "cursed"],
};

export const BlueNegotiator: Role = {
  id: "blue-negotiator",
  name: "Negotiator",
  description: "",
  notes: [
    `You begin with the "savvy" condition. Players with the "savvy" condition may only card share. You may not publicly, privately, or color share.`,
    `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
  ],
  team: "Blue",
  tags: ["savvy"],
};

export const BlueNinja: Role = {
  id: "blue-ninja",
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
  team: "Blue",
  tags: ["NINJA"],
};

export const BlueNurse: Role = {
  id: "blue-nurse",
  name: "Nurse",
  description: "",
  notes: [
    `You are the backup character for the Doctor.`,
    `If the Doctor card is buried or the Doctor receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Doctor (card sharing with the President).`,
  ],
  team: "Blue",
  tags: ["group-president", "backup"],
};

export const BlueOneArmedMan: Role = {
  id: "blue-one-armed-man",
  name: "One-armed Man",
  description: "",
  notes: [
    `If you card share with the Witness, the game immediately ends. Blue Team wins.`,
  ],
  team: "Blue",
  tags: ["group-marshal"],
};

export const BluePaparazzo: Role = {
  id: "blue-paparazzo",
  name: "Paparazzo",
  description: "",
  notes: [
    `Do your best to make sure there are no private conversations. You must try to be as intrusive as possible, including looking over players' shoulders at their cards, and even getting on the ground to see the bottoms of cards being passed between players.`,
    `You can't physically manipulate other players, that is too rude. If playing with the Privacy Promise rule variant, ignore the rule as long as you publicly reveal your card to prove to others that you are permitted to be invasive.`,
  ],
  team: "Blue",
  tags: [],
};

export const BlueParanoid: Role = {
  id: "blue-paranoid",
  name: "Paranoid",
  description: "",
  notes: [
    `You begin with the "paranoid" condition. Players with the "paranoid" condition may only card share. Moreover, they may only card share once per game.`,
  ],
  team: "Blue",
  tags: ["paranoid", "once-per-game"],
};

export const BluePiper: Role = {
  id: "blue-piper",
  name: "Piper",
  description: "",
  notes: [
    `You have the PIPER power: any player that card shares with you gains the "piped" condition. Characters with the "piped" condition have an additional win condition. If players with the "piped" condition lose if they are not in the same room as the Piper player that provided them with the "piped" condition.`,
    `Note: a player can only have a single "piped" condition.`,
    `Another Note: it is possible that both Piper characters gain the "piped" condition.`,
  ],
  team: "Blue",
  tags: ["PIPER", "piped"],
};

export const BluePirate: Role = {
  id: "blue-pirate",
  name: "Pirate",
  description: "",
  notes: [
    `You have the PIRATE power: you may publicly reveal your Pirate card, pick any player in the room (besides yourself) and verbally and loudly tell them, "Argh, walk the plank". However, your card must permanently remain publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. Your target player gains the "blasted" condition. A player with the "blasted" condition must be one of the hostages exchanged at the end of the round.`,
    `If the PIRATE power is used during the last round, then that player is the single hostage. Note: If a player with the "blasted" condition were to acquire the "tackled" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["PIRATE", "public-reveal", "once-per-game", "blasted"],
};

export const BluePresidentsDaughter: Role = {
  id: "blue-presidents-daughter",
  name: "President's Daughter",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the President. If the President card is buried or the President receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the President (for example: ending the game in the opposite room as the Bomber, card sharing with the Doctor).`,
  ],
  team: "Blue",
  tags: ["group-president", "backup", "secondary"],
};

export const BlueProfessor: Role = {
  id: "blue-professor",
  name: "Professor",
  description: "",
  notes: [
    `Any player that card shares with you acquires the "savvy" condition. Players with the "savvy" condition may only card share. The "savvy" condition prevents the use of private reveal and color share powers.`,
    `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
  ],
  team: "Blue",
  tags: ["card-share", "savvy"],
};

export const BluePsychologist: Role = {
  id: "blue-psychologist",
  name: "Psychologist",
  description: "",
  notes: [
    `When you privately reveal your card to a character with the "shy" condition or the "coy" condition, that "shy" or "coy" character may then immediately card share with you, the Psychologist. If this is done, the "shy" and/or "coy" condition is removed. Furthermore, if someone with the "paranoid" condition card shares with you, the "paranoid" condition is removed.`,
  ],
  team: "Blue",
  tags: ["shy", "coy", "paranoid"],
};

export const BluePyrotech: Role = {
  id: "blue-pyrotech",
  name: "Pyrotech",
  description: "",
  notes: [
    `You have the PYROTECH power: card sharing with the Bomber provides the "firebomb" condition. If the Bomber has the "firebomb" condition at the end of the game, all players gain the "dead" condition (regardless of what room they are in).`,
  ],
  team: "Blue",
  tags: ["PYROTECH", "firebomb", "card-share", "group-president"],
};

export const BlueRageaholic: Role = {
  id: "blue-rageaholic",
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
  team: "Blue",
  tags: [],
};

export const BlueRat: Role = {
  id: "blue-rat",
  name: "Rat",
  description: "",
  notes: [
    `You have the RAT power: once per game you may publicly reveal your card to the entire room, then leave to the opposing room. However, your card must permanently remain publicly revealed for the rest of the game. While in the other room, you have the "immune" condition.`,
    `Players with the "immune" condition are immune to all powers and conditions without exception. While in the other room Rats can never take part in any vote (e.g. voting to nominate or usurp a leader) and can never be picked by leaders to be transferred into another room (or by other characters with such powers) as they are never actually counted as part of a room's population.`,
    `You must return to your original room before the end of the round or you automatically lose.`,
  ],
  team: "Blue",
  tags: ["RAT", "public-reveal"],
};

export const BlueSecretPolice: Role = {
  id: "blue-secret-police",
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
  team: "Blue",
  tags: [],
};

export const BlueSecurity: Role = {
  id: "blue-security",
  name: "Security",
  description: "",
  notes: [
    `You have the TACKLE power: you may publicly reveal your Security card, pick any player in the room (besides yourself) and verbally tell them, "You're going nowhere". However, your card must permanently remain publicly revealed for the rest of the game.`,
    `This means that you can only use this power once. If the target of your TACKLE power is not on the same team as you, they gain the "tackled" condition. "Tackled" players can't leave as a hostage this round.`,
    `If Security uses the TACKLE power on a member of their own team, then that teammate player gains the "torn" condition. A player with the "torn" condition must permanently publicly reveal their card regardless of any powers or acquired conditions. This permanent public reveal is a punishment for choosing a member of the same team.`,
    `Note: If a player with the "tackled" condition were to acquire the "blasted" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["TACKLE"],
};

export const BlueSeer: Role = {
  id: "blue-seer",
  name: "Seer",
  description: "",
  notes: [
    `Before the game begins, but after character cards have been dealt, everyone is to close their eyes and publicly reveal their cards for about 30 seconds. All players are to do this regardless of their character card's abilities, powers, and starting conditions.`,
    `Only the Seer characters may open their eyes and move freely throughout the play areas. Seer characters begin the game with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player. Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    `Tip: the best way to address Seer players getting to look at all players' cards is to have all players dealt their character cards before separating into the 2 separate rooms. Then have the 30 second mass public reveal, and then separate into separate rooms.`,
  ],
  team: "Blue",
  tags: [],
};

export const BlueShyGuy: Role = {
  id: "blue-shy-guy",
  name: "Shy Guy",
  description: "",
  notes: [
    `You begin with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
    `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
    `Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["shy"],
};

export const BlueTuesdayKnight: Role = {
  id: "blue-tuesday-knight",
  name: "Tuesday Knight",
  description: "",
  notes: [
    `You have the HUG power: if you card share with the Bomber, the game immediately ends. Blue Team wins. Note: the HUG power never works on the Martyr. If the Bomber is buried, the HUG power is never used.`,
  ],
  team: "Blue",
  tags: ["HUG", "bomber", "card-share"],
};

export const BlueXenohunter: Role = {
  id: "blue-xenohunter",
  name: "Xenohunter",
  description: "",
  notes: [
    `You have the XENOHUNTER power: after any member of the blue team publicly reveals their card to the entire room, you may give them your Xenohunter card.`,
    `The player to whom you give your Xenohunter card is removed from the game with your card. This means that using your XENOHUNTER power will permanently remove your card from the game, not you.`,
  ],
  team: "Blue",
  tags: ["group-xeno", "XENOHUNTER"],
};

export const Blue: Role = {
  id: "blue-",
  name: "",
  description: "",
  notes: [],
  team: "Blue",
  tags: [],
};
