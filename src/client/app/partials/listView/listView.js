
  
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function($scope,  GetGames, sharedProps) {
    console.log('list view controller');
      console.log(data);
      $scope.games = games;
      console.log($scope);
    //   $scope.games = GetGames.getAllGames();
    //   {
    //     GetGames.getAllGames()
    //     .then
    //   };

    
    });