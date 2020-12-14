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

const getAuthorByLastFuzzyWithNovelsAndNovelGenres = async (request, response) => {
  try {
    const { nameLast } = request.params

    const authorFuzz = await models.Authors.findAll({
      where: {
        nameLast: { [models.Op.like]: `%${nameLast}%` }
      },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }]
    })

    return authorFuzz
      ? response.send(authorFuzz)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}

module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndNovelGenres, getAuthorByLastFuzzyWithNovelsAndNovelGenres }
