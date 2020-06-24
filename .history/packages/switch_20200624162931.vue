<template>
  <div class="dn-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <span class="dn-switch_core" ref="core">
      <span class="dn-switch_button"></span>
    </span>
    <input class="dn-switch_input" type="checkbox" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: 'DnSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击时，还需要修改背景色
      // console.log(this.value);
      // 等待value 发生了改变，在setColor
      // 等待修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.background = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  },
  data () {
    return {}
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.dn-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .dn-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .dn-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .dn-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .dn-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.dn-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
