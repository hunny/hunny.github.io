(function(angular){
    'use strict';
    angular.element(document).ready(function () {
        //console.log('page loading completed');
        $('div.row, div.progress').toggleClass('hidden');
    });
    var myApp = angular.module('myApp', ['angularLazyImg']);
    // Attribute Isolated Scope
    myApp.run(function() {
        // Do post-load initialization stuff here
        //console.log('angular app load finished......');
    });
    myApp.controller('indexController', function($scope) {
        $scope.items = [
            [{
                name: '早起_定期锻炼',
                desc: '早起，定期锻炼',
                type: 'png'
            }, {
                name: '走出安逸区_不惧怕竞争',
                desc: '走出安逸区，不惧怕竞争',
                type: 'png'
            }, {
                name: '克服恐惧_时刻升级自己',
                desc: '克服恐惧，时刻升级自己',
                type: 'png'
            }],
            [{
                name: '学会独处_对自己的成长负责',
                desc: '学会独处，对自己的成长负责',
                type: 'png'
            }, {
                name: '改掉一个坏习惯_养成一个好习惯',
                desc: '改掉一个坏习惯，养成一个好习惯',
                type: 'png'
            }, {
                name: '远离消极人群_离开电视',
                desc: '远离消极人群，离开电视',
                type: 'png'
            }],
            [{
                name: '坚持阅读_尝试学一门新课程',
                desc: '坚持阅读，尝试学一门新课程',
                type: 'png'
            }, {
                name: '立即行动_向人学习',
                desc: '立即行动，向人学习',
                type: 'png'
            }, {
                name: '听取别人的意见_了解自身缺点',
                desc: '听取别人的意见，了解自身缺点',
                type: 'png'
            }]
        ];
        $scope.showPage = true;
        $scope.bootstrapshow = 'show';
    });
})(window.angular);

