const authors = (connection, Sequelize) => {
  return connection.define('authors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING },
    nameLast: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = authors
