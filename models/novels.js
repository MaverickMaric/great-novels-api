const novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, references: { model: Authors, key: 'id' } },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = novels
