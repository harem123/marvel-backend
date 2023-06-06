module.exports = {
    up: (queryInterface, Sequelize) => {
      // Product belongsToMany Tag
      return queryInterface.createTable(
        'comic_serie',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          comic_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
          serie_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      // remove table
      return queryInterface.dropTable('comic_serie');
    },
  };