// 整个包的文件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'
// 定义install 方法，接收Vue作为参数，如果使用use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  console.log('123')
}

export default install
