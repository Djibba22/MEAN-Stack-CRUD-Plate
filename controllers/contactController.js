var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('AppCtrl',['$scope','$http',
function($scope,$http){
  console.log("Hello from the controller");
}]);
