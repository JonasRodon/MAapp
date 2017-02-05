angular.module('MAapp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
            .when('/now-playing', {
              templateUrl: 'templates/nowPlaying/template.html'
            })
            .when('/popular', {
              templateUrl: 'templates/popular/template.html'
            })
            .when('/topRated', {
              templateUrl: 'templates/topRated/template.html'
            })
			.when('/upcoming', {
  			templateUrl: 'templates/upcoming/template.html'
})
    })
