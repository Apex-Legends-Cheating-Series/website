import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style/var.css'
import RegisterSW from './components/RegisterSW.vue'

export default {
    ...DefaultTheme,
    Layout() {
      return h(DefaultTheme.Layout, null, {
        'layout-bottom': () => h(RegisterSW)
      })
    }
  }