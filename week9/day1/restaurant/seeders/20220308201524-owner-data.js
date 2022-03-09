"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("owners", [
      {
        name: "Jimmy",
        password: "jimmyrulez",
        location: "Atlanta",
        environment: "city",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Margot",
        password: "12345678",
        location: "Smyrna",
        environment: "suburbs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diana",
        password: "passwordpassword",
        location: "Atlanta",
        environment: "city",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob",
        password: "bobbobbobbob",
        location: "Macon",
        environment: "country",
        createdAt: new Date(),
        updatedAt: new Date(),
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

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
