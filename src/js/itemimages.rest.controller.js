(function(angular){
    'use strict';
    var app = angular.module('controller.itemimagesrest', ['service.home']);
    app.controller('itemimagesrestController', ['$scope', '$routeParams', 'httpHome', 'PATH',
            function($scope, $routeParams, httpHome, PATH) {
        httpHome.getById($routeParams.id).then(function(data) {
            $scope.title = data.title;
            $scope.resource = PATH.resource;
            $scope.imagePath = PATH.image;
            $scope.groupitem = data.list;
        });
        $scope.onclickadd = function($index) {
        	var object = {};
        	if (Number($index) === $index && $index % 1 === 0) {
        		$scope.groupitem.splice($index + 1, 0, object);
        	} else {
        		$scope.groupitem.push(object);
        	}
        };
        $scope.onclicksave = function(object) {
        	if (object) {
        		if (object.deleted) {
        			$scope.groupitem.splice($scope.groupitem.indexOf(object), 1);
        		} else {
        			console.log('save item=>' + new Date());
        			console.log(object);
        		}
        		return;
        	}
        	for (var i = $scope.groupitem.length - 1; i >= 0; i--) {
        		var item = $scope.groupitem[i];
        		console.log(item);
        		if (item.deleted) {
        			$scope.groupitem.splice(i, 1);
        		}
        	}
        };
        $scope.onclickdelete = function($index) {
        	var item = $scope.groupitem[$index];
        	if (Object.getOwnPropertyNames(item).length === 1) {
        		$scope.groupitem.splice($index, 1);
        	} else {
				$scope.groupitem[$index].deleted = !item.deleted;
        	}
        };
    }]);
})(window.angular);

