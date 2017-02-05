/* .controller('NowPlayingController', function ($scope, MoviesFactory) {
  MoviesFactory.getNowPlaying()
            .then(function (response) {
              $scope.movies = response.data.results
            })
})
    .controller('PopularController', function ($scope, MoviesFactory) {
      MoviesFactory.getPopular()
            .then(function (response) {
              $scope.movies = response.data.results
            })
    })
    .controller('UpcomingController', function ($scope, MoviesFactory) {
      MoviesFactory.getUpcoming()
            .then(function (response) {
              $scope.movies = response.data.results
            })
    })
    .controller('TopRatedController', function ($scope, MoviesFactory) {
      MoviesFactory.getTopRated()
            .then(function (response) {
              $scope.movies = response.data.results
            })
    })
.config(function ($routeProvider) {
  $routeProvider
        .when('/nowplaying', {
          templateUrl: 'templates/nowPlaying/template.html',
          controller: 'NowPlayingController'
        })
        .when('/popular', {
          templateUrl: 'templates/popular/template.html',
          controller: 'PopularController'
        })
        .when('/topRated', {
          templateUrl: 'templates/topRated/template.html',
          controller: 'TopRatedController'
        })
        .when('/upcoming', {
          templateUrl: 'templates/upcoming/template.html',
          controller: 'UpcomingController'
        })
        .otherwise('/nowplaying')
}) */
