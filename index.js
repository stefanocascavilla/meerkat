var express = require('express');
var app = express();
var engines = require('consolidate');
var fs = require('fs'); 

app.use(express.static('./views'));
app.use(express.static('./media'));

app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

var texts;

fs.readFile('texts.json', (err, data) => {
  if (err) {
    throw err;
  }

  texts = JSON.parse(data);
  console.log('File letto con successo')
});

app.get('/', function(req, res){
  res.render('home.hbs', {
    texts: texts
  });
});

app.listen(3000, function(){
  console.log('Connessi');
});
