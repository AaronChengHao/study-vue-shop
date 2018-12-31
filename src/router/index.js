import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Goods from '@/components/goods/goods';
import Rating from '@/components/rating/rating';
import Seller from '@/components/seller/seller';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/rating'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/rating',
      name: 'rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
});
