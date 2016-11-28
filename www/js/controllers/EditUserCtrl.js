/**
 * Created by Marta_ on 28/11/2016.
 */
app.controller('EditUserCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {
  $scope.user = {
    username: 'martacou',
    name: 'Marta Couto',
    image: '/img/geofinderico.png',
    email: 'marta.couto.g@gmail.com',
    birthdate: '30/07/1993',
    gender:'Mujer',
    registerdate: '2009'
  }

  console.log('Entra en el controller EditUserCtrl');
  $scope.EditProfile = function () {
    console.log('Entra en el EditProfile del controller');
    var confirmPopup = $ionicPopup.confirm({
      title: 'Guardar cambios?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        var savePopup = $ionicPopup.alert({
          title: 'Cambios guardados'
        })
      } else {
        var errorPopup = $ionicPopup.alert({
          title: 'No se han podido guardar los cambios realizados'
        })

      }

    });

  };
})
