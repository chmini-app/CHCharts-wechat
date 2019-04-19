# 在微信小程序中使用 CHCharts
	
[![](https://img.shields.io/badge/license-MIT-red.svg)](https://github.com/chmini-app/CHCharts-wechat/blob/master/LICENSE) [![](https://img.shields.io/badge/npm-v1.0.0-519dd9.svg)](https://www.npmjs.com/package/miniprogram-chcharts/v/1.0.0)

本项目是基于微信小程序开发的图表插件，以及使用的示例。

开发者可以通过微信组件化方式配置 CHCharts，快速开发图表，满足各种可视化需求。

# Demo 展示

![](/others/demo.gif)

# 使用 CHCharts

首先，下载本项目。

其中，`ch-canvas` 是我们提供的组件，其他文件是如何使用该组件的示例。

## 引入组件

微信小程序的项目创建可以参见[微信公众平台官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/quickstart/basic/getting-started.html)。

在创建项目之后，拷贝 `ch-canvas` 目录到新建的项目下，然后做相应的调整。

具体可以参考 `pages/rose` 目录下的几个文件的写法。下面，我们具体地说明。

## 创建图表

首先，在 `pages/rose` 目录下新建以下几个文件：`rose.js`、 `rose.json`、 `rose.wxml`、 `rose.wxss`。并且在 `app.json`

`pages` 中增加 `'pages/rose/rose'`。

`rose.json` 配置如下：

```json
{
  "usingComponents": {
    "ch-canvas": "../../ch-canvas/ch-canvas"
  }
}
```

然后，`pages/rose/rose.wxml` 中使用 `<ch-canvas>` 组件。

如 `rose.wxml` 中：

```xml
<view class='container'>
  <ch-canvas canvasId='rose' id='rose'></ch-canvas>
</view>
```

最后，在 `rose.js` 中配置相关参数、数据就可以在页面中显示出图表了。

`rose.js` 配置如下：

```js
var data = [
  { name: "甜甜圈", value: 50, color: "#80e0ed" },
  { name: "冰淇淋", value: 40, color: "#9197ed" },
  { name: "棒棒糖", value: 30, color: "#eddf5c" },
  { name: "奶茶", value: 60, color: "#e4ff99" },
  { name: "抹茶蛋糕", value: 50, color: "#baffad" },
  { name: "蛋挞", value: 20, color: "#afee9d" }
];

Page({
  onLoad: function(options) {
    var options = {
      data: data,
      legend: "{c}",
      chartRatio: 0.95,
      style: "rose",
      showLegend: true,
      showLabel: true,
      animation: true
    };
    this.roseComp = this.selectComponent("#rose");
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 213);
  }
});
```
