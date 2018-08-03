angular.module('listView')
  .component('listViewEntry', {
    bindings: {
      game: '<'
    },
    controller: function (GameReq, sharedProps, $location) {
      console.log('game starttime', this.game.startTime);
      this.time = helpers.createGameTime(this.game.startTime).toString().slice(0, 21);
      this.game.time = helpers.createGameTime(this.game.startTime);
      let gameReq = {};
      this.requestGame = function (smsNum) {
        console.log('requesting Game', this.game);
        gameReq.smsNum = this.smsNum;
        gameReq.time = helpers.createGameTime(this.game.startTime);
        gameReq.sport = this.game.sport;
        gameReq.location = this.game.location;
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