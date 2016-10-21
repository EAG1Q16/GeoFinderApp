app.controller('LoginCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {

  $scope.Createcount = function () {
    $state.go('createcount')
  }
});
