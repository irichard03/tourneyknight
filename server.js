//Dependencies
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

//Database
const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
const Player = mongoose.model('Player',
    { 
        name: String,
        alliance: String,
        allegiance: String
    });
const playerOne = new Player({ name: 'Ian', alliance: 'Order', allegiance: 'FyreSlayers' });
playerOne.save().then( () => console.log('Added Player'));

//Server
const app = express();

app.get('/', ( req, res) => res.send('I\'m listening.'));
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));


