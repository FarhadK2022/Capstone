const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const vehiclesRouter = require("./vehicles.js");
const reviewsRouter = require("./reviews.js");
const bookingsRouter = require("./bookings.js");
const vehicleImagesRouter = require("./vehicleImages.js");
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use("/vehicles", vehiclesRouter);

router.use("/reviews", reviewsRouter);

router.use("/bookings", bookingsRouter);

router.use("/vehicle-images", vehicleImagesRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
