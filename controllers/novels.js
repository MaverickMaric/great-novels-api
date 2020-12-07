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

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelByIdWithAuthorsAndGenres }
