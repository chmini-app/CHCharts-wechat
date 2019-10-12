// pages/funnel/funnel.js
var funnelData = [
  { name: '咨询', value: '50', color: '#204157' },
  { name: '点击', value: '90', color: '#E39F72' },
  { name: '访问', value: '60', color: '#B83515' },
  { name: '展现', value: '120', color: '#A0D6CB' },
  { name: '订单', value: '20', color: '#29A3A3' },
];
var options1 = {
  data: funnelData,
  min: 0,
  max: 130,
  legend: '{a}',
  chartRatio: 0.95,
  style: 'funnel',
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
    var funnelChart = this.selectComponent('#funnel');
    funnelChart.setOptions(options1);
    funnelChart.initChart(250, 250);
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