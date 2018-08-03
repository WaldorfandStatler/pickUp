angular.module('pickUp.services', [])

.factory('GameReq', function($http) {
  var requestGame = function(gameReq) {
    return $http({
      method: 'POST',
      url: 'api/games',
      data: gameReq
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    requestGame: requestGame
  };
})
.factory('GetGames', function($http) {
  var getAllGames = function() {
    return $http({
      method: 'GET',
      url: 'api/games',
    })
    .then( (response) => {
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
})
.factory('SearchFields', function($http){
  var findFields = function(fieldReq) {
    return $http({
      method: 'GET',
      url: 'api/search',
      query: fieldReq
    })
    .then( (response) => {
      console.log(response.data);
      let data = response.data
      return data;
    })
    .catch((err)=> { console.log("Error finding fields", err)})
  };
  return {
    findFields: findFields
  };
})

