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
   return await queryInterface.bulkInsert ('Users',[{
     name: "Bob",
     password: "1234",
     createdAt: new Date(),
     updatedAt: new Date (),
   }, {
     name: "Jack",
     password: "1234",
     createdAt: new Date(),
     updatedAt: new Date (),
   }, {
     name: "Jane",
     password: "1234",
     createdAt: new Date(),
     updatedAt: new Date (),
   }])
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
