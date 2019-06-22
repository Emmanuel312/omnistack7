const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

mongoose.connect('mongodb+srv://semana:semana@cluster0-pqrut.mongodb.net/instarocket?retryWrites=true&w=majority', {useNewUrlParser: true})

app.use((req,res,next) =>
{
    req.io = io
    next()
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')))
app.use(express.json())
app.use(require('./routes'))
server.listen(process.env.PORT || 3000, () => console.log('server on port 3000'))