angular.module('searchField', ['pickUp.services'])
.controller('searchFieldController', function( $scope, SearchFields) {
    let query = ['sports fields'];
    SearchFields.findFields(query)
    .then( (result)=>{
        console.log("result from findFields", result);
        $scope.fields = result;
        return result;
    });
    console.log($scope);
        
        


    })
//   GetGames.getAllGames()
//     .then( (result)=>{
//       console.log('result from app.js', result);
//       $scope.games = result;
//       return result;
//     });
//     console.log($scope);
  