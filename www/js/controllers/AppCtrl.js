
app.controller('AppCtrl', function ($scope, $state, $ionicModal, $ionicPopover, $timeout, $ionicPopup) {
    // Form data for the login modal
    $scope.loginData = {};
    console.log('AppCtrl');
    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    // var fab = document.getElementById('fab');
    // fab.addEventListener('click', function () {
    //     //location.href = 'https://twitter.com/satish_vr2011';
    //     window.open('https://twitter.com/satish_vr2011', '_blank');
    // });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

    $scope.EditProfile = function () {
            console.log('Entra en el EditProfile');
            var confirmPopup = $ionicPopup.confirm({
                title: 'Guardar cambios?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    $state.go('app.main');
                    //TODO: guardar los cambios
                } else {
                    $state.go('app.main');
                }

            });

        };

})
/*
app.controller('EditUserCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {
console.log('Entra en el controller EditUserCtrl');
  $scope.EditProfile = function () {
      console.log('Entra en el EditProfile del controller');
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirmar cambios',

      template: 'Esta seguro que quiere guardar los cambios realizados?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        $state.go('app.main');
      } else {
        $state.go('app.main');
      }

    });

  };
})*/
