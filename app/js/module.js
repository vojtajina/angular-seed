var myApp = angular.module('myApp', []);

myApp.run(function($route) {
  $route.when('/view1', {template: 'partials/partial1.html', controller: MyCtrl1});
  $route.when('/view2', {template: 'partials/partial2.html', controller: MyCtrl2});
  $route.otherwise({redirectTo: '/view1'});
});
