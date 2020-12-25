const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const mongoURLLocal = 'mongodb://localhost:27017/NewsPaperDB'
mongoose.connect(mongoURLLocal, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.log(err)
    console.log('success connect')
})

const articleRoute = require('./route/article')
const commentRoute = require('./route/comment')
const userRoute = require('./route/user')

const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/art', articleRoute)
app.use('/user', userRoute)
app.use('/cmt', commentRoute)

app.listen(5000, () => {
    console.log("Vjpper On " + 5000)
})