const { v4 } = require("uuid");

const travelStyles = [
  {
    id: v4(),
    name: "Budget-Friendly",
    description: "Great value experiences",
  },
  {
    id: v4(),
    name: "Comfortable",
    description: "Balance of comfort and value",
  },
  {
    id: v4(),
    name: "Luxury",
    description: "Premium experiences",
  },
  {
    id: v4(),
    name: "Adventure",
    description: "Active and exciting",
  },
];

module.exports = { travelStyles };
