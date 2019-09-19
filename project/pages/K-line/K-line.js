// pages/K-line/K-line.js
const allData = [
  { name:['初值','终值','最坏值','期望值'],data: [20, 30, 10, 35], color: "rgb(0,175,236)"},
  { name: ['初值', '终值', '最坏值', '期望值'],data: [40, 35, 30, 55], color: 'orange'},
  { name: ['初值', '终值', '最坏值', '期望值'], data: [33, 38, 33, 40], color: "rgb(206,0,30)"},
  { name: ['初值', '终值', '最坏值', '期望值'], data: [40, 40, 32, 42], color: "blue"},
  { name: ['初值', '终值', '最坏值', '期望值'],data: [33, 38, 33, 40], color: "rgb(206,0,30)"},
  { name: ['初值', '终值', '最坏值', '期望值'], data: [20, 30, 10, 35], color: "rgb(0,175,236)" },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [40, 35, 30, 55], color: 'orange' },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [33, 38, 33, 40], color: "rgb(206,0,30)" },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [40, 40, 32, 42], color: "blue" },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [20, 30, 10, 35], color: "rgb(0,175,236)" },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [40, 35, 30, 55], color: 'orange' },
  { name: ['初值', '终值', '最坏值', '期望值'], data: [33, 38, 33, 40], color: "rgb(206,0,30)" }
];
const xLabel = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const linesData = [
  {
    name: '线图1',
    data: [24,36,33,40,36,24,36,30,44,22,43,32],
    color: 'green',
  },
    {
      name: '线图2',
      data: [30,42,39,46,42,30,42,36,50,28,49,38],
      color: 'rgb(84,27,134)',
    }
];

const options = {
   data: allData,
   xLabel: xLabel,
   linesData: linesData,
   style: "K-line",
  showTooltip: true,
  animation: false,
  showLabel: false,
  tooltip: '{a}：{b}', //系列名称：类目值
  yAxis: { color: "black" },
  xAxis: { color: "black" }
};
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


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var Kline = this.selectComponent('#K-line');
    Kline.setOptions(options);
    Kline.initChart(320, 300);

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})