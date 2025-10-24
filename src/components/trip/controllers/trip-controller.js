const response = require("../../../utils/controller-response");
const TripService = require("../services/trip-service");

class TripController {
  static async createTrip(req, res) {
    try {
      const { statusCode, message, data } = await TripService.createTrip(
        req.user.user_id,
        req.body
      );
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Create trip controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getAllTrips(req, res) {
    try {
      const filters = {};
      if (req.query.user_id) filters.user_id = req.query.user_id;
      if (req.query.location_id) filters.location_id = req.query.location_id;
      if (req.query.status_id) filters.status_id = req.query.status_id;

      const { statusCode, message, data } = await TripService.getAllTrips(
        filters
      );
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get trips controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getTripById(req, res) {
    try {
      const { statusCode, message, data } = await TripService.getTripById(
        req.params.id
      );
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get trip controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async updateTrip(req, res) {
    try {
      const { statusCode, message, data } = await TripService.updateTrip(
        req.params.id,
        req.user.user_id,
        req.body
      );
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Update trip controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async deleteTrip(req, res) {
    try {
      const { statusCode, message, data } = await TripService.deleteTrip(
        req.params.id,
        req.user.user_id
      );
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Delete trip controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getTripsByUserId(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getTripsByUserId(req.params.id);
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get user trips controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getTripsByLocationId(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getTripsByLocationId(req.params.id);
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get location trips controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getAllTravellerTypes(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getAllTravellerTypes();
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get traveller types controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getAllTravelStyles(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getAllTravelStyles();
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get travel styles controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getAllTransportationModes(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getAllTransportationModes();
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get transportation modes controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }

  static async getAllAccommodationPreferences(req, res) {
    try {
      const { statusCode, message, data } =
        await TripService.getAllAccommodationPreferences();
      return response(res, statusCode, message, data);
    } catch (error) {
      console.error("Get accommodation preferences controller error:", error);
      return response(res, 500, "Something went wrong");
    }
  }
}

module.exports = TripController;
