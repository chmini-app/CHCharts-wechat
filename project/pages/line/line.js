// pages/line/line.js
const data =//[0.0001, 0.00032, 0.00046,0.0005, 0.00066,0.0007, 0.00012, -0.0046, -0.00065, -0.0032,]
  [{
    name: '线图1',
    data: [1, 32, 46.5, 66.7, 12, -46, -65, -32,],
    color: 'rgb(255,231,146)',
  },
  {
    name: '线图2',
    data: [-1, -32, -46.5, -66.7, -12, 46, 65, 32, -3, -55, -100, 3, -1, -32, -46.5, -66.7, -12, 46, 65, 32, -3, -55, -100, 3],
    color: 'rgb(182,213,93)',
  },
  {
    name: '线图3',
    data: [-1, -2, -4, -6, -12, -16, 5, 3, -3, 8, 20, 30, 5, 3, -3, 8, 20, 30],
    color: 'rgb(89,195,225)',
  },
  ];
const xLabel = ['一月啊啊啊啊啊啊', '二月', '三月', '四月', '五月', '⑥月', '⑦月', '⑧月', '九月', '十月', '十一月啊啊啊啊啊！', '十二月', '一月', '二月', '三月', '四月', '五月', '⑥月', '⑦月', '⑧月', '九月', '十月', '十一月啊啊啊啊啊？', '十二月'];
const options = {
  data: data,
  xLabel: xLabel,
  style: 'line',
  lineStyle: 'curve',
  xWordsCnt: 4,
  xRows: 2,
  area: false,
  showTooltip: true,
  tooltip: '{a}：{b}',
  showLabel: true,
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dpr: wx.getSystemInfoSync().windowWidth / 750,
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
    this.lineChart = this.selectComponent('#line');
    this.lineChart.setOptions(options);
    this.lineChart.initChart(320, 213);
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
  
  },
  onTypetap:function(e){
    let val = parseInt(e.currentTarget.dataset.type);
    switch(val){
      case 0: options.data = [data[0]]; options.showLabel=false;break;
      case 1: options.data = data; options.showLabel = true; break;
      case 2: options.area ? options.area =false: options.area=true; break;
      case 3: options.lineStyle='line'; break;
      case 4: options.lineStyle = 'curve';break;
    }
    this.lineChart = this.selectComponent('#line');
    this.lineChart.setOptions(options);
    this.lineChart.initChart(320, 213);
  }
})