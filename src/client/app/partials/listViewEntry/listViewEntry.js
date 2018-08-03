

angular.module('listView')
.component('listViewEntry', {
  
  bindings: {
    game: '<'
    // requestGame: this.requestGame 
  },
 
  controller: function(GameReq, sharedProps, $location){
  console.log('game starttime', this.game.startTime);
  // console.log(helpers.formater(this.game.startTime));  
 this.time = helpers.createGameTime(this.game.startTime).toString().slice(0,21);

   this.game.time = helpers.createGameTime(this.game.startTime);

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
