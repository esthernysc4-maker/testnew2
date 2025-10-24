const CustomResponse = require("../../../utils/custom-response");
const TripRepository = require("../repositories/trip-repository");
const TravellerTypeRepository = require("../repositories/traveller-type-repository");
const TravelStyleRepository = require("../repositories/travel-style-repository");
const TransportationModeRepository = require("../repositories/transportation-mode-repository");
const AccommodationPreferenceRepository = require("../repositories/accommodation-preference-repository");
const UserRepository = require("../../user/repositories/user-repository");

class TripService extends CustomResponse {
  constructor(statusCode, message, data) {
    super(statusCode, message, data);
  }

  static async createTrip(userId, body) {
    try {
      const user = await UserRepository.findById(userId);
      if (!user) {
        return this.response(404, "User not found");
      }

      const tripData = {
        ...body,
        user: { user_id: userId },
      };

      if (body.travel_style_id) {
        tripData.travelStyle = { id: body.travel_style_id };
      }

      if (body.location_id) {
        tripData.location = { id: body.location_id };
      }

      if (body.trip_frequency_id) {
        tripData.tripFrequency = { id: body.trip_frequency_id };
      }

      if (body.traveller_type_id) {
        tripData.travellerType = { id: body.traveller_type_id };
      }

      if (body.trip_status_id) {
        tripData.tripStatus = { id: body.trip_status_id };
      }

      if (body.trip_transportation_mode_id) {
        tripData.transportationMode = { id: body.trip_transportation_mode_id };
      }

      if (body.accommodation_preference_id) {
        tripData.accommodationPreference = { id: body.accommodation_preference_id };
      }

      const trip = await TripRepository.create(tripData);

      return this.response(201, "Trip created successfully", trip);
    } catch (error) {
      console.error("Create trip error:", error);
      return this.response(500, "Failed to create trip");
    }
  }

  static async getAllTrips(filters) {
    try {
      const trips = await TripRepository.findAll(filters);
      return this.response(200, "Trips retrieved successfully", trips);
    } catch (error) {
      console.error("Get trips error:", error);
      return this.response(500, "Failed to retrieve trips");
    }
  }

  static async getTripById(id) {
    try {
      const trip = await TripRepository.findById(id);
      if (!trip) {
        return this.response(404, "Trip not found");
      }
      return this.response(200, "Trip retrieved successfully", trip);
    } catch (error) {
      console.error("Get trip error:", error);
      return this.response(500, "Failed to retrieve trip");
    }
  }

  static async updateTrip(id, userId, body) {
    try {
      const trip = await TripRepository.findById(id);
      if (!trip) {
        return this.response(404, "Trip not found");
      }

      if (trip.user.user_id !== userId) {
        return this.response(403, "You are not authorized to update this trip");
      }

      const updateData = { ...body };

      if (body.travel_style_id) {
        updateData.travelStyle = { id: body.travel_style_id };
      }

      if (body.location_id) {
        updateData.location = { id: body.location_id };
      }

      if (body.trip_frequency_id) {
        updateData.tripFrequency = { id: body.trip_frequency_id };
      }

      if (body.traveller_type_id) {
        updateData.travellerType = { id: body.traveller_type_id };
      }

      if (body.trip_status_id) {
        updateData.tripStatus = { id: body.trip_status_id };
      }

      if (body.trip_transportation_mode_id) {
        updateData.transportationMode = { id: body.trip_transportation_mode_id };
      }

      if (body.accommodation_preference_id) {
        updateData.accommodationPreference = { id: body.accommodation_preference_id };
      }

      const updatedTrip = await TripRepository.updateById(id, updateData);
      const fullTrip = await TripRepository.findById(id);

      return this.response(200, "Trip updated successfully", fullTrip);
    } catch (error) {
      console.error("Update trip error:", error);
      return this.response(500, "Failed to update trip");
    }
  }

  static async deleteTrip(id, userId) {
    try {
      const trip = await TripRepository.findById(id);
      if (!trip) {
        return this.response(404, "Trip not found");
      }

      if (trip.user.user_id !== userId) {
        return this.response(403, "You are not authorized to delete this trip");
      }

      await TripRepository.deleteById(id);
      return this.response(200, "Trip deleted successfully");
    } catch (error) {
      console.error("Delete trip error:", error);
      return this.response(500, "Failed to delete trip");
    }
  }

  static async getTripsByUserId(userId) {
    try {
      const trips = await TripRepository.findByUserId(userId);
      return this.response(200, "User trips retrieved successfully", trips);
    } catch (error) {
      console.error("Get user trips error:", error);
      return this.response(500, "Failed to retrieve user trips");
    }
  }

  static async getTripsByLocationId(locationId) {
    try {
      const trips = await TripRepository.findByLocationId(locationId);
      return this.response(
        200,
        "Location trips retrieved successfully",
        trips
      );
    } catch (error) {
      console.error("Get location trips error:", error);
      return this.response(500, "Failed to retrieve location trips");
    }
  }

  static async getAllTravellerTypes() {
    try {
      const travellerTypes = await TravellerTypeRepository.findAll();
      return this.response(
        200,
        "Traveller types retrieved successfully",
        travellerTypes
      );
    } catch (error) {
      console.error("Get traveller types error:", error);
      return this.response(500, "Failed to retrieve traveller types");
    }
  }

  static async getAllTravelStyles() {
    try {
      const travelStyles = await TravelStyleRepository.findAll();
      return this.response(
        200,
        "Travel styles retrieved successfully",
        travelStyles
      );
    } catch (error) {
      console.error("Get travel styles error:", error);
      return this.response(500, "Failed to retrieve travel styles");
    }
  }

  static async getAllTransportationModes() {
    try {
      const transportationModes = await TransportationModeRepository.findAll();
      return this.response(
        200,
        "Transportation modes retrieved successfully",
        transportationModes
      );
    } catch (error) {
      console.error("Get transportation modes error:", error);
      return this.response(500, "Failed to retrieve transportation modes");
    }
  }

  static async getAllAccommodationPreferences() {
    try {
      const accommodationPreferences = await AccommodationPreferenceRepository.findAll();
      return this.response(
        200,
        "Accommodation preferences retrieved successfully",
        accommodationPreferences
      );
    } catch (error) {
      console.error("Get accommodation preferences error:", error);
      return this.response(500, "Failed to retrieve accommodation preferences");
    }
  }
}

module.exports = TripService;
