const NovelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  }, { paranoid: true })
}

module.exports = NovelsGenres
