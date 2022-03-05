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
    name: "",
    notes: [],
    tags: [],
  },
];
