(function(angular){
    'use strict';
    angular.module('app.directives', ['directive.header']).run(function() {
        // Do post-load initialization stuff here
        console.log('angular app[directives] load finished......');
    });
})(window.angular);

