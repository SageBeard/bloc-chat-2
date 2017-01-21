(function() {
  function HomeCtrl (Room, Message) {
   this.rooms = Room.all;
   this.messages = [];
   this.currentRoom = null;
   this.messageInput = "";
   this.selectRoom = function(roomId) { //store active chat room 
     this.currentRoom = roomId, //show room's message container
     this.messages = Message.getByRoomId(roomId);
   }
   this.sendMessage = function() {
      Message.send({
        content: this.messageInput,
        roomId: this.currentRoom
      })
   }
   // function called sendMessage, using the Message Service
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
