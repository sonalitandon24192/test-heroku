    var express = require('express');
var app = express();
var fs = require('fs');
var Twit = require("twit");
var cors = require('cors');
app.use(cors());

// import word list
//abusive_json = require('./word_list/abusive_final_combined.json')
//abusive_list = abusive_json.map(function(d) { return d.words })

// for twitter api
var T = new Twit({
    "consumer_key": "ULVFOWWRwPBG31JmCSk3pA9WY",
    "consumer_secret": "GkpPuajWIi8OwFNHJMnKaAvLBCQcQZdiNnEViM44eqvTvAXkf7",
    "access_token": "973403711518183425-CNAn0AQYiT074O0XyALXdU2LiJUzGSg",
    "access_token_secret": "s986l8COxFydEgyOCSuHrtGRSldyunsKfZh59TRyx1tVd"
});



// Set up a URL route
app.get("/", function(req, res) {
 res.send("Heroku Demo!");
});



app.get('/tpi', function(req, res) {
    
});


function obtainTweets(screen_name,threshold, number, lastId, dataset, res, callback) {

   
}

// callback function
function find_abusive(error, data, screen_name, threshold, res) {

       
        }
}

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
