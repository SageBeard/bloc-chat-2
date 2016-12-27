(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    this.addRoom = function(newRoom) {
      // add a new room here
      rooms.$add(newRoom)
    }
    
    this.all = rooms
    return this;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
