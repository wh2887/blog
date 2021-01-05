<template>
  <div class="home-wrapper">
    <el-row type="flex" class="main" justify="center" :gutter="10">
      <el-col :span="11">
        <div class="item article">
          <div class="article-header">
            <h1>文章标题</h1>
            <div class="tags">
              3天前&nbsp;&nbsp;
              <a href="#">#标签分类</a> <br/>
              <img src="../assets/icons/first-blog.jpg" alt="">
            </div>
          </div>
          文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
        </div>
        <div class="item article">
          <div class="article-header">
            <h1>文章标题</h1>
            <div class="tags">
              3天前&nbsp;&nbsp;
              <a href="#">#标签分类</a> <br/>
              <img src="../assets/icons/first-blog.jpg" alt="">
            </div>
          </div>
          文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <el-row type="flex" justify="center">
            <div class="avatar">
              <el-row type="flex" justify="center">
                <el-col>
                  <img src="../assets/icons/avatar.jpg" alt="头像"/>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col>
                  <h2 class="title">McCall</h2>
                </el-col>
              </el-row>
            </div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import {Row, Col} from 'element-ui';

Vue.use(Row);
Vue.use(Col);

@Component({
  components: {Nav}
})
export default class Home extends Vue {
  date() {
    return {};
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.home-wrapper {
  flex: 1;
  padding: 0 10px;

  .main {
    font-size: 16px;
    margin-top: 42px;
    overflow: auto;

    &:first-child {

    }

    > :last-child {

      img {
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(40, 40, 40, .1);
        max-width: 100%;
        min-width: 130px;
        height: 130px;
      }

      .avatar {
        flex-shrink: 1;
        margin-top: .8em;
        margin-bottom: .8em;

        .title {
          padding-top: .5em;
          text-align: center;
        }
      }
    }

    .item {
      background: #161B22;
      box-shadow: $box-shadow;
      border-radius: $box-radius;
    }

    .article {
      margin-bottom: 2em;
      padding: .5em;

      > .article-header {
        .tags{
          padding-top: .5em;
          padding-bottom: 1em;
          > img{
            width: 100%;
            max-height: 260px;
            object-fit: cover;
            margin-top: .5em;
            border-radius: $box-radius;
          }
        }
      }
    }
  }

}
</style>