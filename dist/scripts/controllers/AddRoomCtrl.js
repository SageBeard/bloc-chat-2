(function() {
  function AddRoomCtrl (Room, $uibModal) {
     this.open = function (size, parentSelector) {
        var parentElem = parentSelector ? 
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: size,
          appendTo: parentElem,
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
      });
   };
    
  }

  angular
    .module('blocChat')
    .controller('AddRoomCtrl', ['$uibModal', 'Room', AddRoomCtrl])
    .controller('ModalInstanceCtrl', '$uibModalInstance', [function ($uibModalInstance, items) {
      var $ctrl = this;
      $ctrl.items = items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

      $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }]);
})();