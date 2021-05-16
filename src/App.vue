<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
