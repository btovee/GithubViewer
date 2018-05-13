(function() {


  var app = angular.module('githubViewer');

  var UserController = function($scope, github, $routeParams, $location) {

    var onUserComplete = function(data) {
      $scope.GithubProfile = data;
      github.getRepos($scope.GithubProfile).then(onRepoComplete, onError);
    }

    var onRepoComplete = function(data) {
      $scope.repos = data;
    }

    var onError = function(response) {
      $scope.error = response.data.message;
    }
    
    $scope.furtherRepoDetails = function(repo){
      $location.path("/repo/" + $scope.username + "/" + repo );
    }
    

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';
    github.getUser($scope.username).then(onUserComplete, onError);


  }

  app.controller('UserController', UserController);


}());