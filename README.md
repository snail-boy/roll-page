# roll-page
# Animate.css [![GitHub release](https://img.shields.io/github/release/daneden/animate.css.svg)](https://github.com/daneden/animate.css/releases) [![CDNJS](https://img.shields.io/cdnjs/v/animate.css.svg)](https://cdnjs.com/libraries/animate.css) [![Build Status](https://travis-ci.com/daneden/animate.css.svg?branch=master)](https://travis-ci.com/daneden/animate.css) [![devDependencies Status](https://david-dm.org/daneden/animate.css/dev-status.svg)](https://david-dm.org/daneden/animate.css?type=dev) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animate-css/Lobby) [![npm version](https://badge.fury.io/js/animate.css.svg)]

> A Vue.js project

rollPage 解决了长文本信息页滚动到当前页面显示动画的插件
##
你可以设置要显示元素距离页面可视区域底部多远执行动画
##
你可以使用内置样式但必须和示例dom结构一样
##
ro-opacity ro-scale ro-from-right ro-from-left

## 
你可以结合animate.css使用 做出酷炫的出场效果


## demo
npm install roll-page --S

main.js 里写
import rollPage from './plugins';
Vue.use(rollPage)

组件里引用
<roll-page></roll-page>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
