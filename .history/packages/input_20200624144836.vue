<template>
  <div class="dn-input" :class="{ 'dn-input_suffix': showSuffix }">
    <!-- 如果传了showPassword，判断是否需要切换密码的显示，如果不传，不判断 -->
    <input
      class="dn-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="dn-input_suffix" v-if="showSuffix">
      <i
        class="dn-input_icon dn-icon-close"
        v-if="clearable && value"
        @click.self="clear"
      ></i>
      <i
        class="dn-input_icon dn-icon-eye_protection"
        v-if="showPassword && type == 'password'"
        @click.self="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "DnInput",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // value: null
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //用于控制是否显示密码框
      passwordVisible: false
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      console.log("handleInput -> e.target.value", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.dn-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dn-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.dn-input_suffix {
  .dn-input_inner {
    padding-right: 30px;
  }
  .dn-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
<style lang="scss">
.dn-input {
  width: 100%;
}
</style>
