
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

})

app.controller('MainCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state){
  /*$scope.items = [
    { id: 1,
      image: "http://www.euro-sur.com/wp-content/uploads/2016/01/mudanza-barcelona-precio-mudanzabarcelona-mudanza-presupuesto-online-guardamuebles-trasteros-traslado-oficinas-empresas-de-mudanzas-internacionales-transportes-y-mudanzas-4.jpg",
      name: 'Aventura Deluxe',
      location: 'Barcelona'
    },
    {
      id: 2,
      image: "https://cdn.civitatis.com/guias/madrid/fotos/madrid.jpg",
      name: 'Aventura Extrema',
      location: 'Madrid'
    },
    {
      id: 3,
      image: "http://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/castilla-leon/r_panoramica_salamanca_s29270602_01.jpg",
      name: 'SuperAdventure',
      location: 'Salamanca'
    }
  ];*/

  $scope.showNear = function(){
    $scope.items = [
      { id: 1,
        image: "http://www.euro-sur.com/wp-content/uploads/2016/01/mudanza-barcelona-precio-mudanzabarcelona-mudanza-presupuesto-online-guardamuebles-trasteros-traslado-oficinas-empresas-de-mudanzas-internacionales-transportes-y-mudanzas-4.jpg",
        name: 'Aventura Deluxe',
        location: 'Barcelona'
      }
    ];
  }

  $scope.showAll = function(){
    $scope.items = [
      { id: 1,
        image: "http://www.euro-sur.com/wp-content/uploads/2016/01/mudanza-barcelona-precio-mudanzabarcelona-mudanza-presupuesto-online-guardamuebles-trasteros-traslado-oficinas-empresas-de-mudanzas-internacionales-transportes-y-mudanzas-4.jpg",
        name: 'Aventura Deluxe',
        location: 'Barcelona'
      },
      {
        id: 2,
        image: "https://cdn.civitatis.com/guias/madrid/fotos/madrid.jpg",
        name: 'Aventura Extrema',
        location: 'Madrid'
      },
      {
        id: 3,
        image: "http://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/castilla-leon/r_panoramica_salamanca_s29270602_01.jpg",
        name: 'SuperAdventure',
        location: 'Salamanca'
      }
    ];
  }

})
app.controller('AllCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state){
  $scope.items = [
    { id: 1,
      image: "http://www.euro-sur.com/wp-content/uploads/2016/01/mudanza-barcelona-precio-mudanzabarcelona-mudanza-presupuesto-online-guardamuebles-trasteros-traslado-oficinas-empresas-de-mudanzas-internacionales-transportes-y-mudanzas-4.jpg",
      name: 'Aventura Deluxe',
      location: 'Barcelona'
    }
  ];
})

app.controller('MyAdventureCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state){
  $scope.items = [
    {
      id: 1,
      image: "https://cdn.civitatis.com/guias/madrid/fotos/madrid.jpg",
      name: 'Aventura Extrema',
      location: 'Madrid'
    },
    {
      id: 2,
      image: "http://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/castilla-leon/r_panoramica_salamanca_s29270602_01.jpg",
      name: 'SuperAdventure',
      location: 'Salamanca'
    }
  ];
  $scope.showCreadas = function(){

  }
  $scope.showJugadas = function(){

  }
})

app.controller('EditUserCtrl', function ($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {
 $scope.user = {
   username: 'martacou',
   image: 'https://pbs.twimg.com/profile_images/591181913794162688/BXQiY1VY_400x400.jpg',
   name: 'Marta Couto',
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
