(function(angular){
    'use strict';
    var app = angular.module('controller.itemimages', []);
    app.controller('itemimagesController', ['$scope', '$routeParams', 'PATH', function($scope, $routeParams, PATH) {
        var title = '坚持做18件事，努力提升自己';
        var resource = PATH.image + 'indexImg/';
        var items = [
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
        if ($routeParams.id == 2) {
            title = '人生是什么？';
            resource = PATH.image + 'life/';
            items = [
                [{
                    name: '01',
                    imgtitle: '从还是小孩子开始，你听到的人生，可能是这样的：',
                    desc: '懵懂的你来到这个世界。',
                    type: 'jpeg'
                }, {
                    name: '02',
                    imgtitle: '...',
                    desc: '好好学习，天天向上。',
                    type: 'jpeg'
                }, {
                    name: '03',
                    imgtitle: '...',
                    desc: '成为霸道总裁。',
                    type: 'jpeg'
                }],
                [{
                    name: '04',
                    imgtitle: '...',
                    desc: '迎娶白富美。',
                    type: 'jpeg'
                }, {
                    name: '05',
                    imgtitle: '...',
                    desc: '住上大别墅，走向人生巅峰。',
                    type: 'jpeg'
                }, {
                    name: '06',
                    imgtitle: '...',
                    desc: '初尝为人父母的喜悦。',
                    type: 'jpeg'
                }],
                [{
                    name: '07',
                    imgtitle: '...',
                    desc: '养家糊口的压力好大，感觉自己不能呼吸了。',
                    type: 'jpeg'
                }, {
                    name: '08',
                    imgtitle: '...',
                    desc: '孩子成了大人，你也开始变老。',
                    type: 'jpeg'
                }, {
                    name: '09',
                    imgtitle: '...',
                    desc: '因为学业和事业，孩子和你们说了再见去了远方，剩你俩执手相望泪眼共度余生。',
                    type: 'jpeg'
                }],
                [{
                    name: '10',
                    imgtitle: '尼玛？这就完了？人生的意义是神马，你一定会问，这样庸庸碌碌大家都活成一毛一样真的好吗？',
                    desc: '然后你就和这个世界说了最后一句再见。',
                    type: 'jpeg'
                }, {
                    name: '11',
                    imgtitle: '那么下面，就是那些大家没有亲口告诉你，但你会自己经历的一切：',
                    desc: '人生是……你来到这个美丽的世界，从此成为父母生活中的幸运大礼包。',
                    type: 'jpeg'
                }, {
                    name: '12',
                    imgtitle: '...',
                    desc: '人生是……第一次背起书包唱着，太阳当空照花儿对我笑。',
                    type: 'jpeg'
                }],
                [{
                    name: '13',
                    imgtitle: '...',
                    desc: '人生是……和好基友一起在教室外罚站还是说得好开心。',
                    type: 'jpeg'
                }, {
                    name: '14',
                    imgtitle: '...',
                    desc: '人生是……大学的时候拜倒在某个女孩子石榴裙下，好哥们秒变狗头军师。',
                    type: 'jpeg'
                }, {
                    name: '15',
                    imgtitle: '...',
                    desc: '人生是……面试是个大杯具然后和逗比朋友们一起party庆祝自己失败了。',
                    type: 'jpeg'
                }],
                [{
                    name: '16',
                    imgtitle: '...',
                    desc: '人生是……去做那些自己不敢尝试的事情。',
                    type: 'jpeg'
                }, {
                    name: '17',
                    imgtitle: '...',
                    desc: '人生是……新车被刮了一大块漆然而作为一个处女座你只能说不在乎呜呜呜。',
                    type: 'jpeg'
                }, {
                    name: '18',
                    imgtitle: '...',
                    desc: '人生是……装修新房子',
                    type: 'jpeg'
                }],
                [{
                    name: '19',
                    imgtitle: '...',
                    desc: '人生是……一把屎一把尿给熊孩子换尿布，第二天带着熊猫眼去上班。',
                    type: 'jpeg'
                }, {
                    name: '20',
                    imgtitle: '...',
                    desc: '人生是……每年学校的汇报演出孩子在上面跳舞，你在下面不知道为啥自己能高兴到掉眼泪',
                    type: 'jpeg'
                }, {
                    name: '21',
                    imgtitle: '...',
                    desc: '人生是……把熊孩子送出去然后和妻子一起周末旅行',
                    type: 'jpeg'
                }],
                [{
                    name: '22',
                    imgtitle: '...',
                    desc: '人生是……孩纸在家时忍不住偷偷亲自己已经40岁的老婆。',
                    type: 'jpeg'
                }, {
                    name: '23',
                    imgtitle: '...',
                    desc: '人生是……毫无歉意地大声放屁，老婆尖叫的时候你才不紧不慢开始喷空气清新剂。',
                    type: 'jpeg'
                }, {
                    name: '24',
                    imgtitle: '...',
                    desc: '人生是……60岁那年跑完了马拉松。',
                    type: 'jpeg'
                }],
                [{
                    name: '25',
                    imgtitle: '...',
                    desc: '人生是……给孙子孙女们讲故事。',
                    type: 'jpeg'
                }, {
                    name: '26',
                    imgtitle: '...',
                    desc: '人生是……看到孩子们生活幸福美满时，自己内心骄傲爆了。',
                    type: 'jpeg'
                }, {
                    name: '27',
                    imgtitle: '...',
                    desc: '人生是……家里熊孩纸们玩iPhone25的时候让他们教你用。',
                    type: 'jpeg'
                }],
                [{
                    name: '28',
                    imgtitle: '...',
                    desc: '人生的意义都藏在那些小事里。这些你曾不以为然的小事，在蓦然回首时，才发现，它们才是你人生中最重要的事。',
                    type: 'jpeg'
                }]
            ];
        }
        $scope.title = title;
        $scope.resource = resource;
        $scope.items = items;
    }]);
})(window.angular);

