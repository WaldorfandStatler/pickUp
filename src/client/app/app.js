angular.module('pickUp', ['ui.router', 'gameReqForm', 'games','listView', 'mapView', 'searchField' ])

  .config(function ($stateProvider, $urlRouterProvider) {
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
      }) 
      // Thus begins the fun
      .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/partials/mapView/mapView.html',
        controller: 'MapViewController',
      })
      .state('listView', {
        url: '/listView',
        controller: 'ListViewController',
        templateUrl: 'app/partials/listView/listView.html',
       
      })
      .state('searchField', {
        url: '/searchField',
        controller: 'searchFieldController',
        templateUrl: 'app/partials/searchField/searchField.html', 
      })
  })