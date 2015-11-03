(function(angular){
    'use strict';
    var myApp = angular.module('myApp', []);
    // Attribute Isolated Scope
    myApp.controller('indexController', function($scope) {
        $scope.items = [
            [{
                name: '早起_定期锻炼',
                type: 'png'
            }, {
                name: '走出安逸区_不惧怕竞争',
                type: 'png'
            }, {
                name: '克服恐惧_时刻升级自己',
                type: 'png'
            }],
            [{
                name: '学会独处_对自己的成长负责',
                type: 'png'
            }, {
                name: '改掉一个坏习惯_养成一个好习惯',
                type: 'png'
            }, {
                name: '远离消极人群_离开电视',
                type: 'png'
            }],
            [{
                name: '坚持阅读_尝试学一门新课程',
                type: 'png'
            }, {
                name: '立即行动_向人学习',
                type: 'png'
            }, {
                name: '听取别人的意见_了解自身缺点',
                type: 'png'
            }]
        ];
    });
})(window.angular);

