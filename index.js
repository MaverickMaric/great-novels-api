const express = require('express')
const { getAllAuthors, getAuthorByIdWithNovelsAndNovelGenres } = require('./controllers/authors.js')
const { getAllGenres } = require('./controllers/genres.js')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorByIdWithNovelsAndNovelGenres)

app.get('/genres', getAllGenres)

app.listen(1537, () => {
  console.log('Listening on port 1537...') // eslint-disable-line no-console
})
