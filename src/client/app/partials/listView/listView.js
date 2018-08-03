
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function( $scope, GetGames, GameReq) {
    console.log('listView games'  , $scope)
    GetGames.getAllGames()
      .then( (result)=>{
        console.log('get all games from listview ', result);
        $scope.games = result;
        return result;
    });
    joinGame = (game)=> {
      console.log(game);
    }
    $scope.data = {
      model: null,
    }
  });