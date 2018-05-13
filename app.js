(function(){
  var app = angular.module('githubViewer', ["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
    .when("/main", {
      templateUrl: "src/components/main/main.html",
      controller: "MainController"
    })
    .when("/user/:username", {
      templateUrl: "src/components/user/user.html",
      controller: "UserController"
    })
    .when("/repo/:username/:repo", {
      templateUrl: "src/components/repo/repo.html",
      controller: "RepoController"
    })
    .otherwise({redirectTo:"/main"});
  });
  
  
}())