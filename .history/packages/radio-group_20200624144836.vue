<template>
  <div class="dn-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dnRadioGroup",
  provide() {
    return {
      RadioGroup: this
    };
  },
  // provide: {
  //   foo: "123123"
  // },
  props: {
    // dn-radio-group 接收到了value值
    // 将来还需要触发 当前的input事件
    // provide 与 inject  provide/consumer  用来做祖孙之间得组件通讯
    value: null
  },
  data() {
    return {};
  },
  components: {},
  mounted() {
    console.log(this.RadioGroup);
  }
};
</script>

<style scoped lang="less"></style>
