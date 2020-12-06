const genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME },
  }, { paranoid: true })
}

module.exports = genres
