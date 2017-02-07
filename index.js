var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var engines = require('consolidate');

var app = express();

app.use(express.static('./media'));
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
	let texts;
	fs.readFile('texts.json', function(err, data) {
		if (err) {
			throw err;
		}
		texts = JSON.parse(data);
	});

	res.render('home', {testi: texts});
});

app.listen(3000, function() {
	console.log('Connessi');
})
