const { Router } = require("express");
const tripController = require("../controllers/trip-controller");
const { validate } = require("../../../middlewares/validate-request");
const { userIdSchema } = require("../validators/trip-schema");
const {
  generalRateLimit,
} = require("../../../middlewares/security.middleware");

const router = Router();

router.use(generalRateLimit);

router.get(
  "/:id/trips",
  validate(userIdSchema(), "params"),
  tripController.getTripsByUserId
);

module.exports = router;
