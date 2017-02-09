var express = require('express');
var app = express();
var engines = require('consolidate');

app.use(express.static('./views'));
app.use(express.static('./media'));

app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

var texts;

app.get('/', function(req, res){
  res.render('home.hbs');
});

app.listen(3000, function(){
  console.log('Connessi');
});
