angular.module('pickUp', ['ui.router', 'gameReqForm', 'games'])

  .config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/index');

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
      }) //;
      //Thus begins the fun
      .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/partials/mapView/mapView.html',
        controller: 'MapViewController'
      })
      .state('listView', {
        url: '/listView',
        templateUrl: 'app/partials/listView/listView.html',
        // component: 'listView',
        controller: 'ListViewController',
        // data : 'soccer',
        resolve: {
          games: function (GetGames) {
            GetGames.getAllGames()
            .then( (result)=>{
              console.log('result from app.js', result);
              return result;
          });
        }
        },
      })
  });