'use strict';

const express = require('express');
let id = 0;
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Welcome to Olympics 2020! Let the games begin!\n');
});

var request = require('request');

app.get('/coach/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  request(String(`http://backend:8080/coach/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      name = "Hello "+obj.firstName + " " + obj.lastName
      res.send(name);
    }
  })

});

app.get('/athlete/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  request(String(`http://backend:8080/athlete/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      if (id == 5) {
        name = "Hey "+obj.firstName + " " + obj.lastName + ", THIS IS YET ANOTHER TEST!"
      } else {
        name = "Hey "+obj.firstName + " " + obj.lastName + ", Bring Gold home!"
        
      }
      
      res.send(name);
    }
  })

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
