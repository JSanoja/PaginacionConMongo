var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/pagconmongo';

function crearDB ()  {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Base de Datos creada');
  db.close();
});
}
function crearCollection(name) { //"customers"
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      db.createCollection(name, function(err, res) {
      if (err) throw err;
        console.log('Collection usuarios, creada');
        db.close();
    });
  });
}

function insertarVarios(data, collection) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection(collection).insertMany(data, function(err, res) {
      if (err) throw err;
      console.log('Numero de Usuarios creados: ' + res.insertedCount);
      db.close();
    });
  });
}

crearDB();
crearCollection('usuarios');
var datos = [
    {
      nombre: 'Juan', apellido: 'Sanoja', domicilio: 'Valentin'
    },
    {
      nombre: 'Pedro', apellido: 'Sanoja', domicilio: 'Virasoro'
    },
    {
      nombre: 'Gabriel', apellido: 'Iturregui', domicilio: 'Arevalo'
    },
    {
      nombre: 'Ramiro', apellido: 'Garcia', domicilio: 'Arevalo'
    },
    {
      nombre: 'Susana', apellido: 'Altamira', domicilio: 'Puerto M'
    },
    {
      nombre: 'Marcela', apellido: 'Rodriguez', domicilio: 'Independencia'
    },
    {
      nombre: 'Lucia', apellido: 'Zea', domicilio: 'Palermo'
    },
    {
      nombre: 'Marina', apellido: 'Paez', domicilio: 'Boca'
    }
  ];
insertarVarios(datos, 'usuarios');
