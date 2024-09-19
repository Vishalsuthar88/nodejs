const express = require('express');
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
//connect to mongodb
const dbURI = "mongodb+srv://vishal:vishal001@cluster0.phkdhd1.mongodb.net/learning-node?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) =>console.log(err))
//listen for requests
app.listen(3000);
//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))  // accepting form data
app.use(morgan('dev'));

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    // res.send("<h1>About page</h1>")
    res.render('about', {title:'About'});

})

//blog routes
app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404', {title:'404'});
})