"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Vehicles";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846 - 121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Ford",
          model: "Mustang",
          year: 1998,
          trim: "SVT Cobra",
          doors: 2,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Manual",
          numSeats: 4,
          petFriendly: false,
          description:
            "One of the most fun vehicles on the planet. Taking cues from what needed to be improved from the Fox Body mustang, this is much sharper and quicker. I have had the entire thing rebuilt from the ground up.",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Nissan",
          model: "GT-R",
          year: 2019,
          trim: "Spec-V",
          doors: 2,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Automatic",
          numSeats: 4,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Exotic",
          make: "Lamborghini",
          model: "Urus",
          year: 2020,
          trim: "Platinum",
          doors: 4,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Exotic",
          make: "Dodge",
          model: "Ram",
          year: 2006,
          trim: "SRT 10",
          doors: 2,
          drivetrain: "Gas",
          MPG: 10,
          transmission: "Manual",
          numSeats: 3,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Exotic",
          make: "Ford",
          model: "F-150",
          year: 2003,
          trim: "SVT Lightning",
          doors: 2,
          drivetrain: "Gas",
          MPG: 16,
          transmission: "Manual",
          numSeats: 3,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Mazda",
          model: "RX-7",
          year: 1993,
          trim: "Premium",
          doors: 2,
          drivetrain: "Gas",
          MPG: 24,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Executive",
          make: "Porsche",
          model: "Cayenne",
          year: 2006,
          trim: "Turbo S",
          doors: 4,
          drivetrain: "Gas",
          MPG: 15,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Offroad",
          make: "Jeep",
          model: "Grand Cherokee",
          year: 1995,
          trim: "Premium",
          doors: 4,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Executive",
          make: "Land Rover",
          model: "Range Rover",
          year: 2022,
          trim: "Sport",
          doors: 4,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Exotic",
          make: "Pagani",
          model: "Zonda",
          year: 2011,
          trim: "R",
          doors: 2,
          drivetrain: "Gas",
          MPG: 6,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Dodge",
          model: "Viper",
          year: 2010,
          trim: "ACR",
          doors: 2,
          drivetrain: "Gas",
          MPG: 12,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Sedan",
          make: "BMW",
          model: "5 Series",
          year: 2022,
          trim: "M5",
          doors: 4,
          drivetrain: "Gas",
          MPG: 18,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Aston-Martin",
          model: "DB 11",
          year: 2021,
          trim: "Premium",
          doors: 2,
          drivetrain: "Gas",
          MPG: 12,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Toyota",
          model: "Supra",
          year: 1994,
          trim: "Turbo",
          doors: 2,
          drivetrain: "Gas",
          MPG: 24,
          transmission: "Manual",
          numSeats: 4,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Ferrari",
          model: "F430",
          year: 2008,
          trim: "Spider",
          doors: 2,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Porsche",
          model: "911",
          year: 2022,
          trim: "Turbo S",
          doors: 2,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Automatic",
          numSeats: 4,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Mercedes-Benz",
          model: "CLK",
          year: 2008,
          trim: "CLK63 AMG Black Series",
          doors: 2,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Maserati",
          model: "GranTurismo",
          year: 2019,
          trim: "MC",
          doors: 2,
          drivetrain: "Gas",
          MPG: 16,
          transmission: "Automatic",
          numSeats: 4,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Executive",
          make: "Maybach",
          model: "S 580",
          year: 2022,
          trim: "Luxury",
          doors: 4,
          drivetrain: "Gas",
          MPG: 15,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Offroad",
          make: "Mercedes-Benz",
          model: "G Class",
          year: 2022,
          trim: "G63 AMG",
          doors: 4,
          drivetrain: "Gas",
          MPG: 7,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Executive",
          make: "Rolls Royce",
          model: "Cullinan",
          year: 2022,
          trim: "Umbrella",
          doors: 4,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Executive",
          make: "Bentley",
          model: "Flying Spur",
          year: 2022,
          trim: "W12",
          doors: 4,
          drivetrain: "Gas",
          MPG: 6,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Exotic",
          make: "Ferrari",
          model: "F12",
          year: 2017,
          trim: "TDF",
          doors: 2,
          drivetrain: "Gas",
          MPG: 9,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Offroad",
          make: "Land Rover",
          model: "Defender",
          year: 2022,
          trim: "X-Dynamic",
          doors: 4,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Offroad",
          make: "Ford",
          model: "F-150",
          year: 2022,
          trim: "Raptor",
          doors: 4,
          drivetrain: "Gas",
          MPG: 22,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Hybrid",
          make: "Porsche",
          model: "918",
          year: 2015,
          trim: "GT",
          doors: 2,
          drivetrain: "Hybrid",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Hybrid",
          make: "BMW",
          model: "i8",
          year: 2020,
          trim: "Premium",
          doors: 2,
          drivetrain: "Hybrid",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Hybrid",
          make: "Ferrari",
          model: "LaFerarri",
          year: 2015,
          trim: "Premium",
          doors: 2,
          drivetrain: "Hybrid",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Hybrid",
          make: "McLaren",
          model: "P1",
          year: 2015,
          trim: "GT",
          doors: 2,
          drivetrain: "Hybrid",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Hybrid",
          make: "Mercedes-Benz",
          model: "Project ONE",
          year: 2022,
          trim: "AMG Premium",
          doors: 2,
          drivetrain: "Hybrid",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Offroad",
          make: "Dodge",
          model: "Ram",
          year: 2022,
          trim: "TRX",
          doors: 4,
          drivetrain: "Gas",
          MPG: 12,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Sedan",
          make: "Volkswagen",
          model: "Jetta",
          year: 2014,
          trim: "TDI",
          doors: 4,
          drivetrain: "Diesel",
          MPG: 38,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Sedan",
          make: "BMW",
          model: "5-Series",
          year: 2015,
          trim: "535d",
          doors: 4,
          drivetrain: "Diesel",
          MPG: 38,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Acura",
          model: "NSX",
          year: 2022,
          trim: "Type S",
          doors: 2,
          drivetrain: "Gas",
          MPG: 14,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Convertible",
          make: "Alfa Romeo",
          model: "4C",
          year: 2020,
          trim: "Spider",
          doors: 2,
          drivetrain: "Diesel",
          MPG: 26,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Electric",
          make: "Tesla",
          model: "Model S",
          year: 2021,
          trim: "Plaid",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Electric",
          make: "Lucid",
          model: "Air",
          year: 2022,
          trim: "Grand Touring Performance",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Electric",
          make: "Tesla",
          model: "Model X",
          year: 2022,
          trim: "Plaid",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Electric",
          make: "Ford",
          model: "F-150",
          year: 2022,
          trim: "Lightning",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Electric",
          make: "Audi",
          model: "Q8",
          year: 2022,
          trim: "e-tron",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Exotic",
          make: "Bugatti",
          model: "Chiron",
          year: 2022,
          trim: "Sport",
          doors: 2,
          drivetrain: "Gas",
          MPG: 8,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Suv",
          category: "Executive",
          make: "Cadillac",
          model: "Escalade",
          year: 2022,
          trim: "V",
          doors: 4,
          drivetrain: "Gas",
          MPG: 10,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Chevrolet",
          model: "Corvette",
          year: 2022,
          trim: "Z06",
          doors: 2,
          drivetrain: "Gas",
          MPG: 10,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Executive",
          make: "Genesis",
          model: "G70",
          year: 2023,
          trim: "Turbo",
          doors: 4,
          drivetrain: "Gas",
          MPG: 26,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Honda",
          model: "S2000",
          year: 2009,
          trim: "CR",
          doors: 2,
          drivetrain: "Gas",
          MPG: 21,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Executive",
          make: "Infinity",
          model: "Q60",
          year: 2022,
          trim: "RED SPORT 400",
          doors: 4,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Coupe",
          category: "Convertible",
          make: "Jaguar",
          model: "F-Type",
          year: 2022,
          trim: "P450",
          doors: 2,
          drivetrain: "Gas",
          MPG: 19,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Coupe",
          category: "Exotic",
          make: "Koenigsegg",
          model: "Agera",
          year: 2014,
          trim: "One:1",
          doors: 2,
          drivetrain: "Gas",
          MPG: 5,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Exotic",
          make: "Lexus",
          model: "LFA",
          year: 2012,
          trim: "Premium",
          doors: 2,
          drivetrain: "Gas",
          MPG: 9,
          transmission: "Automatic",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Lotus",
          model: "Evora",
          year: 2020,
          trim: "GT",
          doors: 2,
          drivetrain: "Gas",
          MPG: 20,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Sedan",
          make: "Mitsubishi",
          model: "Lancer Evolution",
          year: 2008,
          trim: "MR",
          doors: 4,
          drivetrain: "Gas",
          MPG: 18,
          transmission: "Manual",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Truck",
          category: "Electric",
          make: "Rivian",
          model: "R1T",
          year: 2022,
          trim: "Launch",
          doors: 4,
          drivetrain: "Electric",
          MPG: 100,
          transmission: "Automatic",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Coupe",
          make: "Saleen",
          model: "S7",
          year: 2006,
          trim: "le mans edition",
          doors: 2,
          drivetrain: "Gas",
          MPG: 10,
          transmission: "Manual",
          numSeats: 2,
          petFriendly: false,
          description: "",
          price: 150,
        },
        {
          ownerId: 2,
          address: "2008 Wineberry Dr",
          city: "San Ramon",
          state: "California",
          latitude: 37.785364645578184,
          longitude: -121.97959600251846,
          type: "Car",
          category: "Sedan",
          make: "Subaru",
          model: "WRX",
          year: 2020,
          trim: "STI",
          doors: 4,
          drivetrain: "Gas",
          MPG: 18,
          transmission: "Manual",
          numSeats: 5,
          petFriendly: true,
          description: "",
          price: 150,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Vehicles";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        ownerId: { [Op.in]: [1] },
      },
      {}
    );
  },
};
