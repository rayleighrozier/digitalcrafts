"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("pets", [
      {
        type: "Lab",
        species: "dog",
        name: "Sparky",
        age: "3",
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "German Shepherd",
        species: "dog",
        name: "Bingo",
        age: "10",
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Unknown",
        species: "cat",
        name: "Chester",
        age: "2",
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Siamese",
        species: "cat",
        name: "Lucy",
        age: "12",
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Dacshund",
        species: "dog",
        name: "Oscar",
        age: "4",
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
