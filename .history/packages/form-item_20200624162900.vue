<template>
  <div class="dn-form-item">
    <label
      class="dn-form-item_label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="dn-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DnFormItem',
  props: {
    label: String
  },
  inject: ['Form'],
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.dn-form-item {
  margin-bottom: 25px;
  .dn-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .dn-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
