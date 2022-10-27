require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

const Item = require('./models/Item');
const Response = require('./models/Response');
const corsOptions = {
    origin: [
        'http://localhost:3000',
    ],
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

try {
    mongoose
      .connect(process.env.MONGO_CONNECTION_STRING)
      .then(console.log('Connected successfully to db server!'));
  } catch (error) {
    console.log(error);
  }
  
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.post('/api/answer', async (req, res) => {
    const { response, isCorrect, currentScore } = req.body;
    console.log('req', req.body)
    const date = Date();
    const userItem = {
        date,
        response, 
        isCorrect,
        currentScore
    };
    console.log('userItem', userItem)
    try {
        const newResponse = await Response.create(userItem);
        res.status(201).json(newResponse);
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})