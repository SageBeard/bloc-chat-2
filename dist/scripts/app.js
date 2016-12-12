myApp.config(function($stateProvider, $urlRouterProvider) {
  $locationProvider
    .html5Mode({
    enabled: true,
    requireBase: false
  });
  
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html"
    })
});



angular
    .module('bloc', ['ui.router'], ["firebase"])
    .config(config);
 })();