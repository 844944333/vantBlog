<template>
  <div id="app">
    <router-view v-if="showPage === 'mobile'" name="mobile"/>
    <router-view v-if="showPage === 'pc'" name="pc"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showPage: '',
    }
  },
  created () {
    if (this._isMobile()) {
      this.showPage = 'mobile'
    } else {
      this.showPage = 'pc'
    }
    // console.log(this.showPage)
  },
  methods: {
    _isMobile () {
      const flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  min-height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #efefef;
  font-size: .14rem;
}
html {
  font-size: 100px !important;
  /* 设置字体大小为 16px ---> font-size: .16rem */
  --themeColor: #006dfe;
}

</style>
