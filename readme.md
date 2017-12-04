# Paginacion con MongoDB
- Ejemplo de paginacion con mongo.
- Front en AngularJs
- Back con NodeJS & Express
- Base de Datos en MongoDB

# Estructura de la Base de Datos
- Nombre: pagmongo
- Coleccion: usuarios
- Estructura json
```json 
[
    {
      "nombre": String,
      "apellido": String,
      "domicilio": String
    }
]
```

# Instalacion 
1. `git clone https://github.com/JSanoja/PaginacionConMongo.git`
2. `cd PaginacionConMongo`
3. `npm install`
4. Abrir Servidor MongoDB
5. Crear base de datos y rellenar algunos datos con `node crearmongo.js`
6. Iniciar la aplicacion con `npm start`
7. Abrir en el navegador http://localhost:3000

