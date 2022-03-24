const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes-db-app',{

    useNewUrlParser:true,
    
})
    .then(db => console.log('db is connect'))
    .catch(err => console.error(err));