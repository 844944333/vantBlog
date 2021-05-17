<template>
  <div class="home">
    <div class="header">
      <van-icon name="bars" class="header_more" @click="more" ref="more"/>
      <div class="header_info">
        <img class="logo" src="../../assets/images/-father.jpg" alt="">
        <span class="name">lnb_dev</span>
      </div>
      <van-popup v-model="showMore" position="left" class="home_popup" >
        <div class="header_info_wrap">
          <router-link to="/">
            <div class="header_info" @click="toHome">
              <img class="logo" src="../../assets/images/-father.jpg" alt="">
              <span class="name">lnb_dev</span>
            </div>
          </router-link>
          <van-icon name="close" class="popup_close" @click="showMore = false" />
        </div>
        <div class="popup_list">
          <router-link :to="`${item.link}`" v-for="(item, index) in bars" :key="index">
            <div class="popup_list_wrap" @click="closeMore(index)">
              <div class="wrap_info">
                <van-icon :name="item.icon" size=".16rem" style="margin-right: .05rem" />
                {{item.text}}
              </div>
              <van-icon name="arrow" style="font-weight: 600" />
            </div>
          </router-link>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MobileHeader',
  data () {
    return {
      showMore: false,
      moreIndex: 0,
      bars: [
        {
          icon: 'wap-home-o',
          text: '首页',
          link: '/'
        },
        {
          icon: 'award-o',
          text: '分类',
          link: '/category'
        },
        {
          icon: 'flag-o',
          text: '学习',
          link: '/study'
        },
        {
          icon: 'cluster-o',
          text: '技术文档',
          link: '/technical'
        },
        {
          icon: 'music-o',
          text: '随笔',
          link: '/life'
        },
        {
          icon: 'info-o',
          text: '关于',
          link: '/about'
        }
      ]
    }
  },
  methods: {
    more () {
      this.showMore = true
    },
    closeMore (index) {
      this.showMore = false
      this.moreIndex = index
    },
    toHome () {
      // this.$router.push({
      //   path: '/'
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .header {
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    background: #fff;
    height: .6rem;
    .header_more {
      font-size: .25rem;
    }
    .home_popup {
      height: 100%;
      width: 65%;
      background: #efefef;
      .header_info_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        .popup_close {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: .12rem;
          font-weight: 600;
          font-size: .16rem;
          width: .32rem;
          height: .32rem;
          color: darkgreen;
        }
      }
      .popup_list {
        padding: 0 .2rem;
        .popup_list_wrap {
          padding: .15rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .wrap_info {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}

.header_info {
  height: .6rem;
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: .2rem;
  .logo {
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    margin-right: .15rem;
  }
  .name {
    color: var(--themeColor);
  }
}
</style>
