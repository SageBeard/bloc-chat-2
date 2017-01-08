
(function() {
  function  config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('home', {
        url: '/', 
        controller: "HomeCtrl as home",
        templateUrl: "/templates/home.html"
      });

}
  
function BlocChatCookies($cookies, $uibModal, $uibModalInstance, EnterUserNameCtrl) {
  var currentUser = $cookies.get('blocChatCurrentUser');
  if (!currentUser || currentUser === '') {
     var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/nameModal.html',
        controller: 'EnterUserNameCtrl',
        controllerAs: '$ctrl',
        backdrop: 'static',
        keyboard: false
     });
  }

    function EnterUserNameCtrl($cookies, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.name = "";
        $ctrl.setUsername = function(userName) {
           $cookies.put('blocChatCurrentUser', 'userName');// set new cookie here
           $uibModalInstance.dismiss('cancel');
        };
    }
}
 
angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .controller('EnterUserNameCtrl', ['$cookies', '$uibModalInstance', EnterUserNameCtrl])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);

 })();

