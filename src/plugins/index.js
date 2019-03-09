import rollPage from './rollpage.vue'

let roll = {};
roll.install = function (Vue, options) {
  Vue.component(rollPage.name, rollPage) // testPanel.name 组件的name属性
}
export default roll
