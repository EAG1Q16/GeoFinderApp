﻿var base_url_local="http://localhost:3000";

app.controller('RegisterCtrl', function ($scope, $http, $ionicPopup, $stateParams, $state, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $scope.NewUser = {};

  $scope.Register = function(){

    if($scope.NewUser.password == $scope.NewUser.repeat){
      $http.post('http://localhost:3000/user/signup', $scope.NewUser)
        .success(function(response){
          $scope.NewUser = {}; //clear the form
          console.log('Usuario registrado');
          console.log(response);
          $state.go('login');
        })
        .error(function(err){
          console.log('Error:' + err);
          $ionicPopup.alert({
            title: 'Error',
            template: 'No se ha podido registrar el usuario'
          });
          console.log('Error: '+err);
        })
    }
    else{
      $ionicPopup.alert({
        title: 'Error',
        template: 'Las contraseñas no coinciden'
      });
    }

  };

});
