module.exports = function(app) {

  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({extended: true}));

  app.route('/')
  .get(function(req,res){
    res.render('index.html');
  })
  .post(function(req, res){
    res.send('New Game');
  });

  app.get('/game', function(req, res){
    res.render('game.html')
  });

  app.post('/game', function(req, res){
    res.render('game.html')
  });

  app.get('/choose', function(req, res){
    res.render('choose.html')
  });

  app.post('/choose', function(req, res){
    res.render('choose.html')
  });

  app.get('/lost', function(req,res){
    res.render('lost.html')
  });

  app.get('/won', function(req,res){
    res.render('won.html')
  });

}
