const { Router } = require("express");
const router = Router();
const authRouter = require("../components/user/routes/auth.routes");
const docsRouter = require("../documentation/route");
const onboardingRoute = require("../components/user/routes/onboarding-routes");
const tripRouter = require("../components/trip/routes/route");
const userTripsRouter = require("../components/trip/routes/user-trips-route");
const locationTripsRouter = require("../components/trip/routes/location-trips-route");

router.use("/onboarding", onboardingRoute);
router.use("/auth", authRouter);
router.use("/docs", docsRouter);
router.use("/trips", tripRouter);
router.use("/users", userTripsRouter);
router.use("/locations", locationTripsRouter);

module.exports = router;
