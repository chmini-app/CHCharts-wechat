// pages/charts/charts.js
const bardata =
  [
    { name: "仙草布丁", data: [10, 60, 45, 67, 40, 33, 40], color: "rgb(0,175,236)" },
    { name: "波霸奶茶", data: [5, 34, 54, 66, 30, 23, 55], color: 'orange' },
    { name: "熊猫奶盖", data: [11, 23, 42, 43, 13, 2, 40], color: "rgb(206,0,30)" },
    { name: "益菌多", data: [9, 8, 12, 32, 18], color: "blue" },
  ];
const piedata = [
    { name: "篮球", value: 20, color: "rgb(250,239,66)" },
    { name: "足球", value: 10, color: "rgb(108,187,90)" },
    { name: "乒乓球", value: 30, color: "rgb(0,163,233)" },
    { name: "棒球", value: 60, color: "rgb(228,0,127)" },
    { name: "排球", value: 100, color: "rgb(106,49,142)" }];
const linedata =
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
const xLabelBar = ['一季度', '二季度', '三季度', '四季度', '五季度'];
const xLabelLine = ['一月', '二月', '三月', '四月', '五月', '⑥月', '⑦月', '⑧月', '九月', '十月', '十一月', '十二月', '一月', '二月', '三月', '四月', '五月', '⑥月', '⑦月', '⑧月', '九月', '十月', '十一月', '十二月'];
const options1 = {
  data: bardata,
  xLabel: xLabelBar,
  style: 'bar',
  showTooltip: true,
  tooltip: '{a}：{b}', 
  showLabel: true,
  rectStyle: 'accum',
};
const options2 = {
  data: linedata,
  xLabel: xLabelLine,
  style: 'line',
  lineStyle: 'curve',
  area: false,
  showTooltip: true,
  tooltip: '{a}：{b}',
  showLabel: true,
  yAxis:{color:"red"},
  xAxis: { color: "blue" }
};
const options3 = {
  data: piedata,
  legend: '{a}:{c}',
  chartRatio: 0.6,
  style: 'pie',
  showLegend: true,
  showLabel: true,
  animation: false,
  showTooltip: true,
  tooltip: '{b}人',
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
    // debugger
    console.log("pie")

    var lineChart = this.selectComponent('#line');
    lineChart.setOptions(options2);
    lineChart.initChart(320, 213);

    var barChart = this.selectComponent('#bar');
    barChart.setOptions(options1);
    barChart.initChart(320, 213);
    // setTimeout(() => {
    // }, 500)

    var pieComp = this.selectComponent('#pie-1');
    pieComp.setOptions(options3);
    pieComp.initChart(320, 213);

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

  },
  onTypetap: function (e) {
    let val = parseInt(e.currentTarget.dataset.type);
    switch (val) {
      case 0: options2.data = [linedata[0]]; options2.showLabel = false; break;
      case 1: options2.data = linedata; options2.showLabel = true; break;
      case 2: options2.area ? options2.area = false : options2.area = true; break;
      case 3: options2.lineStyle = 'line'; break;
      case 4: options2.lineStyle = 'curve'; break;
    }
    this.lineChart = this.selectComponent('#line');
    this.lineChart.setOptions(options2);
    this.lineChart.initChart(320, 213);
  }
})