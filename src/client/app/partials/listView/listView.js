
  
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function($scope,  GetGames, sharedProps) {
    console.log('list view controller');
      $scope.games = getGames();
    //   $scope.games = GetGames.getAllGames();
    //   {
    //     GetGames.getAllGames()
    //     .then
    //   };

    
    });