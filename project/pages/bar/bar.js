// pages/bar/bar.js
const bardata =
  [
  { name: "仙草布丁", data: [10, 60, 45, 67, 40,33,40], color: "rgb(0,175,236)"},
  { name: "波霸奶茶", data: [5, 34, 54, 66, 30,23, 55], color: 'orange' },
  { name: "熊猫奶盖", data: [11, 23, 42, 43, 13,2,40], color:"rgb(206,0,30)" },
  { name: "益菌多", data: [9, 8, 12, 32, 18], color: "blue" },

  /*{ name: "牛奶三兄弟", data: [21,44,5,65,66,78,88], color: "pink" },
  { name: "紫米露", data: [10,2,34,54,21,33], color: "green" },
  { name: "芒果多多", data: [12,32,43,12], color: "red" },
  { name: "草莓多多", data: [31,23,44,55], color: "purple" },
 */
  ];
const xLabel = ['一季度', '二季度', '三季度', '四季度','五季度'];
const options = {
  data: bardata,
  xLabel: xLabel,
  style: 'bar',
  showTooltip: true,
  tooltip: '{a}：{b}', //系列名称：类目值
  showLabel: true,
  rectStyle: 'accum',
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
    // selectComponent获取自定义组件；调用setOptions方法配置参数；initChart初始化并设置宽高
    this.lineChart = this.selectComponent('#bar');
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
  onTypetap: function (e) {
    let val = parseInt(e.currentTarget.dataset.type);
    switch (val) {
      case 0: options.rectStyle = 'accum'; break;
      case 1: options.rectStyle = 'normal'; break;
    }
    this.lineChart = this.selectComponent('#bar');
    this.lineChart.setOptions(options);
    this.lineChart.initChart(320, 213);
  }
})