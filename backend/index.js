
const express = require('express')
const session = require('express-session')
const cors = require('cors')

const app = express()
const port = 1212

app.use(cors())
app.use(express.json())
app.use(session({
    name: 'new-session',
    secret: 'megascecretthingy',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

words = []

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/words', (req, res) => {
    res.send(words)
})

app.post('/words', (req, res) => {
    words.push(req.body.word)
})

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`)
})