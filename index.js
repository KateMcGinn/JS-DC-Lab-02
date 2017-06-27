const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://admin:admin1234!@pokedex-shard-00-00-sdhmz.mongodb.net:27017,pokedex-shard-00-01-sdhmz.mongodb.net:27017,pokedex-shard-00-02-sdhmz.mongodb.net:27017/Tunr?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')

const app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))

const Artist = require('./models/Artist.js')
const appRouter = require('./routes/index.js')
const artistsRouter = require('./routes/artists.js')
