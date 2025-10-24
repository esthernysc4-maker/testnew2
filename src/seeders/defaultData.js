const { seedEntity } = require("../utils/seed-utils");
const { Interest } = require("../components/trip/entities/interest");
const { UserType } = require("../components/user/entities/user-type");
const { TripTravellerType } = require("../components/trip/entities/trip-traveller-type");
const { TripStatus } = require("../components/trip/entities/trip-status");
const { TravelStyle } = require("../components/trip/entities/travel-style");
const { AccommodationPreference } = require("../components/trip/entities/accommodation-preference");
const { TripTransportationMode } = require("../components/trip/entities/trip-transportation-mode");
const { interests } = require("../utils/seeders-data/seed.data");
const { userRoles } = require("../utils/seeders-data/user-role.data");
const { travellerTypes } = require("../utils/seeders-data/traveller-type.data");
const { tripStatuses } = require("../utils/seeders-data/trip-status.data");
const { travelStyles } = require("../utils/seeders-data/travel-style.data");
const { accommodationPreferences } = require("../utils/seeders-data/accommodation-preference.data");
const { transportationModes } = require("../utils/seeders-data/transportation-mode.data");

const seedDefaultData = async () => {
  try {
    await seedEntity(Interest, interests, "name");
    await seedEntity(UserType, userRoles, "name");
    await seedEntity(TripTravellerType, travellerTypes, "name");
    await seedEntity(TripStatus, tripStatuses, "trip_status");
    await seedEntity(TravelStyle, travelStyles, "name");
    await seedEntity(AccommodationPreference, accommodationPreferences, "name");
    await seedEntity(TripTransportationMode, transportationModes, "name");
    console.log("✅ Default data seeded successfully");
  } catch (error) {
    console.error("Error seeding default data:", error);
  }
};

module.exports = { seedDefaultData };
