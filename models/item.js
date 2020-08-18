const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


// Create Schema 
const ItemSchema = new Schema({
        name:{
            type: String, 
            required: true
        },
        date: {
            type: Date, 
            default: Date.now 
        },
        quantity:{
            type: Number, 
            required: true 
        }, 
        location:{
            type: String, 
            required: true 
        }
    }); 

    module.exports = item = mongoose.model('item', ItemSchema); 
