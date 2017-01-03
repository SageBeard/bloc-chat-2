(function() {
  function HomeCtrl (Room, Message) {
   this.rooms = Room.all;
   this.messages = [];
   this.currentRoom = null;
   this.selectRoom = function(roomId) { //store active chat room 
     this.currentRoom = roomId, //show room's message container
     this.messages = Message.getByRoomId(roomId);
       console.log("room");
   } 
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();