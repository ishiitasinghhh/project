/*var express = require("express");
var app = express();
var userRoute= require('./user.js');
app.use('/user', userRoute);
app.get('/insert' , (req,res)=>{
    res.status(500)//json({
        //'message': 'error occured'
    res.end("hello world");
    
})

app.get('/delete' , (req,res)=>{
    res.status(500)//json({
        //'message': 'error occured'
    res.end("bye world");
})
app.get('/show' , (req,res)=>{
    res.status(500)//json({
        //'message': 'error occured'
    res.end("nice world");
})
app.get('/admin' , (req,res)=>{
    res.status(500)//json({
        //'message': 'error occured'
    res.end("this is admin");
})
app.listen(3000)*/

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('portfolio', {
        name: "Ishita",
        about: "I'm a passionate web developer with expertise in front-end and back-end development",
        projects: [
            { title: 'Project 1', description: "Description of project 1"},
            { title: 'Project 2', description: "Description of project 2"},
            { title: 'Project 3', description: "Description of project 3"}
        ],
        contactEmail: 'ishiitasinghh@gmail.com'
    });
});
app.listen(port,()=> {
    console.log('Portfolio app listening at http://localhost:${port}');
});














