const express = require('express');
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
const PORT = 3000;
require('dotenv').config();
//connect to mongodb\
const dbURI=process.env.MONGODB_URI;
// const dbURI = "mongodb://localhost:27017/blogmania" //MONGODB COMPASS
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) =>console.log(err))
//listen for requests
// app.listen(3000);
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
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
