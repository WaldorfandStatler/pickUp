angular.module('pickUp.services', [])

.factory('GameReq', function($http) {
  var requestGame = function(gameReq) {
    return $http({
      method: 'POST',
      url: 'api/games',
      data: gameReq
    })
    .then(function (resp) {
      console.log('POST response data: ', resp.data);
      return resp.data;
    });
  };
  return {
    requestGame: requestGame
  };
})
.factory('GetGames', function($http) {
  var getAllGames = function() {
    console.log('.factory getGames - getAllGames')
    return $http({
      method: 'GET',
      url: 'api/games',
      // data: gameReq
    })
    .then( (response) => {
      console.log(response.data);
      let data = response.data
      return data;
    })
    .catch((err)=> { console.log("Get games factory is broken", err)})
  };
  return {
    getAllGames: getAllGames
  };
})
.factory('sharedProps', function(){
  var property = '';
  return {
    get: function() {
      return property;
    },
    set: function(val) {
      property = val;
    }
  };
});