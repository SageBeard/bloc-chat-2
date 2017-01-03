(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');

    return {
      getByRoomId: function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        console.log("messages");
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

