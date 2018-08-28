// ring.js
var data = [{ name: "iOS", value: 4, color: "rgb(0,164,227)" },
  { name: "Android", value: 3, color: "rgb(246,172,26)" },
  { name: "微信小程序", value: 6, color: "rgb(25,173,94)" },
  { name: "H5", value: 12, color: "rgb(142,195,31)" },]


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
      legend: '{c}',
      chartRatio: 0,
      style: 'ring',
      showLegend: true,
      showLabel: true,
      animation: true,
      showTooltip: true,
      tooltip: '{a}：{b}人',
    }
    this.roseComp = this.selectComponent('#ring');
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 213);
  },
})