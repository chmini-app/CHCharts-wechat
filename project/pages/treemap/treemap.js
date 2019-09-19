// pages/treemap/treemap.js
var data=[
  { name: '其他', value: 10, color:'#EEE685'},
  { name: 'vivo', value: 110, color: '#CD8C95'},
  { name: '小米', value: 170, color: '#A2CD5A'},
  { name: 'oppo', value: 100, color: '#BDB76B'},
  { name: '魅族', value: 50, color: '#87CEEB'},
  { name: '诺基亚', value: 70, color: '#FFB5C5'},
  { name: '中兴', value: 30, color: '#AB82FF' },
  { name: '华为', value: 200, color: '#6699cc' },
  { name: 'HTC', value: 10, color: '#D8BFD8' },
  { name: '乐视', value: 20, color: '#5F9EA0' },
  { name: '三星盖乐世', value: 100, color: '#FFE4C4' },
]
var options1 = {
  data: data,
  fontColor:'white',
  legend: '{a}',
  chartRatio: 0.95,
  style: 'treemap',
  showLegend: true,
  showLabel: false,
  animation: false,
  showTooltip: true,
  tooltip: '{a}：{b}',
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
    var treemapChart = this.selectComponent('#treemap');
    treemapChart.setOptions(options1);
    treemapChart.initChart(300, 200);
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