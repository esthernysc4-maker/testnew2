const { Router } = require("express");
const tripController = require("../controllers/trip-controller");
const { validate } = require("../../../middlewares/validate-request");
const { guard } = require("../../../middlewares/auth.middleware");
const {
  createTripSchema,
  updateTripSchema,
  tripIdSchema,
  userIdSchema,
  locationIdSchema,
} = require("../validators/trip-schema");
const {
  generalRateLimit,
} = require("../../../middlewares/security.middleware");
const { tokenSchema } = require("../../user/validators/auth-schema");

const router = Router();

router.use(generalRateLimit);

router.get("/traveller-types", tripController.getAllTravellerTypes);
router.get("/travel-styles", tripController.getAllTravelStyles);
router.get("/transportation-modes", tripController.getAllTransportationModes);
router.get("/accommodation-preferences", tripController.getAllAccommodationPreferences);

router.post(
  "/",
  validate(tokenSchema(), "headers"),
  guard,
  validate(createTripSchema(), "body"),
  tripController.createTrip
);

router.get("/", tripController.getAllTrips);

router.get(
  "/:id",
  validate(tripIdSchema(), "params"),
  tripController.getTripById
);

router.patch(
  "/:id",
  validate(tokenSchema(), "headers"),
  guard,
  validate(tripIdSchema(), "params"),
  validate(updateTripSchema(), "body"),
  tripController.updateTrip
);

router.delete(
  "/:id",
  validate(tokenSchema(), "headers"),
  guard,
  validate(tripIdSchema(), "params"),
  tripController.deleteTrip
);

module.exports = router;
