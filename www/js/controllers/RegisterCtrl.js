app.controller('RegisterCtrl', function ($scope, $stateParams, $state, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.Register = function () {
        $state.go('app.main')
    }
});
