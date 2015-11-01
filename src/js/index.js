(function(angular){
    'use strict';
    var isolatedApp = angular.module('myApp', []);
    // Attribute Isolated Scope
    isolatedApp.controller('AttributeCtrl', function() {
        var ctrl = this;
        ctrl.parentName = 'Attribute Controller';  
    });
    isolatedApp.directive('attributeBox', function() {
        return {
          template: '<input class="form-control" type="text" ng-model="localName">',
              scope: {
                localName: '@'
            }
        }
    });
    // Binding Isolated Scope
    isolatedApp.controller('BindingCtrl', function(){
        var ctrl = this;
        ctrl.parentItem = {
          name: 'Binding Controller',
          description: 'Binding Description'
      };
    });
    isolatedApp.directive('bindingBox', function() {
        return {
          template: '<input class="form-control" type="text" ng-model="localItem.name">'
          +'<input class="form-control" type="text" ng-model="localItem.description">',
              scope: {
                localItem: '='
            }
        }
    });
    // Expression Isolated Scope
    isolatedApp.controller('ExpressionCtrl', function() {
        var ctrl = this;
        ctrl.hello = 'Hello Message'; 
        ctrl.goodbye = 'Goodbye Message';
        
        ctrl.sayHello = function(message) {
            ctrl.hello = message;
        }
        ctrl.sayGoodbye = function(message) {
            ctrl.goodbye = message;
        }
    });
    isolatedApp.directive('expressionBox', function(){
        return {
            template: ' <div class="input-group"><input class="form-control" type="text" ng-model="message" placeholder="Enter a message">'
            + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-default" ng-click="localExpression({message:message})">Send</button></span></div>',
            scope: {
                localExpression:'&'
            }
        }
    });
})(window.angular);

