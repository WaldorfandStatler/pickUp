var timeSlots = _.range(17, 23).map(function (hour) {
  return {
    id: hour.toString(),
    hour: hour,
    name: moment(hour, 'hh').format('h:mma')
  };
});

angular.module('gameReqForm', ['pickUp.services'])
.controller('TimeSelectController', function($scope, $location, GameReq, sharedProps) {
    var gameReq = {};
    $scope.requestGame = function() {
      console.log('requesting Game');
      gameReq.time = helpers.createGameTime($scope.data.selectedOption.hour);
      gameReq.smsNum = $scope.smsNum;
      gameReq.sport = $scope.sportInput;
      gameReq.location = $scope.locationInput;

      console.log(gameReq);

      GameReq.requestGame(gameReq)
        .then(function (game) {
          sharedProps.set(game);
          $location.path('/games');
        })
        .catch(function (error) {
          console.error('error requesting game ', error);
        });
    };
    $scope.data = {
      model: null,
      availableOptions: timeSlots,
      selectedOption: timeSlots[0]
    };
  });