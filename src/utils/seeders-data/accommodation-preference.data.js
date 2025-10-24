const { v4 } = require("uuid");

const accommodationPreferences = [
  {
    id: v4(),
    name: "Hotel",
    description: "Traditional hotel stay",
  },
  {
    id: v4(),
    name: "Apartment",
    description: "Private apartment rental",
  },
  {
    id: v4(),
    name: "Hostel",
    description: "Budget-friendly room",
  },
  {
    id: v4(),
    name: "Luxury Resort",
    description: "Premium resort experience",
  },
];

module.exports = { accommodationPreferences };
