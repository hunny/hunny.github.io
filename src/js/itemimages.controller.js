(function(angular){
    'use strict';
    var app = angular.module('controller.itemimages', ['service.home']);
    app.controller('itemimagesController', ['$scope', '$routeParams', '$location', 'PATH', 'httpHome',
            function($scope, $routeParams, $location, PATH, httpHome) {
        httpHome.getById($routeParams.id).then(function(data) {
            $scope.title = data.title;
            $scope.resource = PATH.resource;
            $scope.imagePath = PATH.image;
            var items = [];
            var i = 0;
            while(true) {
                var sub = data.list.slice(i, i + 3);
                if (sub.length === 0) {
                    break;
                }
                items.push(sub);
                i += 3;
            }
            $scope.items = items;
        }, function(error) {
            $location.path('list');
        });
    }]);
})(window.angular);

