'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicle.belongsTo(models.User, {as: 'Owner',foreignKey: 'ownerId'});

      Vehicle.hasMany(models.Booking, {foreignKey: 'vehicleId', onDelete: 'CASCADE', hooks: true});

      Vehicle.hasMany(models.Review, {foreignKey: 'vehicleId', onDelete: 'CASCADE', hooks: true});

      Vehicle.hasMany(models.VehicleImage, {foreignKey: 'vehicleId', onDelete: 'CASCADE', hooks: true});
    }
  }
  Vehicle.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drivetrain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MPG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petFriendly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};
