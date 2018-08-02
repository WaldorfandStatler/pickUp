
  
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function($scope,  GetGames, sharedProps) {
    console.log('list view controller');
      console.log("games", games);
      $scope.games = games.data.$$state.value.data;
      console.log($scope);
    //   $scope.games = GetGames.getAllGames();
    //   {
    //     GetGames.getAllGames()
    //     .then
    //   };

    
    });