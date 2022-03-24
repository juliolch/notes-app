const express = require ('express');
const path = require ('path');
const {engine} = require ('express-handlebars');
const methoOverride = require ('method-override');
const session = require ('express-session');


//initiliazations
const app=express();
require('./database');

//setting
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
    
}));

app.set('views engine','.hbs');

//middelewares
app.use(express.urlencoded({extended:false}));
app.use(methoOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true,
}));

//global variables 

//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/user'));

//Static files
app.use(express.static(path.join(__dirname,'piblic')));

//server is listenning
app.listen(app.get('port'),()=>{
    console.log('sercer on port ', app.get('port'));
});