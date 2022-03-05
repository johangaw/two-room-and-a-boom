import { Role } from "../types/domain";

type RoleTemplate = Omit<Role, "team" | "description" | "id">;

const templates: RoleTemplate[] = [
  {
    name: "Tentaclese",
    notes: [
      `You have the TENTACLE power: if you are in a room that has fewer players than the other room, you may leave your current room. You never count as a member of the opposing room while using the TENTACLE power. Upon entering the opposing room, you must IMMEDIATELY grab any player of your choosing.`,
      `Both you and that grabbed player return to the room from which you just left. In the case where the chosen player is a character who is unaffected by powers (example: the Immunologist), Tentaclese's power has been wasted and you must IMMEDIATELY grab a different player. If Tentaclese uses the TENTACLE power on a room's leader, the leader should immediately place the leader card on the ground.`,
      `At this point, a new leader is nominated in the same method as the first round. You may use the TENTACLE power during anytime EXCEPT FOR THE LAST ROUND. This can be done limitlessly.`,
      `Note: this card should only be included in the roleset if the two rooms do not have the same number of players in them.`,
    ],
    tags: ["TENTACLE"],
  },
  {
    name: "Thug",
    notes: [
      `You have the THUG power: any player that card shares with you acquires the "coy" condition. Players with the "coy" condition may only color share even when a character's power might force a card share.`,
      `Note: If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["THUG", "card-share", "coy"],
  },
  {
    name: "Time Lord",
    notes: [
      `You have the TIME power: publicly reveal your card at any time and verbally announce, "Time is up!" When calling the end of the round, being sure that both rooms hear the call to end the round. However, if you ever take longer than 5 minutes to call a round, you lose your TIME power.`,
      `Note: there is no need to keep time in a game if the Time Lord characters are in play except to prove that they have exceeded 5 minutes and lose their TIME power.`,
    ],
    tags: ["TIME"],
  },

  {
    name: "Trader",
    notes: [
      `You have the TRADE power: you may trade your card for the buried card. You may not peek at the buried card, only trade with it. You now assume all powers and the allegiance of your newly acquired card.`,
      `A single player can only use the TRADE power once per round. This means that even if a Trader trades their card for the other Trader card, they can't use the TRADE power again until the next round.`,
    ],
    tags: ["TRADE", "buried"],
  },

  {
    name: "Usurper",
    notes: [
      `You have the USURPER power: during any round but the last, you may publicly reveal your card and automatically become the leader. However, your card must permanently remain publicly revealed for the rest of the game.`,
      `This means that you can only use this power once. The Usurper cannot be usurped during the same round in which the Usurper stole leadership, not even by another Usurper. If 2 Usurpers use their power in the same room during the same round, whichever Usurper used their power first remains the leader, the other Usurper wasted their power.`,
    ],
    tags: ["USURPER"],
  },

  {
    name: "Vampire",
    notes: [
      `You have the SEDUCTIVE power: any player who card shares with you that has a color not of your own gains the "seduced" condition. All "seduced" players must do anything with their card that you ask of them and must vote for or against leaders as you do.`,
      `This means that a "seduced" player must color share with anyone you ask them to, publicly reveal their card if you request them to, and they must even vote to usurp the current leader if you do.`,
    ],
    tags: ["SEDUCTIVE", "seduced", "card-share"],
  },

  {
    name: "Voyeur",
    notes: [
      `At any time, you may look at the buried card.`,
      `Note: Voyeur characters should not have to prove that they are a Voyeur. If someone peeks at the buried card and they are not the Voyeur, they are cheating and should be hastily stoned.`,
    ],
    tags: ["buried"],
  },

  {
    name: "Werewolf",
    notes: [
      `You are considered one of the 2 alpha wolves and you have the WEREWOLF power: any player that card shares or color shares with you gains the "bitten" condition. Any player that card shares or color shares with a "bitten" player is then also "bitten". All "bitten" players must answer any question EITHER of the alpha wolves ask as honestly and informatively as possible.`,
      `Note: newly "bitten" players don't receive any special "bitten" cards or indicators. Therefore, it is important for players to indicate that they are "bitten" when card or color sharing with another.`,
      `Players need to also indicate which player is the known alpha wolf. This way all a newly "bitten" player knows whose questions must be answered honestly. This is usually done by whispering something along the lines of, "I'm bitten and now so are you. Ted is one of the alpha wolves, so if he asks you any questions, answer the best you can".`,
      `Another Note: if you have the "bitten" condition and you believe you are being asked a question by EITHER of the players that to your knowledge are alpha wolves, you must do your best to answer honestly. Therefore, there is a benefit to not knowing who the other team's alpha wolf is.`,
      `Note: asking players about what they plan to do in the future is a waste of a question. Changing your plans doesn't make you dishonest. It makes you fickle.`,
    ],
    tags: ["alpha", "bitten", "WEREWOLF", "card-share", "color-share"],
  },

  {
    name: "Agent",
    notes: [
      `You have the AGENT power: once per round, you may privately reveal your card to a player and force that player to card share with you. You must verbally say to the target player, "I'm using my AGENT power. You MUST reveal your card to me".`,
      `If used on a character that is unable to card share (e.g. has the "shy" condition or is a Paranoid character that has already card shared), the power is wasted. The target must prove they can't card share by verbally saying (even if "cursed") "I can't because (provide specific and honest (even if a Demon reason)".`,
    ],
    tags: ["AGENT"],
  },

  {
    name: "Alien",
    notes: [
      `You have the ABDUCTION power: you must keep the card of any character that card shares with you. You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card.`,
      `Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others or use any power that requires them to private, public, color or card share.`,
      `if an Alien card shares with the other Alien, then both players lose their cards to the other, thus losing their ABDUCTION ability.`,
    ],
    tags: ["abduction"],
  },

  {
    name: "Ambassador",
    notes: [
      `Before the game begins, but after character cards have been dealt, you must publicly announce "I am an Ambassador!" and keep your card publicly revealed for the rest of game. This public reveal is permanent.`,
      `Ambassadors have the "immune" condition. Players with the "immune" condition are immune to all powers and conditions without exception.`,
      `Ambassadors can walk freely between the two rooms. Ambassadors can never take part in any vote (e.g. voting to nominate or usurp a leader). Ambassadors can never be picked by leaders to be transferred into another room (or by other characters with such powers) as they are never actually counted as part of a room's population.`,
      `Note: because Ambassadors are never considered a part of a room's population, they don't count towards the player count in the game and they don't count for or against Team Zombie's win objective. This means if you have 18 players including the Ambassadors, you should be playing a 16 player game.`,
    ],
    tags: ["immune"],
  },

  {
    name: "Angel",
    notes: [
      `You begin with the "honest" condition. Players with the "honest" condition must always verbally tell the truth (unless you're "seduced", "hypnotized", or any other condition that may influence your ability to tell the truth). This means that you are permitted to lie as long as it is not verbally.`,
      `Note: If a player with the "honest" condition were to acquire the "liar" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["honest"],
  },

  {
    name: "Blind",
    notes: [
      `You begin with the "blind" condition. Players with the "blind" condition must do their best best to never open his or her eyes during the game. Don't worry, it is a short game.`,
      `Note: Blind players can still acquire conditions and have powers used upon them, but they should not be lied to about it.`,
    ],
    tags: ["blind"],
  },

  {
    name: "",
    notes: [],
    tags: [],
  },
];