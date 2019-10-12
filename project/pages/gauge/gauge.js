// pages/gauge/gauge.js
var options1 = {
  data: { name: '成功率', value: 142 },
  min: 12,
  max: 321,
  legend: '{c}',
  chartRatio: 0.95,
  style: 'gauge',
  showLegend: true,
  showLabel: true,
  animation: true,
  showTooltip: true,
  tooltip: '{a}：{c}',
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
    var gaugeChart = this.selectComponent('#gauge');
    gaugeChart.setOptions(options1);
    gaugeChart.initChart(260, 260);
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