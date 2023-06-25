// importing
const express = require('express');
const cors = require('cors')
const { create, readAll, remove, update,simpleFunction } = require('./crudoperator')

//initialization
const app = express();
const movieRoute = require('./src/Routes/movieRoute')


//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Direct the request to movieRoute.js
app.use('/movie',movieRoute)


//port

app.listen(24000,()=>{
    console.log("app is working on port 24000");

})