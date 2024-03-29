import { Role, Team } from "../types/domain";

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
    name: "Body Snatcher",
    notes: [
      `You have the BODY SNATCHER power: if anyone card shares with your Body Snatcher card, they must give you their character card. Cards captured in this way are considered your face cards. You may show any face card you wish in future private, public, color, and card shares as long as you still have a Body Snatcher card (even if it is not your own).`,
      `However, you gain neither the allegiance nor the powers of any acquired face cards, including any characters with powers that activate during a reveal. Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others or use any power that requires them to private, public, color or card share.`,
      `Note: if a Body Snatcher card shares with the other Body Snatcher, and both used their Body Snatcher card when doing so, then both players lose their Body Snatcher cards to the other.`,
      `However, both of these players may continue to show other players the face cards they've acquired, but neither player can continue to collect cards.`,
      `Another more confusing note: when using face cards that have powers, you should not allow players to believe your power has influence over them.`,
      `Note about primary characters: remember that characters still retain their abilities and powers. This means that the Bomber still provides everyone with the "dead" condition at the end of the game with or without his/her card. The President is still the President with or without his/her card.`,
    ],
    tags: ["BODY SNATCHER"],
  },
  {
    name: "Bouncer",
    notes: [
      `You have the BOUNCER power: if you are in a room that has more players than the other room, you may privately reveal your card to any player and verbally tell them, "get out!"`,
      `When you do, that player must immediately change rooms. You may do this at any time EXCEPT FOR THE LAST ROUND. This can be done limitlessly, but never to a room's leader.`,
      `Note: this card should only be included in the roleset if the two rooms do not have the same number of players in them.`,
    ],
    tags: ["BOUNCER"],
  },
  {
    name: "Bully",
    notes: [
      `You have the BULLY power: when a player agrees to color share with you, private reveal instead. They must private reveal their card too.`,
      `Note: The Bully forces a private reveal, not a card share.`,
    ],
    tags: ["BULLY"],
  },
  {
    name: "Centipede",
    notes: [
      `You have the CENTIPEDE power: any player that card shares with you gains the "attached" condition. Any "attached" player that becomes separated from you (meaning they are no longer in the same room as you) loses the "attached" condition and replaces it with the "torn" condition.`,
      `Players with the "torn" condition must permanently publicly reveal their card regardless of any powers or acquired conditions. Heck, they might as well just stick their card on their forehead.`,
      `Note: if a player is no longer the Centipede (e.g. after card sharing with the Leprechaun), players with the "attached" condition remain "attached" to you.`,
    ],
    tags: ["CENTIPEDE", "attached", "torn"],
  },
  {
    name: "Cleaner",
    notes: [
      `You have the CLEANSE power: you cleanse any player that card shares with you. This means that any player that card shares with you has all of their acquired conditions removed from them. For example, a player who has been "cursed" by a Mummy would no longer have the "cursed" condition after card sharing with you.`,
      `This does not make yourself immune to acquiring conditions, as you might need to find the opposing Cleaner.`,
    ],
    tags: ["CLEANSE"],
  },
  {
    name: "Clown",
    notes: ["Do your best to smile at all times."],
    tags: [],
  },
  {
    name: "Conspirator",
    notes: [
      `You have the CONSPIRATOR power: any player that card shares with you and has the opposite team's win objective (example: blue Conspirator card sharing with a red aligned character) gains the "traitor" condition. A player with the "traitor" condition has their win objective changed to that of the opposing team.`,
      `For example, a Blue Team player with the "traitor" condition wins if the President gains the "dead" condition (which is the win objective of the Blue Team). The CONSPIRATOR power does not work on players that are not red or blue aligned, primary characters, and secondary characters (e.g. grey character, President, Bomber, President's Daughter, Martyr, Blue Drone, etc)..`,
      `Note: a single player can only gain a single "traitor" condition.`,
    ],
    tags: ["CONSPIRATOR", "traitor"],
  },
  {
    name: "Coy Boy",
    notes: [
      `You begin with the "coy" condition. Players with the "coy" condition may ONLY color share even when a character's power might force a card share. A Coy Boy can't card share, privately reveal, or publicly reveal their card or their color.`,
      `Note: "Coy" players can card share their cards to Psychologists after a Psychologist player has privately revealed their card to the "coy" player.`,
      `Another Note: If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["coy", "psychologists"],
  },
  {
    name: "Criminal",
    notes: [
      `You have the CRIMINAL power: any player that card shares with you gains the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
      `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["CRIMINAL", "shy"],
  },
  {
    name: "Dealer",
    notes: [
      `You have the DEALER power: any player that card shares with you gains the "foolish" condition. Players with the "foolish" condition can never turn down an offer to card share.`,
      `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["DEALER", "foolish", "card-share"],
  },
  {
    name: "Demon",
    notes: [
      `You begin with the "liar" condition. Players with the "liar" condition must always verbally tell the lie (unless you're "seduced", "hypnotized", or any other condition that may influence your ability to tell the truth). This means that you are permitted to communicate the truth as long as it is not verbally.`,
      `Note: If a player with the "honest" condition were to acquire the "liar" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["liar"],
  },
  {
    name: "Enforcer",
    notes: [
      `You have the ENFORCER power: once per round, you may privately reveal your card to two players. You must verbally say to your target players, "You must reveal your card to one another". Those two players must card share to one another (not to you). You cannot use this power on yourself, but another Enforcer can use their power on you.`,
      `Note: If used on a character that is unable to card share (e.g. has the "shy" condition), the power is wasted. The target must prove they can't card share by verbally saying (even if "cursed") "I can't because I am (name specific condition)".`,
    ],
    tags: ["ENFORCER", "once-per-round", "private-reveal"],
  },
  {
    name: "Enlisted",
    notes: [
      `You have the ENLIST power: during any round but the last, you may publicly reveal your card and automatically become one of the hostages for the end of that round. However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once.`,
      `The Enlisted must be a hostage during the same round in which the ENLIST power was used. If 2 Enlisted characters use their power in the same room during the same round and there is only 1 hostage position available, whichever Enlisted used their power first is to be the hostage, the other Enlisted character wasted their ENLIST power.`,
    ],
    tags: ["ENLIST", "public-reveal", "once-per-game"],
  },
  {
    name: "Hunter",
    notes: [
      `Take a player's character card anytime they attempt to use a card share power on you. You, the Hunter, are not affected by that player's card share power. You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card.`,
      `For example, if a Vampire card shares with you, the Vampire has no effect on you, but you get to keep the player's Vampire card. If 2 Hunters card share, nothing happens. Players whose cards were stolen maintain their powers and allegiance, but have obviously lost all ability to share their cards with others.`,
      `Note: the Clone's CLONE power still works even when encountering the Hunter.`,
    ],
    tags: ["card-share"],
  },
  {
    name: "Hypnotist",
    notes: [
      `You have the HYPNOTIST power: any player that card shares with you gains the "HYPNOTIST" condition. "Hypnotized" players must act as if they are the character that you suggest. You initiate hypnotism by saying, "You think you are the ________". You can only make a character suggestion at the time of the hypnotism (the card share). "Hypnotized" players do not gain nor lose their power or allegiance.`,
      `Note: this requires a bit of acting on the part of the "hypnotized" player as they are now to believe that their character card is actually the character card the Hypnotist suggests.`,
    ],
    tags: ["HYPNOTIST", "hypnotized", "card-share"],
  },
  {
    name: "Identity Thief",
    notes: [
      `Any player that card shares with you trades cards with you and then acquires the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
      `The player with whom you traded cards is now considered the "Shy Identity Thief" and assumes the allegiance of the Identity Thief card. You, however, assume the powers, allegiance, win objectives, and all starting conditions of the newly stolen card as if you were dealt that character card at the beginning of the game.`,
      `If the 2 Identity Thief characters card share with one another, they trade cards, both gain the "shy" condition, and both trade their allegiances (red becomes blue and blue become red).`,
      `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
      `Another Note: If a player with the "shy" condition were to acquire the "foolish" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["shy", "card-share"],
  },
  {
    name: "Immunologist",
    notes: [
      `You begin with the "immune" condition. Players with the "immune" condition are immune to all powers and conditions without exception.`,
      `Note: players should never lie about having the "immune" condition. If this becomes a problem an Immunologist might have to provide a private reveal to prove that they are indeed immune to a power or condition and you should get better friends.`,
    ],
    tags: ["immune"],
  },
  {
    name: "Informer",
    notes: [
      `When a player of the opposing color (i.e. red when you're blue, or blue when you're on red team) privately reveals their card to you and verbally says, "Take my card", you MUST take that player's card.`,
      `You are not permitted to do anything with acquired cards, including showing the cards to others or using powers associated with the card. If, at the end of the last round, if the red and blue teams tie (both win or both lose) then team whose Informer has more cards loses.`,
      `For example: Both the Red Fist and the President are destroyed by the Blue Drone and the Bomber. The red Informer acquired 3 cards during the game. The blue Informer acquired 2 cards during the game. Red Team loses, Blue Team wins.`,
    ],
    tags: [],
  },
  {
    name: "Interrogator",
    notes: [
      `You have the INTERROGATE power: once per round you may privately reveal to any player in the room and ask them a single yes/no question to which they must answer honestly. If they sincerely don't know the answer to the question, then they should indicate such.`,
      `Answering doesn't have to be verbal (though it can be). The recipient of the INTERROGATE power can answer with a simple nod of the head, headshake, or shrug of the shoulders.`,
      `When using the Interrogate ability, you must verbally announce to your target player, "I am using my Interrogate ability", as you privately reveal your card to them.`,
      `Note: asking players about what they plan to do in the future is a waste of a question. Changing your plans doesn't make you dishonest. It makes you fickle.`,
    ],
    tags: ["INTERROGATE"],
  },
  {
    name: "Kangaroo",
    notes: [
      `You have the SWITCH-A-ROO power: during any round but the last, you may publicly reveal your card. You must then immediately leave your current room. Upon entering the opposing room, you must IMMEDIATELY choose any player, show them your publicly revealed card and verbally tell them, "I'm kicking you out".`,
      `You stay, but your target player must immediately leave the current room and go into the opposing room. After using the SWITCH-A-ROO power, your card must remain permanently publicly revealed for the rest of the game.`,
      `This means that you can only use this power once. If the player you chose to remove from the room was the leader, the leader should immediately place the leader card on the ground. At this point, a new leader is nominated in the same method as in the first round.`,
    ],
    tags: ["SWITCH-A-ROO", "public-reveal"],
  },
  {
    name: "Loyalist",
    notes: [
      `You are immune to the "traitor" condition. Moreover, if anyone card shares with you they lose the "traitor" condition.`,
    ],
    tags: ["traitor"],
  },
  {
    name: "Mad Scientist",
    notes: [
      `You have the MAD SCIENTIST power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You MUST trade cards". Those two players must trade character cards. You can not use this power on yourself, but another Mad Scientist can use their MAD SCIENTIST power on you.`,
    ],
    tags: ["MAD SCIENTIST", "private-reveal"],
  },
  {
    name: "Mayor",
    notes: [
      `When you publicly reveal your card, your vote counts as two votes. This means that you can publicly reveal your card to count as two people for OR AGAINST the nomination of a new leader.`,
    ],
    tags: ["public-reveal"],
  },
  {
    name: "Medic",
    notes: [
      `You have the MEDIC power: any player that card shares with you has all "conditions" removed. For example, a player who has been "cursed" by a Mummy would no longer have the "cursed" condition after card sharing with you. This does not make yourself immune to acquiring conditions, as you might need to find the opposing Medic.`,
    ],
    tags: ["MEDIC"],
  },
  {
    name: "Mime",
    notes: [`Do your best to not make any noise.`],
    tags: [],
  },
  {
    name: "Mummy",
    notes: [
      `You have the MUMMY power: any player that card shares with you gains the "cursed" condition. "Cursed" players must from then on do their best to not make any noise.`,
      `Note: Because of the MUMMY power, "Cursed" players are prevented from using any powers or abilities that requires a verbalization (e.g. Agent, Rageaholic, and even Zombie).`,
    ],
    tags: ["MUMMY", "cursed"],
  },
  {
    name: "Negotiator",
    notes: [
      `You begin with the "savvy" condition. Players with the "savvy" condition may only card share. You may not publicly, privately, or color share.`,
      `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
    ],
    tags: ["savvy"],
  },
  {
    name: "Ninja",
    notes: [
      `The Ninja has the NINJA power: during any round but the last, you may publicly reveal your card. You must then immediately leave your current room. Upon entering the opposing room, you must IMMEDIATELY grab any player you choose in that room.`,
      `Both you and the chosen player are removed from the game (but do NOT gain the "dead" condition). In the case where the chosen player is a character who is unaffected by powers (example: the Immunologist), the Ninja's power has been wasted and the Ninja leaves the game alone.`,
      `Removed characters still win or lose based upon their team or character's win objective. Backup characters become active if their corresponding characters are removed from the game (e.g. the Nurse becomes the Doctor if the Ninja removes the Doctor from the game).`,
      `If the Ninja uses the NINJA power on a room's leader, the leader should immediately place the leader card on the ground. At this point, a new leader is nominated in the same method as the first round.`,
      `Note: if a primary character (President or Bomber) and its corresponding backup character (President's Daughter or Martyr) are both removed from the game, the opposing team automatically wins.`,
      `Another Note: If the leader of a room is removed, the room must nominate a new leader as in the first round. Note: because Ninjas and the targets of their NINJA power are removed from a room's population, the player count for the sake of hostages should always be 4 less than the amount of starting players. This means if you have 18 players including the Ninjas, you should be playing a 14 player game.`,
    ],
    tags: ["NINJA"],
  },
  {
    name: "Paparazzo",
    notes: [
      `Do your best to make sure there are no private conversations. You must try to be as intrusive as possible, including looking over players' shoulders at their cards, and even getting on the ground to see the bottoms of cards being passed between players.`,
      `You can't physically manipulate other players, that is too rude. If playing with the Privacy Promise rule variant, ignore the rule as long as you publicly reveal your card to prove to others that you are permitted to be invasive.`,
    ],
    tags: [],
  },
  {
    name: "Paranoid",
    notes: [
      `You begin with the "paranoid" condition. Players with the "paranoid" condition may only card share. Moreover, they may only card share once per game.`,
    ],
    tags: ["paranoid", "once-per-game"],
  },
  {
    name: "Piper",
    notes: [
      `You have the PIPER power: any player that card shares with you gains the "piped" condition. Characters with the "piped" condition have an additional win condition. If players with the "piped" condition lose if they are not in the same room as the Piper player that provided them with the "piped" condition.`,
      `Note: a player can only have a single "piped" condition.`,
      `Another Note: it is possible that both Piper characters gain the "piped" condition.`,
    ],
    tags: ["PIPER", "piped"],
  },
  {
    name: "Pirate",
    notes: [
      `You have the PIRATE power: you may publicly reveal your Pirate card, pick any player in the room (besides yourself) and verbally and loudly tell them, "Argh, walk the plank". However, your card must permanently remain publicly revealed for the rest of the game.`,
      `This means that you can only use this power once. Your target player gains the "blasted" condition. A player with the "blasted" condition must be one of the hostages exchanged at the end of the round.`,
      `If the PIRATE power is used during the last round, then that player is the single hostage. Note: If a player with the "blasted" condition were to acquire the "tackled" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["PIRATE", "public-reveal", "once-per-game", "blasted"],
  },
  {
    name: "Professor",
    notes: [
      `Any player that card shares with you acquires the "savvy" condition. Players with the "savvy" condition may only card share. The "savvy" condition prevents the use of private reveal and color share powers.`,
      `Note: it is possible for "savvy" players to acquire conditions that prevent card sharing (e.g. "coy"). If this happens, then the "savvy" player can no longer perform any of the 4 types of reveals (card share, color share, private reveal, or public reveal).`,
    ],
    tags: ["card-share", "savvy"],
  },
  {
    name: "Psychologist",
    notes: [
      `When you privately reveal your card to a character with the "shy" condition or the "coy" condition, that "shy" or "coy" character may then immediately card share with you, the Psychologist. If this is done, the "shy" and/or "coy" condition is removed. Furthermore, if someone with the "paranoid" condition card shares with you, the "paranoid" condition is removed.`,
    ],
    tags: ["shy", "coy", "paranoid"],
  },
  {
    name: "Rageaholic",
    notes: [
      `You have an alternative win objective. If you...`,
      `* are a room's leader`,
      `* have already selected your hostages`,
      `* are between rounds (the time between the end of a round and the beginning of the next round)`,
      `* and are waiting for the other room's leader during parlay … then you may begin yelling "I'm a raging one! I'm a raging two! I'm a raging three!..". and so on until either the other leader shows up for parlay or you get to "I'm a raging ten!" If you get to and complete yelling "I'm a raging ten!" then you win and all other players lose (including the opposing Rageaholic character).`,
      `Note: when yelling during parlay, you should be loud enough that both rooms can hear you.`,
    ],
    tags: [],
  },
  {
    name: "Rat",
    notes: [
      `You have the RAT power: once per game you may publicly reveal your card to the entire room, then leave to the opposing room. However, your card must permanently remain publicly revealed for the rest of the game. While in the other room, you have the "immune" condition.`,
      `Players with the "immune" condition are immune to all powers and conditions without exception. While in the other room Rats can never take part in any vote (e.g. voting to nominate or usurp a leader) and can never be picked by leaders to be transferred into another room (or by other characters with such powers) as they are never actually counted as part of a room's population.`,
      `You must return to your original room before the end of the round or you automatically lose.`,
    ],
    tags: ["RAT", "public-reveal"],
  },
  {
    name: "Secret Police",
    notes: [
      `You have an alternative win objective. While the Secret Police are in play, doing any action that could be deemed gameplay between rounds is strictly prohibited.`,
      `If any players discuss gameplay or attempt to do any form of card sharing or revealing, you (the Secret Police) may point to the player that is gameplaying between rounds, publicly reveal your card (like its a badge) and yell, "Secret Police!`,
      `You're under arrest!" As long as 1 other player in the game can verify that gameplay was indeed occurring between rounds, you win and all other players lose (including the opposing Secret Police character).`,
      `Note: When playing with the Secret Police it is important that all players understand when a round begins and when it ends. If players are having difficulty understanding this, remember that declaring "The round is over!" is not considered gameplay.`,
      `Another Note: Between rounds is the time between the end of a round and the beginning of the next round. This is the time when leaders parlay, swap hostages, and begin the next round.`,
      `Yet another Note: Tip: The easiest way to be sure that the Secret Police do not win is to remain silent and still between rounds.`,
      `Warning: A leader selecting hostages after a round's time has expired IS CONSIDERED GAMEPLAY! Leader's should be well prepared.`,
    ],
    tags: [],
  },
  {
    name: "Security",
    notes: [
      `You have the TACKLE power: you may publicly reveal your Security card, pick any player in the room (besides yourself) and verbally tell them, "You're going nowhere". However, your card must permanently remain publicly revealed for the rest of the game.`,
      `This means that you can only use this power once. If the target of your TACKLE power is not on the same team as you, they gain the "tackled" condition. "Tackled" players can't leave as a hostage this round.`,
      `If Security uses the TACKLE power on a member of their own team, then that teammate player gains the "torn" condition. A player with the "torn" condition must permanently publicly reveal their card regardless of any powers or acquired conditions. This permanent public reveal is a punishment for choosing a member of the same team.`,
      `Note: If a player with the "tackled" condition were to acquire the "blasted" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["TACKLE"],
  },
  {
    name: "Seer",
    notes: [
      `Before the game begins, but after character cards have been dealt, everyone is to close their eyes and publicly reveal their cards for about 30 seconds. All players are to do this regardless of their character card's abilities, powers, and starting conditions.`,
      `Only the Seer characters may open their eyes and move freely throughout the play areas. Seer characters begin the game with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
      `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player. Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
      `Tip: the best way to address Seer players getting to look at all players' cards is to have all players dealt their character cards before separating into the 2 separate rooms. Then have the 30 second mass public reveal, and then separate into separate rooms.`,
    ],
    tags: [],
  },
  {
    name: "Shy Guy",
    notes: [
      `You begin with the "shy" condition. Players with the "shy" condition may not reveal any part of their card to any player.`,
      `Note: "Shy" players can card share their cards to psychologists after a psychologist player has privately revealed their card to the "shy" player.`,
      `Another Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
    ],
    tags: ["shy"],
  },
  {
    name: "Spy",
    notes: ["You card is Blue but you are actually on the Red team"],
    tags: [],
  },
];

const getId = (name: string, team: Team): string =>
  `${team.toLocaleLowerCase()}-${name.toLowerCase().replaceAll(" ", "-")}`;

const byName = <T extends { name: string }>(l: T, r: T): number =>
  l.name.localeCompare(r.name);

export const sharedRoles: Role[] = templates.sort(byName).flatMap((template) =>
  (["Red", "Blue"] as Team[]).map((team) => ({
    ...template,
    id: getId(template.name, team),
    description: "",
    team,
  }))
);
