const { EntitySchema } = require("typeorm");

const AccommodationPreference = new EntitySchema({
  name: "AccommodationPreference",
  tableName: "accommodation_preferences",
  columns: {
    id: { type: "uuid", primary: true, generated: "uuid" },
    name: { type: "varchar", length: 100, nullable: false },
    description: { type: "varchar", length: 255, nullable: true },
    created_at: { type: "timestamp", createDate: true },
    updated_at: { type: "timestamp", updateDate: true },
  },
  relations: {
    trips: {
      type: "one-to-many",
      target: "Trip",
      inverseSide: "accommodationPreference",
    },
  },
});

module.exports = { AccommodationPreference };
