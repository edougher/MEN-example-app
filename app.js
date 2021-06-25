const express = require('express')
const mongoose = require('mongoose')
const mongoClient = require('mongodb').MongoClient;

const app = express()
const PORT = 3000
const url = 'mongodb://localhost:27017';
/*
 Middleware is a function, operation, that execute when a specific route is hit
ex: 
app.use('/example', () => {
    do  something when '/example' route is hit
})
*/ 

// Controllers
const rootController = (req, res) => {
        res.send("Root route")
}

const exampleController = (req, res) => {
    res.send("This is example route")
}

// Routes
app.get('/', rootController)

app.get('/example', exampleController)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


app.listen(PORT)