// Public/app.js (clientapp.js)
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
        })
        .when('/animalsPage', {
            templateUrl: '/views/templates/animalsPage.html',
            controller: 'AnimalController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: '/home',
            templateUrl: '/views/templates/home.html'
        })
}]);