# vue-simple-tips
vue简化版提示组件

## Usage
1:安装
```
npm install vue-simple-tips --save
or
yarn add vue-simple-tips
```
2:引入
```
在main.js中

// 导入组件
import Tips from 'vue-simple-tips'
import 'vue-simple-tips/lib/tips.css'
// 注册组件库
Vue.use(Tips);
```
3:使用
```
<Tips />
```

## API
```
<Tips 
    :showFlag="showFlag" 
    :location="location" 
    :distance="distance" 
    :tipsMsg="tipsMsg" 
    :times="times"  />
```
**showFlag**

是否显示 true/false(默认) [Boolean]

**location**

提示框位置 top/center/bottom(默认) [String]

**distance**

提示显示位置，只有 location 为 top/bottom(默认50px) 生效 [String]

**tipsMsg**

提示内容 提示(默认) [String]

**times**

消失时间 2000(默认,毫秒) [Number]
