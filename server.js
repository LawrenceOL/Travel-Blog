// Main DB install imports
const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const { Router } = require('express')
// File Imports
const routes = require('./routes')
const db = require('./db')
const controllers = require('./controllers/index')

const router = Router()
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
