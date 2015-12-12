(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        console.log('page loading completed');
    });
    var app = angular.module('app', ['ngRoute', 'app.directives', 'app.controllers']);
    app.constant('PATH', {
      tpl: 'dest/tpl/',
      image: 'dest/resource/'
    });
    app.config(['$routeProvider', 'PATH', function($routeProvider, PATH) {
        $routeProvider
        .when('/list', {
            templateUrl: PATH.tpl + 'home.tpl.html',
            controller: 'homeController'
        })
        .when('/itemimages/:id', {
            templateUrl: PATH.tpl + 'itemimages.tpl.html',
            controller: 'itemimagesController'
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

