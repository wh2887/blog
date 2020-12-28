<template>
  <div class="home-wrapper">
    <el-row type="flex" class="main" justify="center" :gutter="10">
      <el-col :span="11">
        <div class="item">
          文章列表
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <div class="avatar">
            <img src="../assets/icons/avatar.jpg" alt="头像"/>
          </div>
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
    return {
    };
  }

}
</script>

<style lang="scss" scoped>
.home-wrapper {
  flex: 1;
  padding: 0 10px;

  .main {
    &:first-child {

    }

    > :last-child {
      color: #58A6FF;
      img{
        max-width: 100%;
      }
    }

    .item {
      border: 1px solid red;
    }
  }

}
</style>