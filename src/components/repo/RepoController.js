(function(){

    var app = angular.module('githubViewer');

    var RepoController = function ( $scope, github, $routeParams){
        
        
        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;

        var onRepoComplete = function(data){
            $scope.repoInfo = data;
        }

        var onError = function(response) {
            $scope.error = response.data.message;
        }

        github.getRepoDetails($scope.username, $scope.repo).then(onRepoComplete,onError);
    }


    app.controller('RepoController', RepoController);


}())