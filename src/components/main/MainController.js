(function() {


  var app = angular.module('githubViewer');

  var MainController = function($scope, $interval, $location) {

    $scope.countdown = 5;
    var countdownInterval = null;
    $scope.searchTerm = 'angular';

    $scope.findUser = function() {
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + $scope.searchTerm);
    }

    var decrementCountdown = function() {
      $scope.countdown--;
      if ($scope.countdown < 1) {
        $scope.findUser();
      }
    }

    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    startCountdown();

  }

  app.controller('MainController', MainController);


}());