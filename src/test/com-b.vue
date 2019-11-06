<template>
  <div class="container-a">
      <p>COM-B <button @click="fn">B2A</button></p>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      msg: 'B组件的数据'
    }
  },
  methods: {
    fn () {
      eventBus.$emit('B2A', this.msg)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
