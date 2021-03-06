angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CachorroCtrl', function($scope) {
  $scope.titulo="Busca por Cachorros";
  $scope.animais = [{
    "nome":"Thor",
    "descricao":"Pensando mais a longo prazo. o inicio da atividade de formação",
    "contato":"2345678",
    "imagem":"http://lorempixel.com/300/150/animais/55"
  },
  {
    "nome":"Eike",
    "descricao":"Pensando mais a longo prazo. o inicio da atividade de formação",
    "contato":"321321321",
    "imagem":"http://lorempixel.com/300/150/animais/55"
  },
  {
    "nome":"Cunha",
    "descricao":"Pensando mais a longo prazo. o inicio da atividade de formação",
    "contato":"12340987",
    "imagem":"http://lorempixel.com/300/150/animais/55"
  },
  {
    "nome":"Aecia",
    "descricao":"Pensando mais a longo prazo. o inicio da atividade de formação",
    "contato":"54678342",
    "imagem":"http://lorempixel.com/300/150/animais/55"
  }];
})

.controller('GatosCtrl', function($scope) {
  $scope.animais = [
  ];
})

.controller('PerfilCtrl', function($scope) {
});
