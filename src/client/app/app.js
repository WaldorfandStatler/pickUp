angular.module('pickUp', ['ui.router', 'gameReqForm', 'games'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');

  $stateProvider
    .state('gameReq', {
      url: '/index',
      templateUrl: 'app/partials/gameReq/gameReqForm.html',
      controller: 'TimeSelectController'
    })
    .state('games', {
      url: '/games',
      templateUrl: 'app/partials/games/games.html',
      controller: 'GamesController'
    });
});
