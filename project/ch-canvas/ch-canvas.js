// ch-canvas.js
const chcharts = require("./chcharts-min.js")
function getStyleStr(obj){
  let result = '';
  Object.keys(obj).forEach(val=>{
    result += val + '=' + obj[val]+';'
  });
  return result
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    canvasId: {
      type: String,
      value: 'ch-canvas',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [], // label infos
    showLabel: false,
    canvasHeight: '100%',
    canvasWidth: '100%',
    tooltipPos: '',
    showTooltip: false,
    tooltipInfo: '',
    showHLine:false,
    showVLine:false,
    crossVLineStyle:'',
    crossHLineStyle:'',
    value:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setOptions(value) {
      chcharts.options = value;
      this.value=value
      this.setData({
        showLabel: value.showLabel == undefined ? false : value.showLabel,
        items: value.data == undefined ? [] : value.data,
      })
    },
    initChart(width, height) {
      var that = this;
      this.setData({
        canvasHeight: height + 'px',
        canvasWidth: width + 'px',
      })
      var context = wx.createCanvasContext(that.properties.canvasId, that);
      chcharts.initChart(context, width, height);
    },
    touchStart(e) {
      console.log(e)
      chcharts.options = this.value;
      var tipInfo = chcharts.requestTooltip(e.touches[0].x, e.touches[0].y, parseFloat(this.data.canvasWidth), parseFloat(this.data.canvasHeight));
      console.log(tipInfo)
      if (tipInfo)
      {
        this.setData({
          showTooltip: tipInfo.showTooltip||false,
          tooltipPos: tipInfo.tooltipPos||'',
          tooltipInfo: tipInfo.tooltipInfo||'',
          showHLine: tipInfo.showHLine || false,
          showVLine: tipInfo.showVLine || false,
          crossVLineStyle:tipInfo.crossVLine||'',
          crossHLineStyle: tipInfo.crossHLine||'',
        })
      }
    },
    touchMove(e) {
      chcharts.options = this.value;
      var tipInfo = chcharts.requestTooltip(e.touches[0].x, e.touches[0].y, parseFloat(this.data.canvasWidth), parseFloat(this.data.canvasHeight));
      if (tipInfo) {
        this.setData({
          showTooltip: tipInfo.showTooltip || false,
          tooltipPos: tipInfo.tooltipPos || '',
          tooltipInfo: tipInfo.tooltipInfo || '',
          showHLine: tipInfo.showHLine || false,
          showVLine: tipInfo.showVLine || false,
          crossVLineStyle: tipInfo.crossVLine || '',
          crossHLineStyle: tipInfo.crossHLine || '',
        })
      }
    },
    touchEnd(e) {
      this.setData({
        showTooltip: false,
        showHLine: false,
        showVLine: false,
      })
    },
    longTap(e) {
      chcharts.options = this.value;
      var tipInfo = chcharts.requestTooltip(e.touches[0].x, e.touches[0].y, parseFloat(this.data.canvasWidth), parseFloat(this.data.canvasHeight));
      if (tipInfo) {
        this.setData({
          showTooltip: tipInfo.showTooltip || false,
          tooltipPos: tipInfo.tooltipPos || '',
          tooltipInfo: tipInfo.tooltipInfo || '',
          showHLine: tipInfo.showHLine || false,
          showVLine: tipInfo.showVLine || false,
          crossVLineStyle: tipInfo.crossVLine || '',
          crossHLineStyle: tipInfo.crossHLine || '',
        })
      }
    },
  }
})
