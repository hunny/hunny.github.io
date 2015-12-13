(function(angular){
    'use strict';
    angular.module('app.controllers', [
        'controller.index',
        'controller.home',
        'controller.itemimages',
        'controller.itemimageslist',
        'controller.itemimagesrest'
    ]).run(function() {
        // Do post-load initialization stuff here
        //console.log('angular app.controllers run load finished......');
    });
})(window.angular);

