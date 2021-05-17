<template>
  <div class="footer" ref="footer">
    Footer of Mobile
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    console.log(this.$refs.footer.style.height)
  }
}
</script>

<style lang='scss' scoped>

</style>
