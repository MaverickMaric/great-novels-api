const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    attributes: {
      exclude: ['deletedAt']
    },
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return response.send(novels)
}

const getNovelByIdWithAuthorsAndGenres = async (request, response) => {
  const { id } = request.params

  const novel = await models.Novels.findOne({
    attributes: {
      exclude: ['deletedAt']
    },
    where: { id },
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

const getNovelByTitleFuzzyWithAuthorsAndGenres = async (request, response) => {
  try {
    const { title } = request.params

    const authorFuzz = await models.Novels.findAll({
      where: {
        title: { [models.Op.like]: `%${title}%` }
      },
      include: [{ model: models.Authors }, { model: models.Genres }]
    })

    return authorFuzz
      ? response.send(authorFuzz)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}

module.exports = {
  getAllNovelsWithAuthorsAndGenres,
  getNovelByIdWithAuthorsAndGenres,
  getNovelByTitleFuzzyWithAuthorsAndGenres
}
