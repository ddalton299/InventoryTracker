const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const express = require('express');   
const items = require('./routes/api/items'); 
const path = require('path'); 

const app = express();

const db = require('./config/keys').mongoURI; 

app.use(bodyParser.json()); 
app.use('/api/items', items); 

const port = process.env.PORT || 5000;  
app.listen(port, () => console.log("We're alive!")); 