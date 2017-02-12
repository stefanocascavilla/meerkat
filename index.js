var express = require('express');
var app = express();
var engines = require('consolidate');
<<<<<<< HEAD
var fs = require('fs');
var bodyParser = require('body-parser');
=======
var fs = require('fs'); 
>>>>>>> 39429f300c2c8035767d2b512ae4737c8489958a

app.use(express.static('./views'));
app.use(express.static('./media'));
app.use(express.static('./js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

var texts;

fs.readFile('texts.json', (err, data) => {
  if (err) {
    throw err;
  }

  texts = JSON.parse(data);
<<<<<<< HEAD
  console.log('Lettura del file avvenuta con successo!');
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cascavilla1@gmail.com',
        pass: 'salsarosasalsabianca'
    }
});

app.get('/', (req, res) => {
  res.render('home', {
    texts: texts
  });
});

app.post('/send', (req, res) => {
  const taken = (req.body);
  
=======
  console.log('File letto con successo')
});

app.get('/', function(req, res){
  res.render('home.hbs', {
    texts: texts
  });
>>>>>>> 39429f300c2c8035767d2b512ae4737c8489958a
});

app.listen(3000, function(){
  console.log('Connessi');
});
