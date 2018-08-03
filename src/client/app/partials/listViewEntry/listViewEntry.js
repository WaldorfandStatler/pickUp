angular.module('listViewEntry', ['pickUp.services'])
  .controller('ListViewEntryController', function( $scope, GetGames, GameReq) {
     
    $scope.game = games;
    console.log($scope, "from entry view");
    console.log("scope from listviewentry", $scope.games);
    

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
        
    }

    $scope.data = {
      model: null,
      // availableOptions: timeSlots,
      // selectedOption: timeSlots[0]
    }

  });
  angular.module('pickUp')
  .component('videoListEntry', {
    bindings: {
      games: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });


