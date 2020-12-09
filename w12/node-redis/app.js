var redis = require('redis')

var client = redis.createClient(6379,'104.198.244.0');

client.on('connect', function() {
  console.log('connected');
  
});

/*
client.set('framework-adsoft', 'keras', function(err, reply) {
  console.log(reply);
});

client.get('framework-adsoft', function(err, reply) {
    console.log(reply);
});
*/


client.exists('query-adsoft', function(err, reply) {

    if (reply === 1) {
        console.log('exists');

	client.get('query-adsoft', function(err, reply) {
    		console.log(reply);
	});

    } else {

        console.log('doesn\'t exist');
        client.set('query-adsoft', '{"id":1, "name": "adsoft"}') 

    }
});

