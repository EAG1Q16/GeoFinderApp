/**
 * Created by Marta_ on 28/11/2016.
 */
app.controller('AdventureCtrl', function ($scope, $ionicPopup, $http, $rootScope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state){
  console.log("rootscope: "+$rootScope.UserID);
  var adventureID = window.location.href.split("/").pop();
  console.log("AdventureID: " + adventureID);

  http.get(base_url+'/adventures/id/' + adventureID)
    .success(function(data){
      $scope.AdventureProfile = data;
      $scope.comments = data.comments;
      console.log($scope.AdventureProfile);
      console.lof($scope.comments);
    })
    .error(function (data) {
      console.log("Error: " + data);
    })

})
