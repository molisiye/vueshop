<template>
  <section class="msite">
    <!-- 首页头部 -->
    <headerTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousou"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </headerTop>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArray" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
          <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!-- 首页附近商家列表 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import headerTop from "../../components/HeaderTop/HeaderTop"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import {mapState} from 'vuex'
import ShopList from "../../components/ShopList/ShopList"

export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },

  mounted () {
    this.$store.dispatch('getCategorys')
    // 创建一个Swiper对象，来实现轮播
    new Swiper(".swiper-container", {
      loop: true, // 可以循环轮播
      // 如果需要分液器
      pagination: {
        el: ".swiper-pagination",
      }
    })
  },

  computed: {
    ...mapState(['address', 'categorys']),

    /**
     * 根据categorys一维数组生成一个二维数组，小数组中的元素个数最大为8
     */
    categorysArray () {
      const {categorys} = this;
      // 准备一个空的二维数组
      const arr = [];
      // 准备一个小数组（最大长度为8）
      let minArr = [];
      // 遍历categorys
      categorys.forEach(c => {
        // 如果当前小数组已经满了，创建一个新的小数组
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的，将 minArr 放入大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });

      return arr;
    }
  },

  components: {
    headerTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px

</style>
