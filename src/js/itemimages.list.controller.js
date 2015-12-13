(function(angular){
    'use strict';
    var app = angular.module('controller.itemimageslist', ['service.home']);
    app.controller('itemimageslistController', ['$scope', '$location', 'httpHome',
    function($scope, $location, httpHome) {
        httpHome.query().then(function(data) {
            $scope.items = data;
        });
        $scope.checkall = false;
        $scope.deleteCount = 0;
        $scope.onclickadd = function(path) {
            var item = {};
            item.uuid = '' + $scope.items.length;
            item.title = 'KKKK' + $scope.items.length;
            item.date = new Date();
            $scope.items.push(item);
        //$location.path('#' + path + '/0');
        };
        $scope.ondelete = function(item) {
            item.delete = true;
        };
        $scope.onlock = function(item) {
            item.delete = false;
        };
        $scope.onedit = function(path, item) {
            if (item.delete) {
                return;
            }
            $location.path(path + '/' + item.uuid);
        };
        $scope.oncheck = function() {
            $scope.checkall = !$scope.checkall;
            angular.forEach($scope.items, function(value, key) {
                $scope.items[key].delete = $scope.checkall;
            });
        };
        $scope.onsavedelete = function() {
            for (var i = $scope.items.length - 1; i >= 0; i--) {
                if ($scope.items[i].delete) {
                    $scope.items.splice(i, 1);
                }
            }
        };
        $scope.$watch('items', function(nName, oName) {
            if (nName === undefined && oName === undefined) {
                return;
            }
            var length = $scope.items.length;
            var deletes = 0;
            angular.forEach($scope.items, function(value, key) {
                if ($scope.items[key].delete) {
                    deletes ++;
                }
            });
            $scope.deleteCount = deletes;
            $scope.checkall = (length !== 0 && length === deletes);
        }, true);
        $scope.$on("$routeChangeStart", function (event, next, current) {});
    }]);
})(window.angular);

