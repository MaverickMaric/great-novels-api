const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll({
    attributes: {
      exclude: ['deletedAt']
    }
  })

  return response.send(authors)
}

const getAuthorByIdWithNovelsAndNovelGenres = async (request, response) => {
  const { id } = request.params

  const author = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndNovelGenres }
