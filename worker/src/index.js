var kue = require('kue');

var queue = kue.createQueue({
  redis: {
    host: 'queue',
    port: 6379
  }
});

function render(data, done) {
  setTimeout(function() {
    console.log('Processing...');
    done();
  }, 1000);
}

queue.process('render', function(job, done) {
  render(job.data, function() {
    done();
    console.log('Processed job ' + job.data.id);
  });
});
