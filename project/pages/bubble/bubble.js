// pages/bubble/bubble.js
const data = [{
  name: '温度',
  yLabel: [2800, 3434, 4678, 2367, 1145, 908, 568, 1131, 3526], //海拔
  value: [19, 25, 24, 33, 40, 38, 29, 43, 40],
  color: 'rgb(206,0,30)',
}, {
    name: '降雨量',
    yLabel: [2600, 3500, 4235, 3699, 1590, 3222, 489, 1246, 3020],
    value: [20, 30, 23, 33, 44, 50, 76, 33, 10],
    color: 'rgb(0,175,236)',
}
];

const xLabel = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月'];

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var options = {
      data: data,
      xLabel: xLabel,
      style: 'bubble',
      lineStyle: 'curve',
      showLabel: true,
      showTooltip: true,
      tooltip: '{a}：{b}',
    }
    this.bubbleComp = this.selectComponent('#bubble');
    this.bubbleComp.setOptions(options);
    this.bubbleComp.initChart(320, 213);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})