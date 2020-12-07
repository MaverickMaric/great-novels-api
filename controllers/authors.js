const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll({
    attributes: {
      exclude: ['deletedAt']
    }
  })

  return response.send(authors)
}

module.exports = { getAllAuthors }
