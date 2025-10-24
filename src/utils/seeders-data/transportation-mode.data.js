const { v4 } = require("uuid");

const transportationModes = [
  {
    id: v4(),
    name: "Flight",
  },
  {
    id: v4(),
    name: "Car",
  },
  {
    id: v4(),
    name: "Train",
  },
  {
    id: v4(),
    name: "Bus",
  },
];

module.exports = { transportationModes };
