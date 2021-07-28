/* **************PART1开始***********************/
/* 
1.控制时间轴的JS代码开始
*/
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
/* 
1.控制时间轴的JS代码结束
*/

/* 2.控制折线图的JS代码开始 */
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".part1-lineChart"));
  // 2.指定配置与数据
  var option;

  option = {
      title: {
        text: '图2：中国台湾卫生福利部2019公布近三年青少年自杀率',
        subtext: '测试问你',
        x: 'center',
        y: 'bottom',
        textStyle: {
          color: '#FFF',
          fontSize: 14,
          fontWeight: 200
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "line" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
          type: 'category',
          data: ['2017', '2018', '2019'],
          // 取消横线
          splitLine: {
            show:false
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255) ",
            fontSize: "22",
            fontWeight: "200"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255)"
            }
          },
      },
      yAxis: {
          type: 'value',
          // 让y轴坐标不从0开始
          scale:true,
          // 取消横线
          splitLine: {
            show:false
          },
          axisLabel: {
            color: "rgba(255,255,255) ",
            fontSize: "22",
            fontWeight: "200"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255)"
            }
          }
      },
      series: [{
          data: [4.1,4.4,6.2],
          type: 'line',
          areaStyle: {}
      }]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
})();
/* 2.控制折线图的JS代码结束 */
/* **************PART1结束***********************/











/* **************PART2开始***********************/
/* 0.控制平行坐标系的JS代码开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-parallel"));
  var option = {
    title: {
      text: '图3：武汉市20例大学在校生自杀事件原因追踪分析',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      }
    },
    parallelAxis: [
      {
        dim: 0, 
        name: '时间',
        type: 'category',
        data: ['2017','2018','2019','2020','2021'],
        inverse: true,
        nameLocation: 'start'
      },
      {
        dim: 1, 
        name: '学校',
        type: 'category',
        data: ['双一流高校','普通高校']
      },
      {
        dim: 2, 
        name: '性别',
        type: 'category',
        data: ['男','女']
      },
      {
        dim: 3, 
        name: '学历',
        type: 'category',
        data: ['本科','研究生','博士后']
      },
      {
        dim: 4, 
        name: '原因',
        type: 'category',
        data: ['学业压力','抑郁症','爱情问题','生活压力','校园霸凌','老师辅导员问题']
      }
    ],
    parallel: {
      left: '5%',
      right: '18%',
      bottom: 24,
      parallelAxisDefault: {
          type: 'category',
          name: '原因',
          nameLocation: 'end',
          nameTextStyle: {
              color: '#fff',
              fontSize: 12,
              fontWeight: '200'
          },
          axisLine: {
              lineStyle: {
                  color: '#aaa',
                  fontWeight: '200'
              }
          },
          axisTick: {
              lineStyle: {
                  color: '#777'
              },
              show: false
          },
          splitLine: {
              show: false
          },
          axisLabel: {
              color: '#fff'
          }
      }
  },

  series: {
      type: 'parallel',
      lineStyle: {
        normal: {
          width: 2,
          opacity: 0.5
        }
      },
      data: [
          ['2017', '双一流高校', '女', '本科生','抑郁症'],
          ['2018', '双一流高校', '男', '本科生','抑郁症'],
          ['2018', '双一流高校', '男', '研究生','老师辅导员问题'],
          ['2018', '普通高校', '男', '本科生','生活压力'],
          ['2018', '普通高校', '女', '本科生','爱情问题'],
          ['2018', '双一流高校', '男', '研究生','生活压力'],
          ['2019', '双一流高校', '男', '本科生','老师辅导员问题'],
          ['2019', '普通高校', '女', '本科生','校园霸凌'],
          ['2019', '双一流高校', '男', '研究生','老师辅导员问题'],
          ['2020', '双一流高校', '男', '本科生','学业压力'],
          ['2020', '普通高校', '男', '本科生','抑郁症'],
          ['2020', '双一流高校', '男', '本科生','生活压力'],
          ['2020', '双一流高校', '女', '本科生','爱情问题'],
          ['2020', '普通高校', '男', '本科生','生活压力'],
          ['2020', '普通高校', '女', '本科生','生活压力'],
          ['2020', '普通高校', '男', '本科生','学业压力'],
          ['2021', '普通高校', '女', '本科生','爱情问题'],
          ['2021', '双一流高校', '男', '博士后','学业压力'],
          ['2021', '普通高校', '男', '博士后','生活压力'],
          ['2021', '双一流高校', '女', '研究生','抑郁症']
      ]
  }
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 0.控制平行坐标系的JS代码结束 */

/* 1.控制饼状图的JS代码开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-pie"));
  var option = {
    title: {
      text: '图4：大学生心理健康自评分分布',
      subtext: '数据来源',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      },
      subtextStyle: {
        color: '#FFF',
        fontSize: 12
      }
    },
    color: [

      "#d76662",
      "#DC143C",
      "#b9332e",
      "#a42c2a",
      "#842422",
      "#621b19",
      
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      top: "5%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "分数占比",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 14, name: "0-5分" },
          { value: 11, name: "6分" },
          { value: 18, name: "7分" },
          { value: 25, name: "8分" },
          { value: 13, name: "9分" },
          { value: 19, name: "10分" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 1.控制饼状图的JS代码结束 */

/* 2.控制第一个柱状图的JS代码开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-bar1"));

  option = {
    title: {
      text: '图5：不同性别学生身体心理健康状况自评分平均分',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['身体健康', '心理健康'],
        textStyle: {
          color: "#DDD"
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['男（5122）', '女（6995）'],
            axisLabel: {
              color: "#DDD"
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
              color: "#DDD"
            }
        }
    ],
    series: [
        {
            name: '身体健康',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [7.3, 6.9],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [36,36,0,0]
        }
        },
        {
            name: '心理健康',
            type: 'bar',
            stack: '广告',
            emphasis: {
                focus: 'series'
            },
            data: [7.9, 7.5],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [36,36,0,0]
        }
            
        }
       
    ]
  };

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 2.控制第一个柱状图的JS代码结束 */


/* 3.控制第二个柱状图的JS代码开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-bar2"));

  option = {
    title: {
      /* 控制主标题的部分 */
      text: '图6：不同年级学生身体心理健康状况自评分平均分',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['身体健康', '心理健康'],
        textStyle: {
          color: "#DDD"
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['大一', '大二','大三','大四','硕博生'],
            axisLabel: {
              color: "#DDD"
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
              color: "#DDD"
            }
        }
    ],
    series: [
        {
            name: '身体健康',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [7.1,7.0,6.9,7.0,7.0],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [36,36,0,0]
        }
        },
        {
            name: '心理健康',
            type: 'bar',
            stack: '广告',
            emphasis: {
                focus: 'series'
            },
            data: [7.7,7,6,7.3,7.3,7.3],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [36,36,0,0]
        }
            
        }
       
    ]
  };

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 3.控制第二个柱状图的JS代码结束 */

/* 4.控制第三个柱状图的JS开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-bar3"));

  option = {
    title: {
      /* 控制主标题的部分 */
      text: '图7：困扰大学生心理健康问题统计',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{c0}%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            show: true, 
            interval: 'auto', 
            formatter: '{value}%',
            color: "#DDD"
        },
        splitNumber: 2,
        scale: true,
        splitLine:{
　　　　   show:false
　　    }
    },
    yAxis: {
        type: 'category',
        data: ['学业压力', '人际关系', '性格（不自信等）', '就业（生涯规划）', '专业前景', '恋爱','家庭关系','学校适应','与导师的关系','没有压力'],
        axisLabel: {
          color: "#DDD"
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [60,34,31,27,22,15,13,13,2,13],
            itemStyle:{
              normal:{
                  color:function(params){
                      var colorlist = [

                        "#FF0000",
                        "#DC143C",
                        "#d76662",
                        "#b9332e",
                        "#B22222",
                        "#A52A2A",
                        "#a42c2a",
                        "#8B0000",
                        "#842422",
                        "#621b19"
                      ];
                      return colorlist[params.dataIndex];
                  },
                  // 修改柱子圆角
                  barBorderRadius: [0,36,36,0]
              },
              
            }
        }
    ]
};

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 4.控制第三个柱状图的JS结束 */

/* 5.控制第四个柱状图的JS开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part2-bar4"));

  option = {
    title: {
      /* 控制主标题的部分 */
      text: '图9：大学生解决心理压力方式统计',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{c0}%'
    },
    grid: {
        left: '20%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            show: true, 
            interval: 'auto', 
            formatter: '{value}%',
            color: "#DDD"
        },
        splitNumber: 2,
        scale: true,
        splitLine:{
　　　　   show:false
　　    }
    },
    yAxis: {
        type: 'category',
        data: ['转移注意力', '向同学/朋友倾诉', '运动', '向父母倾诉', '大哭一场', '在社交平台发布内容','向专业人士寻求帮助','其他','不解决'],
        axisLabel: {
          color: "#DDD"
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [51,45,33,17,17,11,6,3,9],
            itemStyle:{
              normal:{
                  color:function(params){
                      var colorlist = [

                        "#FF0000",
                        "#DC143C",
                        "#d76662",
                        "#b9332e",
                        "#B22222",
                        "#A52A2A",
                        "#a42c2a",
                        "#8B0000",
                        "#842422",
                        "#621b19"
                      ];
                      return colorlist[params.dataIndex];
                  },
                  // 修改柱子圆角
                  barBorderRadius: [0,36,36,0]
              }
            }
        }
    ]
};

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 5.控制第四个柱状图的JS结束 */

/* 6.控制第五个柱状图的JS开始*/
(function() {
  var myChart = echarts.init(document.querySelector(".part2-bar5"));

  option = {
    title: {
      /* 控制主标题的部分 */
      text: '图8：不同年级困扰大学生心理问题统计',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '大一：{c0}% <br> 大二：{c1}% <br> 大三： {c2}% <br> 大四：{c3}% <br> 硕博生：{c4}%'
    },
    legend: {
        data: ['大一', '大二','大三','大四','硕博生'],
        textStyle: {
          color: '#DDD'
        },
        right: '0%',
        top: '5%'
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
          color: '#DDD'
        }
    },
    yAxis: {
        type: 'category',
        data: ['学业压力', '人际关系', 
              '性格（不自信等）', '就业/生涯规划', 
              '专业前景', '恋爱',
              '家庭关系','学校适应',
              '与导师的关系','没有压力'],
        axisLabel: {
          color: '#DDD'
        }
    },
    series: [
        {
            name: '大一',
            type: 'bar',
            data: [62, 33, 31, 22, 18, 15,13,15,2.9,14],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [0,36,36,0]
            }
        },
        {
            name: '大二',
            type: 'bar',
            data: [59, 37, 32, 31, 26, 16,13,10,2.9,11],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [0,36,36,0]
            }
        },
        {
            name: '大三',
            type: 'bar',
            data: [55, 30, 29, 40, 32, 18,12,7.5,2.9,11],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [0,36,36,0]
            }
        },
        {
            name: '大四',
            type: 'bar',
            data: [49, 24, 23, 51, 26, 16,13,9.5,1,14],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [0,36,36,0]
            }
        },
        {
            name: '硕博生',
            type: 'bar',
            data: [66, 28, 27, 42, 26, 17,12,5,5,12],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: [0,36,36,0]
            }
        }
    ]
};

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 6.控制第五个柱状图的JS结束*/
/* **************PART2结束***********************/

/* **************PART3开始***********************/
/* 1.控制态度图的JS代码开始 */
(function() {
  var myChart = echarts.init(document.querySelector(".part3-scater"));

  option = {
    title: {
      text: '图11：微博、知乎网民针对以上不同大学自杀事件的态度分析图 ',
      x: 'center',  
      y: 'bottom',
      textStyle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 200
      }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'line'        // 'shadow' as default; can also be 'line' or 'shadow'
        },
        formatter: '武汉大学：{c0}% <br> 武汉理工大学：{c1}% <br> 中南财经政法大学： {c2}% <br> 湖北美术学院：{c3}% <br> 华中科技大学：{c4}% <br> 湖北某职业学院：{c5}%'
    },
    legend: {
        data: ['武汉大学', '武汉理工大学', '中南财经政法大学', '湖北美术学院', '华中科技大学','湖北某职业学院'],
        textStyle: {
          color: '#DDD'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['赞叹', '嘲讽', '理解', '不解', '谴责'],
      axisLabel: {
        color: '#DDD'
      },
      axisLine: {
        lineStyle: {
          color: '#DDD'
        }
      },
      
    },
    yAxis: {
        type: 'value',
        axisLabel: {
          color: '#DDD',
          formatter: '{value}%',
        },
        axisLine: {
          lineStyle: {
            color: '#DDD'
          }
        },
        splitNumber: 2,
        scale: true,
        splitLine:{
　　　　   show:false
　　    }
    },
    series: [
        {
            name: '武汉大学',
            type: 'scatter',
            stack: 'total',
            
            emphasis: {
                focus: 'series'
            },
            data: [1, 2.75, 7, 9.5, 6.25]
        },
        {
            name: '武汉理工大学',
            type: 'scatter',
            stack: 'total',
            
            emphasis: {
                focus: 'series'
            },
            data: [1, 4.5, 7, 6.5, 6.75]
        },
        {
            name: '中南财经政法大学',
            type: 'scatter',
            stack: 'total',
           
            emphasis: {
                focus: 'series'
            },
            data: [0.75, 0.25, 3.75, 0.75, 1.25]
        },
        {
            name: '湖北美术学院',
            type: 'scatter',
            stack: 'total',
            
            emphasis: {
                focus: 'series'
            },
            data: [1.25, 2, 7, 3.75, 6.75]
        },
        {
            name: '华中科技大学',
            type: 'scatter',
            stack: 'total',
            
            emphasis: {
                focus: 'series'
            },
            data: [2, 1.5, 4.5, 4.5, 3.75]
        },
        {
            name: '湖北某职业学院',
            type: 'scatter',
            stack: 'total',
            
            emphasis: {
                focus: 'series'
            },
            data: [0.75, 0.25, 0.25, 1.25, 1.5]
        }
    ]
};

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
/* 1.控制态度图的JS代码结束 */

/* 2.控制堆叠态度图的JS代码开始 */

/* 2.控制堆叠态度图的JS代码结束 */

/* 3.控制鼠标时切换图片的效果开始 */
$(document).ready(function(){
  $('.vertical-text img').mouseover(function () {
    $('.vertical-text img').attr("src","./img/wordBars.png")
  })

  $('.vertical-text img').mouseout(function () {
    $('.vertical-text img').attr("src","./img/verticalWords.png")
  })
})
/* 3.控制鼠标时切换图片的效果开始 */
/* **************PART3结束***********************/

/* **************PART4开始***********************/
/* 1.控制第一个图文模块的JS代码开始 */
$(document).ready(function(){
  $('.picWord1 .wordsModule').mouseover(function () {
    /* 让显示的盒子隐藏 */
    $('.picWord1 .part4-show1').hide(500)
    /* 让隐藏的盒子显示 */
    $('.picWord1 .part4-hidden1').show(500)
  })
})
/* 1.控制第一个图文模块的JS代码结束 */

/* 1.控制第二个图文模块的JS代码开始 */
$(document).ready(function(){
  $('.picWord2 .wordsModule').mouseover(function () {
    /* 让显示的盒子隐藏 */
    $('.picWord2 .part4-show1').hide(500)
    /* 让隐藏的盒子显示 */
    $('.picWord2 .part4-hidden1').show(500)
  })
})
/* 1.控制第二个图文模块的JS代码结束 */

/* 1.控制第三个图文模块的JS代码开始 */
$(document).ready(function(){
  $('.picWord3 .wordsModule').mouseover(function () {
    /* 让显示的盒子隐藏 */
    $('.picWord3 .part4-show1').hide(500)
    /* 让隐藏的盒子显示 */
    $('.picWord3 .part4-hidden1').show(500)
  })
})
/* 1.控制第三个图文模块的JS代码结束 */
/* **************PART4结束***********************/