const express = require('express')
const {
  getAllAuthors,
  getAuthorByIdWithNovelsAndNovelGenres,
  getAuthorByLastFuzzyWithNovelsAndNovelGenres
} = require('./controllers/authors.js')
const { getAllGenres, getGenreByIdWithNovelsAndNovelAuthors } = require('./controllers/genres.js')
const { getAllNovelsWithAuthorsAndGenres, getNovelByIdWithAuthorsAndGenres } = require('./controllers/novels.js')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorByIdWithNovelsAndNovelGenres)

app.get('/authors/search-last/:nameLast', getAuthorByLastFuzzyWithNovelsAndNovelGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreByIdWithNovelsAndNovelAuthors)

app.get('/novels', getAllNovelsWithAuthorsAndGenres)

app.get('/novels/:id', getNovelByIdWithAuthorsAndGenres)

app.listen(1537, () => {
  console.log('Listening on port 1537...') // eslint-disable-line no-console
})
