﻿var base_url_local="http://localhost:3000";

app.controller('LoginCtrl',function ($scope, $http, $ionicPopup, $stateParams, $rootScope, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {

  $scope.user = {};

  $scope.login = function () {
    console.log("Función de login");
    console.log('username: ' + $scope.user.username);
    console.log('pass: ' + $scope.user.password);

      $http.post(base_url_local + '/user/login', $scope.user)
        .success(function (response) {
          console.log(response);
          $rootScope.UserID = response;
          $state.go('app.main')

        })
        .error(function (err) {
          $ionicPopup.alert({
            title: 'Error',
            template: 'Usuario o contraseña incorrecto'
          });
          console.log('Error: '+err);
        });
    };
  $scope.Register = function () {
    $state.go('createcount')
  };
  $scope.main = function () {
    $state.go('app.main')
  };
})


