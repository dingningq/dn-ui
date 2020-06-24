# dd_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 动态创建 class
```
:class="[`dn-button--${type}`]"
```
15vh 类似为 15%，指在一个区域内top占15%

### 插槽与v-if的配合使用
```
  v-if="$slots.footer"
```
>频繁显示隐藏要用 v-show

>点击事件里可以行内写逻辑 @click="visible = true"

>@click.self="handleClose" 只有点击自己遮罩层才触发

>子组件希望能修改父组件的一个属性visible,增加.sync
```
  子组件: this.$emit("update:visible", false);
  父组件: <dn-dialog width="50%" top="100px" :visible.sync="visible">
```

>在做组件时 子组件css里就不需要加scoped

>深度选择器 scss中用::v-deep, less中用/deep/ css中用>>>

>如何自己实现v-model=> 有v-model就相当于有 :value和@input
```
<input type="text" v-model="username" />
<input
  type="text"
  :value="username"
  @input="username = $event.target.value"
/>

data() {
    return {
      username: ""
    };
  },
```

> 我们计算属性，如果用双向绑定一个计算属性的话，必须得提供一个get,set方法


##封装成UI组件库
>1.1 目录调整
>packages: 用于存放所有的组件
>examples: 用于进行测试，把src改成examples

>package.json中加打包方法
>"lib": "vue-cli-service build --target lib packages/index.js"
>自动生成一个dist文件夹
>umd指的是通用的js规范
>common.js  公用规范



- 本项目仅作为vue组件封装的练习参考

- 初始化vue项目
    vue created demo

- 安装组件库
    npm add dn-ui

- 全局导入
    import DnUI form 'dn-ui'
    import 'dnui/lib/dnui.css'

    Vue.use(DnUI)