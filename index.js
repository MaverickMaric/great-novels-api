const express = require('express')
const { getAllAuthors } = require('./controllers/authors.js')

const app = express()

app.get('/authors', getAllAuthors)

app.listen(1537, () => {
  console.log('Listening on port 1537...') // eslint-disable-line no-console
})
