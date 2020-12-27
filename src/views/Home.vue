<template>
  <div>
    Home
    <el-button type="success">按钮</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import {Button} from 'element-ui';

Vue.use(Button);

@Component({
  components: {Nav}
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>