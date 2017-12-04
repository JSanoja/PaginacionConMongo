var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/pagconmongo';
var longitud;
/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let saltar = parseInt(req.query.saltar);
    let limite = parseInt(req.query.limite);

    db.collection('usuarios').count(function(err, result) { //
      if (err) throw err;
      longitud = result;
    });
    db.collection('usuarios').find({},{ _id: false }).skip(saltar).limit(limite).toArray(function(err, result) { //
      if (err) throw err;
      db.close();
      let todo= {
        conteo: {
          longitud: longitud,
          desde: saltar,
          hasta: (saltar+limite),
          limite: limite
        },
        result
      }
      res.send(todo);
    });
  });
});

module.exports = router;
