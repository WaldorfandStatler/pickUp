
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function( $scope, GetGames, GameReq) {
    console.log('listView games'  , $scope)
 
    GetGames.getAllGames()
      .then( (result)=>{
        console.log('get all games from listview ', result);
        $scope.games = result;
        return result;
    });

      console.log($scope);
    

    let gameReq = {};
    
    $scope.requestGame = function() {
      console.log($scope.game);
      console.log('requesting Game', $scope);
      console.log( "this here game", this);
      gameReq.smsNum = $scope.smsNum;
      // gameReq.time = this.game.startTime;
      // gameReq.sport = game.sport;
      // gameReq.location = $scope.game.location;

      GameReq.requestGame(gameReq)
        .then(function (game) {
          sharedProps.set(game);
          $location.path('/games');
        })
        .catch(function (error) {
          console.error('error requesting game ', error);
        });
        
    };
    joinGame = (game)=> {
      console.log(game);
    }
    $scope.data = {
      model: null,
      // availableOptions: timeSlots,
      // selectedOption: timeSlots[0]
    }
  });