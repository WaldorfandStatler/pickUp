(function(window) {

window.helpers = {

  // formater: function(time){
  //   var formatTime = new Date(
  //     moment().format(time)
  //   );
  //   return format;
  // },

  createGameTime: function (reqTime) {
    // works for TODAY
    var gameTime = new Date(
      moment().get('year'),
      moment().get('month'),
      moment().get('date'),
      parseInt(reqTime)
    );
    return gameTime;
  },
};

})(window);