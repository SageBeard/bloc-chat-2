(function() {
  function AddRoomCtrl(Room, $uibModal, $uibModalInstance, ModalInstanceCtrl) {
    this.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/roomModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem
      });
    }
  }

  function ModalInstanceCtrl(Room, $uibModalInstance) {    
    var $ctrl = this;
    $ctrl.roomName = "";
    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    $ctrl.save = function () {  
      var newRoom = $ctrl.roomName;
      Room.addRoom(newRoom)

      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('AddRoomCtrl', ['Room', '$uibModal', AddRoomCtrl])
    .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', ModalInstanceCtrl]);
})();
