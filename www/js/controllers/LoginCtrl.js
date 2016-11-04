app.controller('LoginCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {

  $scope.Register = function () {
    $state.go('createcount')
  };

  $scope.login = function () {
    $state.go('app.main')
    //TODO: login
  };

});
