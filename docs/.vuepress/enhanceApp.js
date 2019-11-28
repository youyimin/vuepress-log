import Vue from 'vue'
import Element from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

import './public/main.scss'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Element)
  Vue.prototype.$http= axios
}