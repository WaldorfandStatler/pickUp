angular.module('listView')
.component('listViewEntry', {
  
  bindings: {
    game: '<'
    // requestGame: this.requestGame 
  },
 
  controller: function(GameReq){
    // console.log(requestGame);
    console.log('listviewentry',this);
    console.log(this.game);
    game = this.game;
    
    console.log(game);
    // this.clickHandler = function(game) {
    //   requestGame(game);
    // }
    let gameReq = {};
    this.requestGame = function() {
    // console.log($scope.game);
    console.log('requesting Game', this.game);
    // console.log( "this here game", this);
    gameReq.smsNum = this.game.smsNum;
    gameReq.time = this.game.startTime;
    gameReq.sport = this.game.sport;
    gameReq.location = this.game.location;

    // console.log(requestGame);
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
