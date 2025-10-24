const { v4 } = require("uuid");

const travellerTypes = [
  {
    id: v4(),
    name: "Solo",
    description: "Just me",
  },
  {
    id: v4(),
    name: "Couple",
    description: "Me + 1",
  },
  {
    id: v4(),
    name: "Family",
    description: "Family trip",
  },
  {
    id: v4(),
    name: "Group",
    description: "Group of friends",
  },
  {
    id: v4(),
    name: "Business",
    description: "Work travel",
  },
];

module.exports = { travellerTypes };
