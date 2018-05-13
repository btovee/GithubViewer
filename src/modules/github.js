(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/users/' + username
      }).then(function(response) {
        return response.data;
      });
    }

    var getRepos = function(user) {
      return $http({
        method: 'GET',
        url: user.repos_url
      }).then(function(response) {
        return response.data;
      });
    }

    var getRepoDetails = function(username, reposName){
      return $http({
        method: 'GET',
        url: 'https://api.github.com/repos/' + username + '/' + reposName
      }).then(function(response) {
        return response.data;
      });
    }


    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
  }


  var module = angular.module("githubViewer");
  module.factory("github", github);

}());