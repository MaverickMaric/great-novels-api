const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll({
    attributes: {
      exclude: ['deletedAt']
    }
  })

  return response.send(genres)
}

const getGenreByIdWithNovelsAndNovelAuthors = async (request, response) => {
  const { id } = request.params

  const genre = await models.Genres.findOne({
    attributes: {
      exclude: ['deletedAt']
    },
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Authors }]
    }]
  })

  return genre
    ? response.send(genre)
    : response.sendStatus(404)
}

module.exports = { getAllGenres, getGenreByIdWithNovelsAndNovelAuthors }
