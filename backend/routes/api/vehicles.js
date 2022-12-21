const express = require("express");
const router = express.Router();
const {
  Vehicle,
  VehicleImage,
  Review,
  User,
  Booking,
  sequelize,
} = require("../../db/models");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

//Get all vehicles
router.get("/", async (req, res) => {
  let { page, size } = req.query;

  page = parseInt(page);
  size = parseInt(size);

  if (Number.isNaN(page)) page = 1;
  if (Number.isNaN(size)) size = 20;

  const Vehicles = await Vehicle.findAll();

  for (let vehicle of Vehicles) {
    let reviews = await Review.sum("stars", {
      where: { vehicleId: vehicle.id },
    });
    let count = await Review.count({ where: { vehicleId: vehicle.id } });
    let images = await VehicleImage.findOne({
      where: { vehicleId: vehicle.id },
    });

    let averageStars = reviews / count;
    vehicle.dataValues.avgRating = averageStars;

    if (images.preview === true) {
      vehicle.dataValues.previewImage = images.url;
    } else {
      vehicle.dataValues.previewImage = null;
    }
  }
  res.status(200);
  res.json({ Vehicles, page, size });
});

//Get all vehicles owned by the Current User
router.get("/current", restoreUser, async (req, res) => {
  const Vehicles = await Vehicle.findAll({ where: { ownerId: req.user.id } });

  for (let vehicle of Vehicles) {
    let reviews = await Review.sum("stars", {
      where: { vehicleId: vehicle.id },
    });
    let count = await Review.count({ where: { vehicleId: vehicle.id } });
    let image = await VehicleImage.findOne({
      where: { vehicleId: vehicle.id },
    });

    let averageStars = reviews / count;
    vehicle.dataValues.avgRating = averageStars;

    if (image) {
      if (image.preview === true) {
        vehicle.dataValues.previewImage = image.url;
      }
    }
    if (!image) {
      vehicle.dataValues.previewImage = null;
    }
  }

  res.status(200);
  return res.json({ Vehicles });
});

//Get details of a vehicle from an id
router.get("/:vehicleId", async (req, res) => {
  const vehicle = await Vehicle.findByPk(req.params.vehicleId, {
    include: [
      {
        model: Review,
        attributes: [],
      },
      {
        model: VehicleImage,
        attributes: ["id", "url", "preview"],
      },
      {
        model: User,
        as: "Owner",
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });
  if (!vehicle) {
    res.status(404);
    return res.json({
      message: "Vehicle couldn't be found",
      statusCode: 404,
    });
  }
  if (!vehicle.address) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        address: "Street address is required",
      },
    });
  }
  if (!vehicle.city) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        city: "City is required",
      },
    });
  }
  if (!vehicle.state) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        state: "State is required",
      },
    });
  }
  if (!vehicle.latitude || vehicle.latitude < -90 || vehicle.latitude > 90) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lat: "Latitude is not valid",
      },
    });
  }
  if (
    !vehicle.longitude ||
    vehicle.longitude < -180 ||
    vehicle.longitude > 180
  ) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lng: "Longitude is not valid",
      },
    });
  }
  if (!vehicle.type) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Type is required",
      },
    });
  }
  if (!vehicle.category) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Category is required",
      },
    });
  }
  if (!vehicle.make) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Make is required",
      },
    });
  }
  if (!vehicle.model) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Model is required",
      },
    });
  }
  if (!vehicle.year) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Year is required",
      },
    });
  }
  if (!vehicle.trim) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Trim is required",
      },
    });
  }
  if (!vehicle.doors) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Doors field is required",
      },
    });
  }
  if (!vehicle.drivetrain) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Drivetrain is required",
      },
    });
  }
  if (!vehicle.MPG) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "MPG is required",
      },
    });
  }
  if (!vehicle.transmission) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Transmission is required",
      },
    });
  }
  if (!vehicle.numSeats) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Seats field is required",
      },
    });
  }
  if (!vehicle.petFriendly) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Pet Friendliness is required",
      },
    });
  }
  if (!vehicle.description) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Description is required",
      },
    });
  }
  if (!vehicle.price) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        price: "Price per day is required",
      },
    });
  }
  let reviews = await Review.sum("stars", {
    where: { vehicleId: req.params.vehicleId },
  });
  let count = await Review.count({
    where: { vehicleId: req.params.vehicleId },
  });

  let averageStars = reviews / count;
  vehicle.dataValues.avgStarRating = averageStars;
  vehicle.dataValues.numReviews = count;

  res.status(200);
  return res.json(vehicle);
});

//Create a vehicle
router.post("/", restoreUser, async (req, res) => {
  const {
    address,
    city,
    state,
    latitude,
    longitude,
    type,
    category,
    make,
    model,
    year,
    trim,
    doors,
    drivetrain,
    MPG,
    transmission,
    numSeats,
    petFriendly,
    description,
    price,
  } = req.body;
  if (!address) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        address: "Street address is required",
      },
    });
  }
  if (!city) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        city: "City is required",
      },
    });
  }
  if (!state) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        state: "State is required",
      },
    });
  }
  if (!latitude || latitude < -90 || latitude > 90) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lat: "Latitude is not valid",
      },
    });
  }
  if (!longitude || longitude < -180 || longitude > 180) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lng: "Longitude is not valid",
      },
    });
  }
  if (!type) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Type is required",
      },
    });
  }
  if (!category) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Category is required",
      },
    });
  }
  if (!make) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Make is required",
      },
    });
  }
  if (!model) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Model is required",
      },
    });
  }
  if (!year) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Year is required",
      },
    });
  }
  if (!trim) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Trim is required",
      },
    });
  }
  if (!doors) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Doors field is required",
      },
    });
  }
  if (!drivetrain) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Drivetrain is required",
      },
    });
  }
  if (!MPG) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "MPG is required",
      },
    });
  }
  if (!transmission) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Transmission is required",
      },
    });
  }
  if (!numSeats) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Seats field is required",
      },
    });
  }
  if (!petFriendly) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Pet friendliness is required",
      },
    });
  }
  if (!description) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Description is required",
      },
    });
  }
  if (!price) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        price: "Price per day is required",
      },
    });
  }
  const newVehicle = await Vehicle.create({
    ownerId: req.user.id,
    address: address,
    city: city,
    state: state,
    latitude: latitude,
    longitude: longitude,
    type: type,
    category: category,
    make: make,
    model: model,
    year: year,
    trim: trim,
    doors: doors,
    drivetrain: drivetrain,
    MPG: MPG,
    transmission: transmission,
    numSeats: numSeats,
    petFriendly: petFriendly,
    description: description,
    price: price,
  });
  res.status(201);
  return res.json(newVehicle);
});

//Add an image to a vehicle based on vehicleId
router.post(
  "/:vehicleId/images",
  restoreUser,
  requireAuth,
  async (req, res) => {
    const { url, preview } = req.body;

    const vehicle = await Vehicle.findByPk(req.params.vehicleId);
    if (!vehicle) {
      const statusCode = 404;
      res.status(statusCode);
      return res.json({
        message: "Vehicle couldn't be found",
        statusCode,
      });
    }
    if (vehicle.ownerId === req.user.id) {
      const newImage = await VehicleImage.create({
        spotId: req.params.spotId,
        url: url,
        preview: preview,
      });
      res.status(200);
      return res.json(newImage);
    } else {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  }
);

//Edit a Vehicle
router.put("/:vehicleId", restoreUser, requireAuth, async (req, res) => {
  const {
    address,
    city,
    state,
    latitude,
    longitude,
    type,
    category,
    make,
    model,
    year,
    trim,
    doors,
    drivetrain,
    MPG,
    transmission,
    numSeats,
    petFriendly,
    description,
    price,
  } = req.body;
  const vehicle = await Vehicle.findByPk(req.params.vehicleId);
  if (!address) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        address: "Street address is required",
      },
    });
  }
  if (!city) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        city: "City is required",
      },
    });
  }
  if (!state) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        state: "State is required",
      },
    });
  }
  if (!latitude || latitude < -90 || latitude > 90) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lat: "Latitude is not valid",
      },
    });
  }
  if (!longitude || longitude < -180 || longitude > 180) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        lng: "Longitude is not valid",
      },
    });
  }
  if (!type) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        name: "Type is required",
      },
    });
  }
  if (!category) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Category is required",
      },
    });
  }
  if (!make) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Make is required",
      },
    });
  }
  if (!model) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Model is required",
      },
    });
  }
  if (!year) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Year is required",
      },
    });
  }
  if (!trim) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Trim is required",
      },
    });
  }
  if (!doors) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Doors field is required",
      },
    });
  }
  if (!drivetrain) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Drivetrain is required",
      },
    });
  }
  if (!MPG) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "MPG is required",
      },
    });
  }
  if (!transmission) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Transmission is required",
      },
    });
  }
  if (!numSeats) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Seats field is required",
      },
    });
  }
  if (!petFriendly) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Pet friendliness is required",
      },
    });
  }
  if (!description) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        description: "Description is required",
      },
    });
  }
  if (!price) {
    res.status(400);
    return res.json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        price: "Price per day is required",
      },
    });
  }
  if (vehicle.ownerId === req.user.id) {
    await vehicle.update({
      ownerId: req.user.id,
      address: address,
      city: city,
      state: state,
      latitude: latitude,
      longitude: longitude,
      type: type,
      category: category,
      make: make,
      model: model,
      year: year,
      trim: trim,
      doors: doors,
      drivetrain: drivetrain,
      MPG: MPG,
      transmission: transmission,
      numSeats: numSeats,
      petFriendly: petFriendly,
      description: description,
      price: price,
    });
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
  res.status(200);
  return res.json(vehicle);
});

//Delete a vehicle
router.delete("/:vehicleId", restoreUser, requireAuth, async (req, res) => {
  const vehicle = await Vehicle.findByPk(req.params.vehicleId);
  if (!vehicle) {
    res.status(404);
    return res.json({
      message: "Vehicle couldn't be found",
      statusCode: 404,
    });
  }
  if (vehicle.ownerId === req.user.id) {
    await vehicle.destroy();
    res.status(200);
    return res.json({
      message: "Successfully deleted",
      statusCode: 200,
    });
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

//Get all Reviews by a VehicleId
router.get("/:vehicleId/reviews", async (req, res) => {
  const Reviews = await Review.findAll({
    where: { vehicleId: req.params.vehicleId },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });
  if (Reviews.length === 0) {
    res.status(404);
    return res.json({
      message: "Vehicle couldn't be found",
      statusCode: 404,
    });
  }
  res.status(200);
  return res.json({ Reviews });
});

//Create a Review for a Vehicle based on the VehicleId
router.post("/:vehicleId/reviews", restoreUser, async (req, res) => {
  const { review, stars } = req.body;
  const vehicle = await Vehicle.findByPk(req.params.vehicleId);

  if (!vehicle) {
    res.status(404);
    return res.json({
      message: "Vehicle couldn't be found",
      statusCode: 404,
    });
  }
  if (!review) {
    res.status(400);
    return res.json({
      message: "Validation error",
      statusCode: 400,
      errors: {
        review: "Review text is required",
      },
    });
  }
  if (!stars) {
    res.status(400);
    return res.json({
      message: "Validation error",
      statusCode: 400,
      errors: {
        stars: "Stars must be an integer from 1 to 5",
      },
    });
  }
  const oldReview = await Review.findOne({
    where: {
      userId: req.user.id,
      vehicleId: req.params.vehicleId,
    },
  });
  if (oldReview) {
    res.status(403);
    return res.json({
      message: "User already has a review for this vehicle",
      statusCode: 403,
    });
  }
  const newReview = await Review.create({
    userId: req.user.id,
    vehicleId: req.params.vehicleId,
    review: review,
    stars: stars,
  });
  res.status(201);
  return res.json(newReview);
});

//Get all Bookings for a Vehicle based on the Vehicle's id
router.get("/:vehicleId/bookings", restoreUser, async (req, res) => {
  const vehicles = await Vehicle.findAll({
    where: { id: req.params.vehicleId },
  });
  const Bookings = await Booking.findAll({
    where: { vehicleId: req.params.vehicleId },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });

  if (Bookings.length === 0) {
    res.status(404);
    return res.json({
      message: "Vehicle couldn't be found",
      statusCode: 404,
    });
  }
  res.status(200);
  return res.json({ Bookings });
});

//Create a Booking from a Vehicle based on the Vehicle's id
router.post(
  "/:vehicleId/bookings",
  restoreUser,
  requireAuth,
  async (req, res) => {
    const { startDate, endDate } = req.body;
    const vehicle = await Vehicle.findByPk(req.params.vehicleId);

    if (!vehicle) {
      res.status(404);
      return res.json({
        message: "Vehicle couldn't be found",
        statusCode: 404,
      });
    }
    const date1 = Date.parse(startDate);
    const date2 = Date.parse(endDate);
    if (date1 > date2) {
      res.status(400);
      return res.json({
        message: "Validation error",
        statusCode: 400,
        errors: {
          endDate: "endDate cannot be on or before startDate",
        },
      });
    }
    const oldBooking = await Booking.findOne({
      where: {
        userId: req.user.id,
        vehcileId: req.params.vehicleId,
        startDate: startDate,
        endDate: endDate,
      },
    });
    if (oldBooking) {
      res.status(403);
      return res.json({
        message:
          "Sorry, this vehicle is already booked for the specified dates",
        statusCode: 403,
        errors: {
          startDate: "Start date conflicts with an existing booking",
          endDate: "End date conflicts with an existing booking",
        },
      });
    }
    const newBooking = await Booking.create({
      userId: req.user.id,
      vehicleId: req.params.vehicleId,
      startDate: startDate,
      endDate: endDate,
    });
    res.status(200);
    return res.json(newBooking);
  }
);

module.exports = router;
