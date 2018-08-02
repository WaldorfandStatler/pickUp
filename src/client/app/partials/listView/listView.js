
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function( $scope,  GetGames, $ctrl, sharedProps) {
      // $scope.games = {
      //   games: games,
      
      // };
    $scope.games = games;
    console.log("hi there");
    
    });