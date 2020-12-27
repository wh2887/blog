<template>
  <div class="nav">
    <ul>
      <router-link v-for="item in navList" :to="item.route" :key="item.id" class="link" active-class="nav-selected">
        <li><span> {{ item.name }} </span></li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  navList = [
    {id: 0, route: '/home/', name: '主页'},
    {id: 1, route: '/archives/', name: '归档'},
    {id: 2, route: '/photos/', name: '相册'},
    {id: 3, route: '/about/', name: '关于我'},
  ];
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.nav {
  font-size: 1.2em;
  height: 3em;
  background: $nav-bg;
  display: flex;
  flex-direction: row-reverse;
  box-shadow: 0 0 0 4px rgb(0,0,0,.5);

  > ul {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    > .link {
      flex-grow: 1;
      flex-shrink: 0;
      height: 100%;
      line-height: inherit;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      > li {
      }
    }

    > .nav-selected {
      > li {
        > span {
          font-size: inherit;
          color: #58A6FF;
        }
      }
    }
  }
}
</style>