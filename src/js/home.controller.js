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
        $scope.items = [{
            uuid: '1',
            title: '坚持做18件事，努力提升自己',
            date: '2015-10-28 19:23'
        }, {
            uuid: '2',
            title: '人生是什么？',
            date: '2015-09-28 09:10'
        }];
    }]);
})(window.angular);

