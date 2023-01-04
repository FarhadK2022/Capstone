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
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-nissan-gt-r-106-1631572483.jpg?crop=1.00xw:0.987xh;0,0.0134xh&resize=980:*",
          preview: true,
        },
        {
          vehicleId: 3,
          url: "https://hips.hearstapps.com/hmg-prod/images/2020-kar-tunz-lamborghini-urus-112-1584591171.jpg?crop=0.893xw:0.670xh;0.0586xw,0.210xh&resize=1200:*",
          preview: true,
        },
        {
          vehicleId: 4,
          url: "https://s1.cdn.autoevolution.com/images/news/gallery/2006-dodge-ram-srt-10-6-speed-is-a-dying-breed-won-t-stop-whining-about-it_1.jpg",
          preview: true,
        },
        {
          vehicleId: 5,
          url: "https://musclecardna.com/wp-content/uploads/ford-f150-lightning-main.jpg",
          preview: true,
        },
        {
          vehicleId: 6,
          url: "https://www.motortrend.com/uploads/sites/5/2020/06/01-1993-mazda-rx7-ls1-swap-front-rolling.jpg?fit=around%7C875:492",
          preview: true,
        },
        {
          vehicleId: 7,
          url: "https://www.carscoops.com/wp-content/uploads/2021/01/Porsche-Cayenne-Turbo-S-1a.jpg",
          preview: true,
        },
        {
          vehicleId: 8,
          url: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cx9r916j9nywa1c5q7ws.jpg",
          preview: true,
        },
        {
          vehicleId: 9,
          url: "https://i.ytimg.com/vi/Qp0ZyiHQzA4/maxresdefault.jpg",
          preview: true,
        },
        {
          vehicleId: 10,
          url: "https://www.topgear.com/sites/default/files/2021/08/2010-Pagani-Zonda-R-Evolution-_0.jpg",
          preview: true,
        },
        {
          vehicleId: 11,
          url: "https://cdn1.mecum.com/auctions/ha0420/ha0420-451600/images/01-1507133765558-1604609448428@2x.jpg?1605644883000",
          preview: true,
        },
        {
          vehicleId: 12,
          url: "https://hips.hearstapps.com/hmg-prod/images/2022-bmw-m5-cs-101-1644002565.jpg?crop=0.788xw:0.591xh;0.184xw,0.272xh&resize=1200:*",
          preview: true,
        },
        {
          vehicleId: 13,
          url: "https://i.gaw.to/vehicles/photos/40/22/402258-2021-aston-martin-db11.jpg?1024x640",
          preview: true,
        },
        {
          vehicleId: 14,
          url: "https://bringatrailer.com/wp-content/uploads/2022/02/1994_toyota_supra_1994_toyota_supra_fde2b141-47ab-4ff3-ae6a-a4cdb4f3ad3f-lxaa4z-21197-60267.jpg?fit=940%2C626",
          preview: true,
        },
        {
          vehicleId: 15,
          url: "https://bringatrailer.com/wp-content/uploads/2022/02/2008_ferrari_f430-spider_431a7470-77792.jpg?fit=940%2C626",
          preview: true,
        },
        {
          vehicleId: 16,
          url: "https://i.ytimg.com/vi/ImNtfsa6Doo/maxresdefault.jpg",
          preview: true,
        },
        {
          vehicleId: 17,
          url: "https://www.carscoops.com/wp-content/uploads/2021/04/2008-mercedes-benz-clk-63-black-series-0.jpg",
          preview: true,
        },
        {
          vehicleId: 18,
          url: "https://media.ed.edmunds-media.com/maserati/granturismo-convertible/2018/oem/2018_maserati_granturismo-convertible_convertible_mc_fq_oem_1_1600.jpg",
          preview: true,
        },
        {
          vehicleId: 19,
          url: "http://cdn.carbuzz.com/gallery-images/1600/845000/500/845558.jpg",
          preview: true,
        },
        {
          vehicleId: 20,
          url: "https://www.motortrend.com/uploads/2022/02/2022-Mercedes-Benz-G-Class-AMG-G63-22.jpg",
          preview: true,
        },
        {
          vehicleId: 21,
          url: "https://s1.cdn.autoevolution.com/images/news/laid-out-2022-rolls-royce-cullinan-almost-strikes-the-perfect-mansory-balance-175127-7.jpg",
          preview: true,
        },
        {
          vehicleId: 22,
          url: "https://hips.hearstapps.com/hmg-prod/images/2022-bentley-flying-spur-hybrid-545-1659030974.jpg?crop=0.910xw:0.681xh;0.0897xw,0.297xh&resize=1200:*",
          preview: true,
        },
        {
          vehicleId: 23,
          url: "https://bringatrailer.com/wp-content/uploads/2022/08/2017_ferrari_f12-tdf_c1a179b6-4afc-4c27-8c85-8e6c448b2745-70846.jpeg?fit=940%2C627",
          preview: true,
        },
        {
          vehicleId: 24,
          url: "https://www.autotrader.com/wp-content/uploads/2021/04/2022-land-rover-defender-110-v8.jpg",
          preview: true,
        },
        {
          vehicleId: 25,
          url: "https://media.ed.edmunds-media.com/ford/f-150-raptor/2021/hero/2021_ford_f-150-raptor_f34_hero_505221_1600.jpg",
          preview: true,
        },
        {
          vehicleId: 26,
          url: "http://cdn.shopify.com/s/files/1/0009/0849/2853/products/DSC09413-2.jpg?v=1655144191",
          preview: true,
        },
        {
          vehicleId: 27,
          url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/2016_BMW_i8.jpg",
          preview: true,
        },
        {
          vehicleId: 28,
          url: "https://www.supercars.net/blog/wp-content/uploads/2018/06/Ferrari-LaFerrari-Ultimate-Guide-57.jpg",
          preview: true,
        },
        {
          vehicleId: 29,
          url: "https://robbreport.com/wp-content/uploads/2021/11/2-2.jpg",
          preview: true,
        },
        {
          vehicleId: 30,
          url: "https://www.topgear.com/sites/default/files/2022/08/1-Mercedes-AMG-One.jpg",
          preview: true,
        },
        {
          vehicleId: 31,
          url: "https://hips.hearstapps.com/hmg-prod/images/2023-ram-1500-trx-101-1665752612.jpg?crop=0.593xw:0.664xh;0.174xw,0.336xh&resize=640:*",
          preview: true,
        },
        {
          vehicleId: 32,
          url: "https://media.ed.edmunds-media.com/volkswagen/jetta/2013/oem/2013_volkswagen_jetta_sedan_sel-pzev_fq_oem_1_1600.jpg",
          preview: true,
        },
        {
          vehicleId: 33,
          url: "https://images.hgmsites.net/hug/2015-bmw-5-series_100509016_h.jpg",
          preview: true,
        },
        {
          vehicleId: 34,
          url: "https://www.motortrend.com/uploads/2022/07/2022-Acura-NSX-Type-S-in-motion-7.jpg",
          preview: true,
        },
        {
          vehicleId: 35,
          url: "https://www.alfaromeousaofontario.com/wp-content/uploads/2020/04/2019-AlfaRomeo-4C-SDP-Gallery-1.jpg.image_.1440.jpg",
          preview: true,
        },
        {
          vehicleId: 36,
          url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fcompetition-carbon-tesla-model-s-plaid-release-info-000.jpg?w=960&cbr=1&q=90&fit=max",
          preview: true,
        },
        {
          vehicleId: 37,
          url: "https://hips.hearstapps.com/hmg-prod/images/2022-lucid-air-dream-edition-performance-101-1636049140.jpg",
          preview: true,
        },
        {
          vehicleId: 38,
          url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/8c26f779-11e5-4cfc-bd7c-dcd03b18ff88/bvlatuR/std/4096x2561/Model-X-Main-Hero-Desktop-LHD",
          preview: true,
        },
        {
          vehicleId: 39,
          url: "https://cdn.carbuzz.com/gallery-images/2022-ford-f-150-lightning-carbuzz-992265.jpg",
          preview: true,
        },
        {
          vehicleId: 40,
          url: "https://www.electrive.com/wp-content/uploads/2022/11/audi-q8-e-tron-sq8-2022-01-min.png",
          preview: true,
        },
        {
          vehicleId: 41,
          url: "https://hips.hearstapps.com/hmg-prod/images/02-ss300p-3i4-front-1567937037.jpg",
          preview: true,
        },
        {
          vehicleId: 42,
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dw-burnett-escaladev-41-1654867868.jpg",
          preview: true,
        },
        {
          vehicleId: 43,
          url: "https://i.ytimg.com/vi/XlBLjYkmEHE/maxresdefault.jpg",
          preview: true,
        },
        {
          vehicleId: 44,
          url: "https://hips.hearstapps.com/hmg-prod/images/2022-genesis-g70-3p3t-awd-133-1629990925.jpg?crop=0.670xw:0.501xh;0.199xw,0.307xh&resize=1200:*",
          preview: true,
        },
        {
          vehicleId: 45,
          url: "https://hagerty-media-prod.imgix.net/2022/04/2009-Honda-S2000-CR-19.jpeg?auto=format%2Ccompress&ixlib=php-3.3.0",
          preview: true,
        },
        {
          vehicleId: 46,
          url: "https://cdn.static-carhp.com/tr:ow-62,oi-car-hp-image-server@images@carhp_logo_white.png,ox-10,oy-10,di-no_image_SJKGShVtN.png/images/content/3feabd5d754bf274744c8b0347c12836.jpeg",
          preview: true,
        },
        {
          vehicleId: 47,
          url: "https://www.topgear.com/sites/default/files/images/cars-road-test/2020/02/5fc16d060409e571d4fb9bfbdc4f8b08/new_jaguar_f-type_r-dynamic_p450_rwd_fuji_white_0016.jpg",
          preview: true,
        },
        {
          vehicleId: 48,
          url: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/07/Koenigsegg-One-1---Fornt-Quarter-1.jpg",
          preview: true,
        },
        {
          vehicleId: 49,
          url: "https://robbreport.com/wp-content/uploads/2022/10/lfa02.jpg?w=1000",
          preview: true,
        },
        {
          vehicleId: 50,
          url: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/08/LotusEvoraGT-2-2048x1366-1.jpg",
          preview: true,
        },
        {
          vehicleId: 51,
          url: "https://images.classic.com/vehicles/059a93b071c2b1222d60012f9a7bb81e72e50045.jpg?auto=format&fit=crop&ar=16:9&w=672&h=576",
          preview: true,
        },
        {
          vehicleId: 52,
          url: "https://hips.hearstapps.com/hmg-prod/images/2021-rivian-r1t-48-1632522866.jpg?crop=0.614xw:0.690xh;0.276xw,0.310xh&resize=640:*",
          preview: true,
        },
        {
          vehicleId: 53,
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/999-1605302115.jpg",
          preview: true,
        },
        {
          vehicleId: 54,
          url: "http://cdn.carbuzz.com/gallery-images/1600/353000/700/353705.jpg",
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
