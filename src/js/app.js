(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        console.log('page loading completed');
    });
    var app = angular.module('app', ['app.directives', 'app.controllers']);
    app.constant('PATH', {
      tpl: 'dest/tpl/'
    });
    // Attribute Isolated Scope
    app.run(function() {
        // Do post-load initialization stuff here
        console.log('angular app run load finished......');
    });
})(window.angular);

