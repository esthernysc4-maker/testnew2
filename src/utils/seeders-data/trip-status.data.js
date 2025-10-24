const { v4 } = require("uuid");

const tripStatuses = [
  {
    id: v4(),
    trip_status: "Upcoming",
    description: "Trip is planned and upcoming",
  },
  {
    id: v4(),
    trip_status: "Ongoing",
    description: "Trip is currently in progress",
  },
  {
    id: v4(),
    trip_status: "Completed",
    description: "Trip has been completed",
  },
  {
    id: v4(),
    trip_status: "Cancelled",
    description: "Trip has been cancelled",
  },
  {
    id: v4(),
    trip_status: "Draft",
    description: "Trip is being planned",
  },
];

module.exports = { tripStatuses };
