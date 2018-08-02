
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function( $scope, GetGames) {
     
      GetGames.getAllGames()
      .then( (result)=>{
        console.log('result from app.js', result);
        $scope.games = result;
        return result;
      });
      console.log($scope);
    });