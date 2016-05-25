var express = require('express');
var app = express();
var redis = require('redis');

// var client = redis.createClient(
//   process.env.QUEUE_PORT_6379_TCP_PORT,
//   process.env.QUEUE_PORT_6379_TCP_ADDR
// );

// console.log(process.env);

var client = redis.createClient('6379', 'queue');

app.get('/', function (req, res) {

  client.incr('counter', function(err, counter) {
    if (err) {
      return next(err);
    }
    res.send('This page has been viewed ' + counter + ' times!');
  });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});
