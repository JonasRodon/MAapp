angular.module('MAapp', ['ngRoute'])
.factory('MoviesFactory', function ($http) {
  var apiKey = 'e39d8edc36d115e09d64b4a40f748c3d'

  function getPopular () {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
    url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }

  function getUpcoming () {
    var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
    url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }

  function getTopRated () {
    var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
    url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }

  function getNowPlaying () {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
    url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }

  return {
    getPopular: getPopular,
    getUpcoming: getUpcoming,
    getTopRated: getTopRated,
    getNowPlaying: getNowPlaying
  }
})
.controller('NowPlayingController', function ($scope, MoviesFactory) {
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
})
