const novelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('enrollments', {
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' }, primaryKey: true },
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' }, primaryKey: true },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = novelsGenres
