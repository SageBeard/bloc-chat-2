(function() {
  function HomeCtrl (Room, $scope) {
   this.rooms = Room.all;
   $scope.currentRoom = null;
   $scope.selectRoom = function(roomId) { //store active chat room 
     $scope.currentRoom = roomId; //show room's message container 
     console.log("room");
   } 
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();