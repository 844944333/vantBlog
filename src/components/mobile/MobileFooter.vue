<template>
  <div class="footer" ref="footer">
    <div class="project">
      <div class="project_title">友情链接</div>
      <ul>
        <li class="project_item"><van-icon name="cluster" class="icon" />GitHub</li>
      </ul>
    </div>
    <div class="project">
      <div class="project_title">学习</div>
      <ul>
        <li class="project_item"><van-icon name="cluster" class="icon" />背单词</li>
        <li class="project_item"><van-icon name="cluster" class="icon" />敲代码</li>
        <li class="project_item"><van-icon name="cluster" class="icon" />做数学</li>
      </ul>
    </div>
    <div class="copyright">
      <p class="author font">Copyright © 2021 lnb_dev Built with Vue.</p>
      <a class="bean" href="http://beian.miit.gov.cn/" >桂ICP备2021003495号</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    console.log(this.$refs.footer.style.width)
  }
}
</script>

<style lang='scss' scoped>
.footer {
  padding: .3rem .10rem;
  background: rgba(0, 0, 0, .8);
  color: #fff;
  .project {
    padding: .3rem;
    .project_title {
      font-weight: 600;
      font-size: .24rem;
    }
    .project_item {
      margin-top: .2rem;
      display: flex;
      align-items: center;
      .icon {
        margin-right: .1rem;
        color: cornflowerblue;
      }
    }
  }

  .copyright {
    text-align: center;
    .author {
      margin-top: .4rem;
      padding: 0 .2rem;
    }
    a {
      display: inline-block;
      margin-top: .2rem;
      text-decoration: none;
      color: gold;
    }
  }

}
</style>
