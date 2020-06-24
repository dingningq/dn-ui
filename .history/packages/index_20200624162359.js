// 整个包的文件
// 定义install 方法，接收Vue作为参数，如果使用use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'
// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
