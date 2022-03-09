'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert ('flowers',[{
     name: "hydrangea",
     color: "pink",
   }, {
     name: "hydrangea",
     color: "blue",
   }, {
    name: "sunflower",
     color: "yellow",
   }, { name:"iris",
  color:"purple"}])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
