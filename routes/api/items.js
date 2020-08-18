const express = require('express'); 
const router = express.Router(); 

const Item = require('../../models/item'); 

router.get('/', (req, res) =>{
    Item.find()
}); 

router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name, 
        location: '00a', 
        quantity: 1
    }); 
}); 

router.delete('/:id', (req, res)=>{
    Item.findById(req.param.id)
        .then(item => item.remove)
        .then(() => res.json({succ:true})).catch(err => res.status(404).json({succ:false})); 
}); 

router.post('/update/:id', (req, res) =>{
    // Do stuff
}); 
module.exports = router; 