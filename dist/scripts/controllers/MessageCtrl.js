(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages").orderByChild("roomId");
    var messages = $firebaseArray(ref);
    
    return {
      getByRoomId: function (roomId) {
        messages.equalTo('roomId');// Filter the messages by their room ID.
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();