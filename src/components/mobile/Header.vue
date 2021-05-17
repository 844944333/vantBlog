<template>
  <div class="home">
    <div class="header">
      <van-icon name="ellipsis" class="header_more" @click="more" ref="more"/>
      <div class="header_info">
        <img class="logo" src="http://rocky10.cn/static/img/-father.06bdb82f.jpg" alt="">
        <span class="name">lnb_dev</span>
      </div>
      <van-popup v-model="showMore" position="left" class="home_popup" >
        <div class="header_info_wrap">
          <router-link to="/">
            <div class="header_info" @click="toHome">
              <img class="logo" src="http://rocky10.cn/static/img/-father.06bdb82f.jpg" alt="">
              <span class="name">lnb_dev</span>
            </div>
          </router-link>
          <van-icon name="close" class="popup_close" @click="showMore = false" />
        </div>
        <div class="popup_list">
          <router-link to="/" class="popup_list_item">
            <div @click="closeMore(0)" class="list_item_wrap">
              <div :class="{more_title: moreIndex === 0}">首页</div>
              <van-icon name="arrow" :class="{more_title: moreIndex === 0}" />
            </div>
          </router-link>
          <router-link to="/" class="popup_list_item">
            <div @click="closeMore(1)" class="list_item_wrap">
              <div :class="{more_title: moreIndex === 1}">学习</div>
              <van-icon name="arrow" :class="{more_title: moreIndex === 1}" />
            </div>
          </router-link>
          <router-link to="/" class="popup_list_item">
            <div @click="closeMore(2)" class="list_item_wrap" :class="{more_title: moreIndex === 2}">
              <div :class="{more_title: moreIndex === 2}">分类</div>
              <van-icon name="arrow" :class="{more_title: moreIndex === 2}" />
            </div>
          </router-link>
          <router-link to="/about" class="popup_list_item">
            <div @click="closeMore(3)" class="list_item_wrap" :class="{more_title: moreIndex === 3}">
              <div :class="{more_title: moreIndex === 3}">关于我</div>
              <van-icon name="arrow" :class="{more_title: moreIndex === 3}" />
            </div>
          </router-link>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      showMore: false,
      moreIndex: 0
    }
  },
  methods: {
    more () {
      this.showMore = true
      this.$refs.more.style.fontSize = '.25rem'
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
        .popup_list_item {
          padding: .15rem 0;
          display: flex;
          .list_item_wrap {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .more_title {
              font-weight: 600;
            }
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
