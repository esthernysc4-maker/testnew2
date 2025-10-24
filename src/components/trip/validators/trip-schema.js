const joi = require("joi");

module.exports = {
  createTripSchema: () => {
    return joi.object({
      trip_name: joi.string().max(100).optional().allow("").messages({
        "string.max": "Trip name cannot exceed 100 characters",
      }),
      trip_destination: joi.string().max(100).optional().allow("").messages({
        "string.max": "Trip destination cannot exceed 100 characters",
      }),
      trip_start_date: joi.date().optional().messages({
        "date.base": "Invalid start date format",
      }),
      trip_end_date: joi.date().min(joi.ref("trip_start_date")).optional().messages({
        "date.base": "Invalid end date format",
        "date.min": "End date must be after start date",
      }),
      trip_amount: joi.number().min(0).optional().messages({
        "number.min": "Trip amount cannot be negative",
      }),
      trip_currency: joi.string().max(10).optional().messages({
        "string.max": "Currency code cannot exceed 10 characters",
      }),
      travel_style_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid travel style ID",
      }),
      location_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid location ID",
      }),
      trip_frequency_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid trip frequency ID",
      }),
      traveller_type_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid traveller type ID",
      }),
      trip_status_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid trip status ID",
      }),
      trip_transportation_mode_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid transportation mode ID",
      }),
      accommodation_preference_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid accommodation preference ID",
      }),
    });
  },

  updateTripSchema: () => {
    return joi.object({
      trip_name: joi.string().max(100).optional().allow("").messages({
        "string.max": "Trip name cannot exceed 100 characters",
      }),
      trip_destination: joi.string().max(100).optional().allow("").messages({
        "string.max": "Trip destination cannot exceed 100 characters",
      }),
      trip_start_date: joi.date().optional().messages({
        "date.base": "Invalid start date format",
      }),
      trip_end_date: joi.date().optional().messages({
        "date.base": "Invalid end date format",
      }),
      trip_amount: joi.number().min(0).optional().messages({
        "number.min": "Trip amount cannot be negative",
      }),
      trip_currency: joi.string().max(10).optional().messages({
        "string.max": "Currency code cannot exceed 10 characters",
      }),
      trip_review_text: joi.string().max(255).optional().allow("").messages({
        "string.max": "Review text cannot exceed 255 characters",
      }),
      trip_review_star_number: joi.number().integer().min(1).max(5).optional().messages({
        "number.min": "Rating must be between 1 and 5",
        "number.max": "Rating must be between 1 and 5",
      }),
      travel_style_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid travel style ID",
      }),
      location_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid location ID",
      }),
      trip_frequency_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid trip frequency ID",
      }),
      traveller_type_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid traveller type ID",
      }),
      trip_status_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid trip status ID",
      }),
      trip_transportation_mode_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid transportation mode ID",
      }),
      accommodation_preference_id: joi.string().uuid().optional().messages({
        "string.guid": "Invalid accommodation preference ID",
      }),
    });
  },

  tripIdSchema: () => {
    return joi.object({
      id: joi.string().uuid().required().messages({
        "string.guid": "Invalid trip ID format",
        "any.required": "Trip ID is required",
      }),
    });
  },

  userIdSchema: () => {
    return joi.object({
      id: joi.string().uuid().required().messages({
        "string.guid": "Invalid user ID format",
        "any.required": "User ID is required",
      }),
    });
  },

  locationIdSchema: () => {
    return joi.object({
      id: joi.string().uuid().required().messages({
        "string.guid": "Invalid location ID format",
        "any.required": "Location ID is required",
      }),
    });
  },
};
