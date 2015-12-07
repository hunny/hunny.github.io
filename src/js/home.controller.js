(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        console.log('home page loading completed');
    });
    var app = angular.module('controller.home', []);
    // Attribute Isolated Scope
    app.run(function() {
        // Do post-load initialization stuff here
        console.log('angular app [controller.home] run load finished......');
    });
    app.controller('homeController', ['$scope', function($scope) {
        console.log('controller.home loading.');
        console.log('controller.home loaded.');
    }]);
})(window.angular);

