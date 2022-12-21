'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Vehicles';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '2008 Wineberry Dr',
        city: 'San Ramon',
        state: 'California',
        latitude: 37.785364645578184,
        longitude: -121.97959600251846,
        type: 'Cars',
        category: 'Sport',
        make: 'Ford',
        model: 'Mustang',
        year: 1998,
        trim: 'SVT Cobra',
        doors: 2,
        drivetrain: 'Gas',
        MPG: 20,
        transmission: 'Manual',
        numSeats: 4,
        petFriendly: false,
        description: 'One of the most fun vehicles on the planet. Taking cues from what needed to be improved from the Fox Body mustang, this is much sharper and quicker. I have had the entire thing rebuilt from the ground up.',
        price: 100,
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Vehicles';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1] }
    }, {});
  }
};
