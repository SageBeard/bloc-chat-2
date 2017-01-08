
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
  
function BlocChatCookies($cookies, $uibModal) {
  var currentUser = $cookies.get('blocChatCurrentUser');
  if (!currentUser || currentUser === '') {
    $cookies.put('blocChatCurrentUser', 'username');
     var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/nameModal.html',
        controllerAs: '$ctrl',
        backdrop: 'static',
        keyboard: false
     });
  }
}

angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);

 })();

