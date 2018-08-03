angular.module('listView')
.component('listViewEntry', {

  bindings: {
    game: '<'
  },
  controller: function(){
    this.clickHandler = function() {
      alert('sup');
    }
    
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
