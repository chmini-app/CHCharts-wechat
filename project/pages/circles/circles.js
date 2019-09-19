// pages/circles/circles.js
var circlesdata = [
  { name: "足球", value: 10, color:"rgb(0,164,227)" },
  { name: "乒乓球", value: 30, color:"rgb(246,172,26)" },
  { name: "棒球", value: 60, color: "rgb(25,173,94)" },
  { name: "篮球", value: 50, color: "rgb(142,195,31)" },
  // { name: "排球", value: 20, color: "rgb(122,153,84)" },
  // { name: "橄榄球", value: 50, color: "rgb(142,195,31)" },
]
const optionscircles = {
  data: circlesdata,
  legend: '{a}',
  style: 'circles',
  showLegend: true,
  showLabel: true,
  animation: true,
  showTooltip: true,
  tooltip: '{a}-{b}人-{c}',
}
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
    console.log("circles")
    var circlesChart = this.selectComponent('#circles');
    circlesChart.setOptions(optionscircles);
    circlesChart.initChart(300, 300);
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