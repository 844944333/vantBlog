<template>
  <div id="app">
    <!-- pc -->
    <router-view v-if="showPage === 'pc'" name="pc"/>

    <!-- mobile -->
    <MobileHeader v-if="showPage === 'mobile'"></MobileHeader>
    <router-view v-if="showPage === 'mobile'" name="mobile" />
  </div>
</template>

<script>
import MobileHeader from '@/components/mobile/MobileHeader'
export default {
  name: 'app',
  data () {
    return {
      showPage: '',
    }
  },
  components: {
    MobileHeader
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
  /* 设置字体大小为 16px ---> font-size: .16rem */
  font-size: 100px !important;
  --themeColor: #006dfe;
}
@font-face{
  font-family: font;
  src: url("./assets/font/JetBrainsMono-Regular.ttf");
  /* swap: 如果设定的字体还未加载完成，浏览器将首先使用备用字体显示， 当设定的字体加载完成时替换备用字体 */
  font-display: swap;
}
.font {
  font-family: font;
}
a {
  text-decoration: none;
}
.flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}

</style>
