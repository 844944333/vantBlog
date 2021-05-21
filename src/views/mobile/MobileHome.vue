<template>
  <div>
    <div class="home">
      Home of Mobile

      这是移动端的首页


    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import MobileFooter from "@/components/mobile/MobileFooter";
export default {
  data () {
    return {

    }
  },
  components: {
    MobileFooter
  }
}
</script>

<style lang='scss' scoped>
.home {
  padding: .1rem;
}
</style>
