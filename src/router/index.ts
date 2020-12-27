import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Archives from '@/views/Archives.vue';
import Photos from '@/views/Photos.vue';
import AboutMe from '@/views/AboutMe.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/photos',
    component: Photos,
  },
  {
    path: '/archives',
    component: Archives
  },
  {
    path: '/about',
    component: AboutMe
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
