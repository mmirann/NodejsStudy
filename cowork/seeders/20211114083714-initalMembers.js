"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Members", [
      {
        name: "Alex",
        team: "engineering",
        position: "Server Developer",
      },
      {
        name: "miran",
        team: "marketing",
        position: "Server Devloper",
      },
      {
        name: "ziho",
        team: "sales",
        position: "Server Developer",
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Members", numll, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
