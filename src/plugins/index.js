import rollPage from './rollpage.vue'

let roll = {};
roll.install = function (Vue, options) {
  // Vue.prototype.$msg = 'Hello I am test.js'
  // Vue.prototype.$tabbar = 'tabbar';
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我');
      return arr
    }
  }

  Vue.component(rollPage.name, rollPage) // testPanel.name 组件的name属性
}
export default roll
