var express = require('express');
var app = express();

var apiEndpoint = process.env.MISTORY_API_ENDPOINT;
if (!apiEndpoint) {
	console.log('MISTORY_API_ENDPOINT environment variable not set. Exiting');
	process.exit(1);
}

app.get('/config', function(req, res){
  res.send({'apiEndpoint': apiEndpoint});
});

app.use(express.static(__dirname));
app.listen(3000);
