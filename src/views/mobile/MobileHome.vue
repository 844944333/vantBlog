<template>
  <div id="Maske">
    <MobilePageLoadScrollBar></MobilePageLoadScrollBar>
    <div class="bg"></div>
    <MobileCenter class="center"></MobileCenter>
    <a class="bean" href="http://beian.miit.gov.cn/" target="_blank" >桂ICP备2021003495号</a>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileCenter from "@/components/mobile/MobileCenter";
import MobilePageLoadScrollBar from "@/components/mobile/MobilePageLoadScrollBar";
export default {
  data () {
    return {

    }
  },
  components: {
    MobileFooter,
    MobileCenter,
    MobilePageLoadScrollBar
  }
}
</script>

<style lang='scss' scoped>
//.home {
//  padding: .1rem;
//}

#Maske {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
  z-index: 5;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
  .bg {
    width: 100%;
    height: 100vh;
    animation: change 15s infinite ;
    background: linear-gradient(125deg,#2980b9,#633bd3,#8e44ad,#192f44,#27ae60);
    background-size: 800%;
    z-index: -99;
  }
  .bean {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
  }
  @keyframes change {
    0% { background-position-x: 0%;}
    50% { background-position-x: 100%; }
    100% { background-position-x: 0%;}
  }
}
@media screen and (max-width: 700px) {
  .bean {
    font-size: 15px !important;
  }
}
</style>
