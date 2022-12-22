'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'VehicleImages';
    return queryInterface.bulkInsert(options, [
      {
       vehicleId: 1,
       url: "https://www.motortrend.com/uploads/f/223932614.jpg?fit=around%7C875:492",
       preview: true,
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'VehicleImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      vehicleId: { [Op.in]: [1] }
    }, {});
  }
};
