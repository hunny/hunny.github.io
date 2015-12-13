(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        console.log('page loading completed');
    });
    var app = angular.module('app', ['ngRoute', 
        'app.directives', 
        'app.controllers']);
    app.constant('PATH', {
      relativePath: 'dest/data/',
      resource: 'dest/resource/',
      tpl: 'dest/tpl/',
      image: 'dest/data/upload/',
      suffix: ''
    });
    app.config(['$routeProvider', 'PATH', function($routeProvider, PATH) {
         $routeProvider
        .when('', {
            redirectTo: '/list'
        })
        .when('/list', {
            templateUrl: PATH.tpl + 'home.tpl.html',
            controller: 'homeController'
        })
        .when('/itemimages/:id', {
            templateUrl: PATH.tpl + 'itemimages.tpl.html',
            controller: 'itemimagesController'
        })
        .when('/listimages', {
            templateUrl: PATH.tpl + 'itemimages.list.tpl.html',
            controller: 'itemimageslistController'
        })
        .when('/restimages/:id', {
            templateUrl: PATH.tpl + 'itemimages.rest.tpl.html',
            controller: 'itemimagesrestController'
        })
        .when('/restimages', {
            templateUrl: PATH.tpl + 'itemimages.rest.tpl.html',
            controller: 'itemimagesrestController'
        })
        .otherwise({
            redirectTo: '/list'
        });
    }]);
    // Attribute Isolated Scope
    app.run(function() {
        // Do post-load initialization stuff here
        console.log('angular app run load finished......');
    });
})(window.angular);

