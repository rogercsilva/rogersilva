
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.cachorros', {
    url: '/cachorros/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/listaanimais.html',
        controller: 'CachorrosCtrl'
      }
    }
  })

  .state('app.gatos', {
      url: '/gatos',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'GatosCtrl'
        }
      }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
    })
    
    .state('app.cachorros', {
    url: '/cachorros/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/animal.html',
        controller: 'CachorrosCtrl'
      }
    }
  })

  .state('app.gatos', {
      url: '/gatos',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'GatosCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gatos');
});
