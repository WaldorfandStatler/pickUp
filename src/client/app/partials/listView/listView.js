
  angular.module('listView', ['pickUp.services'])
  .controller('ListViewController', function( $scope, GetGames, GameReq) {
     

    GetGames.getAllGames()
      .then( (result)=>{
        console.log('result from app.js', result);
        $scope.games = result;
        return result;
    });
      console.log($scope);
    

    let gameReq = {}
    $scope.requestGame = function() {
      console.log('requesting Game', $scope);
      console.log( "this here game", this.game);
      gameReq.smsNum = $scope.smsNum;
      gameReq.time = this.game.startTime;
      // gameReq.sport = game.sport;
      // gameReq.location = $scope.game.location;

      // GameReq.requestGame(gameReq)
      //   .then(function (game) {
      //     sharedProps.set(game);
      //     $location.path('/games');
      //   })
      //   .catch(function (error) {
      //     console.error('error requesting game ', error);
      //   });
        
    };
    $scope.data = {
      model: null,
      // availableOptions: timeSlots,
      // selectedOption: timeSlots[0]
    }
  });