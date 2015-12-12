(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        //console.log('home page loading completed');
    });
    var app = angular.module('controller.home', ['service.home']);
    // Attribute Isolated Scope
    app.run(function() {
        // Do post-load initialization stuff here
        //console.log('angular app [controller.home] run load finished......');
    });
    app.controller('homeController', ['$scope', 'httpHome', function($scope, httpHome) {
        httpHome.query().then(function(data) {
            $scope.items = data;
        });
    }]);
})(window.angular);

