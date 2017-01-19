(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    
    return {
      getByRoomId: function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        //method to filter message
      },
      
      send: function(newMessage) {
          messages.$add(newMessage);
          console.log("submit message")
        //submits to firebase server
        //inject cookies service
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

