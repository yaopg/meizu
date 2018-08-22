import Router from 'vue-router'
import index from '../components/index.vue'
import moble from '../components/moble.vue'
import mount from '../components/mount.vue'
import video from '../components/video.vue'
import code from '../components/code.vue'
import life from '../components/life.vue'
import search from '../components/search.vue'
// import my from '../components/my.vue'
// import my_1 from '../components/my_1.vue'
// import my1 from '../components/my1.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
   	  path: '/moble',
      name: 'moble',
      component: moble
    },
    {
      path: '/mount',
      name: 'mount',
      component: mount
    } ,
    {
      path: '/video',
      name: 'video',
      component: video
    } 
    ,
    {
      path: '/code',
      name: 'code',
      component: code,
    } ,
    {
      path: '/life',
      name: 'life',
      component: life,
    } ,
    {
      path: '/search',
      name: 'search',
      component: search,
    } 
    ]
})
