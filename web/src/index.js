var express = require('express');
var kue = require('kue');
var app = express();

var queue = kue.createQueue({
  redis: {
    host: 'queue',
    port: 6379
  }
});

queue.on('error', function(err) {
  console.log('Oops... ', err);
});

app.get('/', function (req, res) {

  var jobId = 'render-' + Date.now();

  var job = queue.create('render', {
    id: jobId,
    title: 'Job ' + jobId
  });

  job.priority('high');

  job.save(function(err) {
    if (err) {
      res.send('Error saving job ' + jobId, err);
    } else {
      res.send('Saved job ' + jobId);
    }
  });
});

app.listen(4000, function () {
  console.log('Web listening on port 4000');
});

kue.app.listen(4001);
