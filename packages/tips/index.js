// 导入组件，组件必须声明 name
import tips from './src/tips'

// 为组件提供 install 安装方法，供按需引入
tips.install = function (Vue) {
  Vue.component(tips.name, tips)
}

// 默认导出组件
export default tips