<template>
  <div class="dn-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DnForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  },
  components: {}
}
</script>

<style scoped lang="less"></style>
