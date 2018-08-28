// radar.js
var data = [{ name: "库里", value: [95,50,60,30,88,90], color: "rgb(0,175,236)" },
  { name: "詹姆斯", value: [90, 80, 70, 40, 75, 88], color: "rgb(206,0,30)" },
  { name: "霍华德", value: [60, 88, 75, 60, 40, 20], color: "rgb(84,27,134)" },]

var xLabel = ['投篮', '扣篮', '篮板', '盖帽', '传球', '突破']

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var options = {
      data: data,
      xLabel: xLabel,
      chartRatio: 0.7,
      style: 'radar',
      showLabel: true,
      animation: true,
      showTooltip: true,
      tooltip: '{a}:{b}',
      area: false,
    }
    this.roseComp = this.selectComponent('#radar');
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 250);
  },

  changeChart: function(e) {
    var options = {
      data: [{ name: "iPhone", value: [18, 15.5, 12, 10.2, 17.9], color: "rgb(0,175,236)" }],
      xLabel: ['外观', '屏幕', '拍照', '系统', '性能'],
      chartRatio: 0.8,
      style: 'radar',
      showLabel: false,
      animation: true,
      showTooltip: true,
      area: true,
    }
    this.roseComp = this.selectComponent('#radar');
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 320);
  }
})