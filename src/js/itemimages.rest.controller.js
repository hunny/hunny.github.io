(function(angular){
    'use strict';
    var app = angular.module('controller.itemimagesrest', ['service.home']);
    app.controller('itemimagesrestController', ['$scope', 'httpHome',
            function($scope, httpHome) {
        httpHome.query().then(function(data) {
            $scope.items = data;
        });
    }]);
})(window.angular);

