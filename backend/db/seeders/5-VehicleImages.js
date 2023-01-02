"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "VehicleImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          vehicleId: 1,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 2,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 3,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 4,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 5,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 6,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 7,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 8,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 9,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 10,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 11,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 12,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 13,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 14,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 15,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 16,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 17,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 18,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 19,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 20,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 21,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 22,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 23,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 24,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 25,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 26,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 27,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 28,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 29,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 30,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 31,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 32,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 33,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 34,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 35,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 36,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 37,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 38,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 39,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 40,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 41,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 42,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 43,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 44,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 45,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 46,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 47,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 48,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 49,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 50,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 51,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 52,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 53,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 54,
          url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
          preview: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "VehicleImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        vehicleId: { [Op.in]: [1] },
      },
      {}
    );
  },
};
