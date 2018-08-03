angular.module('listViewEntry', ['pickUp.services'])
  .controller('ListViewEntryController', function( $scope, GetGames, GameReq) {
     console.log($scope);

    let gameReq = {}
    $scope.requestGame = function() {
      console.log('requesting Game', $scope);
      console.log(this.game);
      gameReq.smsNum = $scope.smsNum;
      // gameReq.time = game.startTime;
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