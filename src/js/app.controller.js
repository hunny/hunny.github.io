(function(angular){
    'use strict';
    angular.module('app.controllers', [
        'controller.index',
        'controller.home',
        'controller.itemimages'
    ]).run(function() {
        // Do post-load initialization stuff here
        console.log('angular app.controllers run load finished......');
    });
})(window.angular);

