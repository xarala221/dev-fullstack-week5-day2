const express = require('express')
const { myLogger } = require('./module1')

const app = express()

app.use(myLogger)

app.get('/', function (request, response) {
  response.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Le serveur est lacné au http://localhost:8000...')
})
