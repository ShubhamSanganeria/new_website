const express = require("express")
const ejs= require("ejs")
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
  res.render('home');
});

app.get('/maxiFair',function(req,res){
  res.render('maxiFair');
});

// *****************************************************EVENTS LINKS******************************
app.get('/events',function(req,res){
  res.render('events');
});

app.get('/art-attack.ejs',function(req,res){
  res.render('art-attack');
});

app.get('/pro-show.ejs',function(req,res){
  res.render('pro-show');
});
app.get('/miss-jamshedpur.ejs',function(req,res){
  res.render('miss-jamshedpur');
});
app.get('/masterchef.ejs',function(req,res){
  res.render('masterchef');
});
app.get('/jff.ejs',function(req,res){
  res.render('jff');
});
app.get('/kids-fashion-show.ejs',function(req,res){
  res.render('kids-fashion-show');
});

app.get('/contact_us',function(req,res){
  res.render('contact_us');
});
app.listen(3000,function(){
  console.log('Server started ')
});
