var base_url_local="http://localhost:80";

app.controller('LoginCtrl', function ($scope, $http, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {

  $scope.Register = function () {
    $state.go('createcount')
  };

  $scope.data={};

  $scope.login = function () {
    console.log("Función de login");
    /*$http.post(base_url_local+'/user/login', $scope.data)
      .success(function (response){
        console.log("Datos: " + data);
        console.log("Respuesta: "+response);
        $state.go('app.main')
      })
      .error(function(response){
        console.log("Error: "+response);
      })*/
    $state.go('app.main')
  };
});
