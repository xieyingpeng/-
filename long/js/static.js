/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    char1();
    char2();
    char3();
    char4();
    char5();
})

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} 台"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            textStyle : {
                color : '#ffffff',

            },
            data:['无人机1','无人机2','无人机3','无人机4']
        },

        calculable : false,
        series : [
            {
                name:'无人机类型',
                type:'pie',
                radius : ['40%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:2, name:'无人机1'},
                    {value:1, name:'无人机2'},
                    {value:4, name:'无人机3'},
                    {value:5, name:'无人机4'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char2() {

    var myChart = echarts.init($("#char2")[0]);

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['行驶速度', '温度','湿度'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,
        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['无人机1','无人机2','无人机3','无人机4'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'行驶速度',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 340,125,213]
            },
            {
                name:'当前环境温度',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[40, 32, 41, 34]
            },
            {
                name:'当前环境湿度',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[56,75,24,64]
            },
         

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char3() {

    var myChart = echarts.init($("#char3")[0]);

    option = {
        legend: {
            data:['无人机行驶数量'],
            textStyle : {
                color : '#ffffff',

            }
        },
        grid: {show:'true',borderWidth:'0'},

        calculable : false,
        tooltip : {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b}km : {c}°C:58%"
        },
        xAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                },

                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value} km',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
                boundaryGap : false,
                data : ['0', '10', '20', '30', '40', '50', '60', '100', '200']
            }
        ],
        series : [
            {
                name:'无人机行驶数量',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['WIFI型传感器',    '以太网型传感器'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'温传感器报警次数',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[1, 2,3,4,5,6,7,8,9,10]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char5() {

    var myChart = echarts.init($("#char5")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value+':'+tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'温湿度',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[45, 20, 60, 50, 70, 90,30]
            }
        ]
    };
	

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
