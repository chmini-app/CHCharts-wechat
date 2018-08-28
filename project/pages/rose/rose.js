// rose.js
var data = [{ name: "甜甜圈", value: 50, color: "#80e0ed" },
  { name: "冰淇淋", value: 40, color: "#9197ed" },
  { name: "棒棒糖", value: 30, color: "#eddf5c" },
  { name: "奶茶", value: 60, color: "#e4ff99" },
  { name: "抹茶蛋糕", value: 50, color: "#baffad" },
  { name: "蛋挞", value: 20, color: "#afee9d" },]
  

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
      chartRatio: 0.95,
      style: 'rose',
      showLegend: true,
      showLabel: true,
      animation: true,
      showTooltip: true,
      tooltip: '{a}：{b}个',
    }
    this.roseComp = this.selectComponent('#rose');
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 213);
  },
})