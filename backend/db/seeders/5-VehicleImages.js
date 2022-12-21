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
       url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motortrend.com%2Ffeatures%2F1704-hugger-orange-1998-cobra-is-one-slick-snake%2F&psig=AOvVaw0TvoETwnB8KtqqXeXVpuIN&ust=1671680474997000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDmi5nlifwCFQAAAAAdAAAAABAE",
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
