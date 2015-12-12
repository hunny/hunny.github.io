(function(angular){
    'use strict';
    var service = angular.module('service.home', ['ngResource']);
    service.factory('httpResource', ['$resource', 'PATH', function($resource, PATH) {
	    return $resource(PATH.relativePath + 'home/item' + PATH.suffix + '/:id', {id: '@id'});
	}]);
	service.factory('httpHome', ['$q', 'httpResource', '$resource', 'PATH', 
			function($q, httpResource, $resource, PATH) {
		return {
			getById: function(id) {
				var defer = $q.defer();
				httpResource.get({id: id}, function(data, headers) {
					defer.resolve(data);
				}, function(data, headers) {
					defer.reject(data);
				});
				return defer.promise;
			},
			query: function() {
				var defer = $q.defer();
				//item need to add 's'
				$resource(PATH.relativePath + 'home/items' + PATH.suffix)
				.query(function(data, headers) {
					defer.resolve(data);
				}, function(data, headers) {
					defer.reject(data);
				});
				return defer.promise;
			}
		};
	}]);
})(window.angular);

