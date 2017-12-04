var app=angular.module('dosalcubo', []); // inicializo angular
var estrellas=0;
var menu =0;
var saltar=0;
var limite=3;
var longitud;
var paginas;
var paginacion=[];
app.controller('main', function($scope, $http) {
  jQuery(".main").fadeIn();
	// Cuando se cargue la página, pide del API los datos de los usuarios
  recolectar();
  function recolectar() {
    $http.get('/usuarios?saltar='+saltar+'&limite='+limite)
        .then(function(data) { // cuando tenga respuesta del servidor
            $scope.usuarios = data.data.result; // construyo los datos
            $scope.limite = data.data.conteo.limite;
            longitud = data.data.conteo.longitud;
            $scope.longitud = longitud;
            paginas=parseInt((longitud/limite)+1);
            // console.log(paginas);
            for (i = 0; i < paginas; i++) {
              paginacion[i]=i+1;
            };
            $scope.paginas=paginacion;

            // console.log(data.data); // muestro datos
        }, function(data) { // si hay error
          console.log('Error: ' + data);
    });
  }



  $scope.siguiente = function () {

    if (saltar+3<longitud){
      saltar = saltar+3;
      recolectar();
    }
  };

  $scope.anterior = function () {
    if (saltar>0){
      saltar = saltar-3;
      recolectar();
    }

  };

  $scope.irPag = function (page) {
      console.log(page);
      saltar=(page*limite)-3;
      recolectar();


  };
});

jQuery(document).ready(function () {

});
