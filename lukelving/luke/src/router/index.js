import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//引入主体页面(头尾固定)main.vue
import main from '@/components/main'
//引入首页内容文件shou.vue
import shou from '@/components/shou/shou.vue'

import nei from '@/components/nei/nei.vue'

import zhou from '@/components/zhou/zhou.vue'

import chu from '@/components/chu/chu.vue'

import ding from '@/components/ding/ding.vue'

import login from '@/components/login/login.vue'

import info from '@/components/info/info.vue'

import gou from '@/components/gou/gou.vue'

import suan from '@/components/gou/suan.vue'

import zhuce from '@/components/login/zhuce.vue'

import find from '@/components/find/find.vue'

Vue.use(Router)
// export default
const router= new Router({
  routes: [
    {
      path:"/",
      redirect:"/main/shou"
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path: 'shou',
          name: 'shou',
          component: shou,
        },
        {
          path: 'nei',
          name: 'nei',
          component: nei,
        },
        {
          path: 'zhou',
          name: 'zhou',
          component: zhou,
        },
        {
          path: 'chu',
          name: 'chu',
          component: chu,
        },
        {
          path: 'ding',
          name: 'ding',
          component: ding,
        },
        {
          path: 'info',
          name: 'info',
          component: info,
        },
        {
          path: 'gou',
          name: 'gou',
          component: gou,
        },
        {
          path: 'suan',
          name: 'suan',
          component: suan,
        },
        {
          path: 'find',
          name: 'find',
          component: find,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:login,
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component:zhuce,
    }
  ]
})

export default router;