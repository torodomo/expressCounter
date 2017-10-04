// Load the express module (Where do you think this comes from?)
var express = require("express");

// invoke var express and store the resulting application in var app
var app = express();

var count = 0;

// root route
app.get('/', function (req, res){
    count ++;
    res.render('index.ejs', {passOn: count});
});
// route to process new user form data:
app.post('/count', function (req, res){
    count ++;
    console.log("click");
    res.redirect('/');
//code to add user to db goes here!
})

app.post('/reset', function (req, res){
    count = 0;
    res.redirect('/');
})


  // Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  


