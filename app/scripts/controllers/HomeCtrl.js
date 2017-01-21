(function() {
  function HomeCtrl (Room, Message, $cookies) {
   this.rooms = Room.all;
   this.messages = [];
   this.currentRoom = null;
   this.messageInput = "";
   this.currentUser = $cookies.get('blocChatCurrentUser');
   this.selectRoom = function(roomId) { //store active chat room 
     this.currentRoom = roomId, //show room's message container
     this.messages = Message.getByRoomId(roomId);
   }
   this.sendMessage = function() {
      Message.send({
        content: this.messageInput,
        roomId: this.currentRoom,
        userName: this.currentUser
      })
   }
   // function called sendMessage, using the Message Service
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
