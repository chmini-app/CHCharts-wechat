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
    value:{},
    width:0,
    height:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setOptions(value) {
      if(value.style=='circles'){
        var objectArraySort = function (keyName) {
          return function (objectN, objectM) {
            var valueN = objectN[keyName]
            var valueM = objectM[keyName]
            if (valueN < valueM) return 1
            else if (valueN > valueM) return -1
            else return 0
          }
        }
        value.data.sort(objectArraySort('value'));
        for (var i=0;i<value.data.length;i++){
          value.data[i].isShow=true;
        }
      }
      if (value.style == 'funnel'){
        function dataSort(property) {
          return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
          }
        }
        value.data.sort(dataSort("value"));
      }
      if (value.style == 'treemap') {
        function dataSort(property) {
          return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
          }
        }
        value.data.sort(dataSort("value"));
      }
      chcharts.options = value;
      this.value=value;
      this.setData({
        showLabel: value.showLabel == undefined ? false : value.showLabel,
        items: value.data == undefined ? [] : value.data,
        value:this.value
      })
      if(value.style == 'K-line'){
        this.setData({
          items: value.linesData == undefined ? [] : value.linesData
        });
      }
    },
    initChart(width, height) {
      
      var that = this;
      this.setData({
        canvasHeight: height + 'px',
        canvasWidth: width + 'px',
        width: width*1,
        height: height * 1
      })
      this.context = wx.createCanvasContext(that.properties.canvasId, that);
      chcharts.initChart(this.context, width, height);
    },
    touchStart(e) {
      chcharts.options = this.value;
      var tipInfo = chcharts.requestTooltip(e.touches[0].x, e.touches[0].y, parseFloat(this.data.canvasWidth), parseFloat(this.data.canvasHeight));
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
    //多层环形图设定可选择性渲染的方法
    switchData(e) {
      var index=e.currentTarget.dataset.index
      console.log(index)
      if(this.value.style=='circles'){
        var data = this.value.data
        console.log(data)
          data[index].isShow = !data[index].isShow
          this.value.data=data
          this.setData({
            value: this.value
          })
        chcharts.options = this.value;
        chcharts.initChart(this.context, this.width, this.height);
      }
    }
  }
})
