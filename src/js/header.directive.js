(function(angular){
    'use strict';
    angular.module('directive.header', [])
    .directive('header', ['$parse', 'PATH', function($parse, PATH) {
    	return {
    		restrict: 'E',
    		templateUrl: PATH.tpl + 'header.tpl.html',
    		replace: true,
    		scope: {

    		},
    		link: function($scope, $element, $attr) {

    		}
    	};
    }])
    .directive('footer', ['$parse', 'PATH', function($parse, PATH) {
    	return {
    		restrict: 'E',
    		templateUrl: PATH.tpl + 'footer.tpl.html',
    		replace: true,
    		scope: {

    		},
    		link: function($scope, $element, $attr) {

    		}
    	};
    }]);
})(window.angular);