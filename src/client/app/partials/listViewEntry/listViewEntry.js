var timeSlots = _.range(0, 24).map(function (hour) {
  return {
    id: hour.toString(),
    hour: hour,
    name: moment(hour, 'hh').format('h:mma')
  };
});

angular.module('listView')
.component('listViewEntry', {
  
  bindings: {
    game: '<'
    // requestGame: this.requestGame 
  },
 
  controller: function(GameReq, sharedProps, $location){
    // console.log('listviewentry', game);
   
    // game = this.game;
  
    let gameReq = {};
    this.requestGame = function(smsNum) {
    // console.log($scope.game);
    console.log('requesting Game', this.game);
    // console.log( "this here game", this);
    gameReq.smsNum = this.smsNum;
    gameReq.time = helpers.createGameTime(this.game.startTime);
    gameReq.sport = this.game.sport;
    gameReq.location = this.game.location;

    console.log("gameReq", gameReq);
    GameReq.requestGame(gameReq)
      .then(function (game) {
        sharedProps.set(game);
        $location.path('/games');
      })
      .catch(function (error) {
        console.error('error requesting game ', error);
      });
      
  };
    
  },
  templateUrl: 'app/partials/listViewEntry/listViewEntry.html'

})

// .controller('ListViewEntryController', function( $scope, GetGames, GameReq) {
  
//   $scope.game = games;
//   console.log($scope, "from entry view");
//     console.log("scope from listviewentry", $scope.games);
    

//     let gameReq = {}
//     $scope.requestGame = function() {
//       console.log('requesting Game', $scope);
//       console.log(this.game);
//       gameReq.smsNum = $scope.smsNum;
//       // gameReq.time = game.startTime;
//       // gameReq.sport = game.sport;
//       // gameReq.location = $scope.game.location;
      
//       // GameReq.requestGame(gameReq)
//       //   .then(function (game) {
//       //     sharedProps.set(game);
//       //     $location.path('/games');
//       //   })
//       //   .catch(function (error) {
//       //     console.error('error requesting game ', error);
//       //   });
        
//     }

//     $scope.data = {
//       model: null,
//       // availableOptions: timeSlots,
//       // selectedOption: timeSlots[0]
//     }
    
//   });
  
  
  
//   // .component('listViewEntry', {
//   //   bindings: {
//   //     games: '<'
//   //   },
//   //   controller: function(){
//   //     this.clickHandler = function() {
//   //       alert('sup');
//   //     }
//   //   },
//   //   template: 'listEntryView.html'
  
//   // })
