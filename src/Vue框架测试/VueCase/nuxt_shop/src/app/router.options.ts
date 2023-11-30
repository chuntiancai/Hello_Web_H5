import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    routes:(_routes)=>[
        //... 是 JavaScript 中的扩展运算符，也称为剩余参数语法。它可以将一个数组或对象展开成单独的元素。在函数参数中，... 用于将多个参数合并为一个数组。
        ..._routes, 
        [
            {
                name: 'test',
                path: '/haha',
                component:() => import('~/my-test-pages/testPage.vue').then(r => r.default || r),
            }
        ]
    ]
}

// const customRoutes = [
    // {
    //   name: 'home',
    //   path: '/',
    //   component: ()=> import('../pages/Home.vue')
    // },
    // {
    //   name: 'about',
    //   path: '/about1',
    //   component: ()=> import('../pages/About.vue')
    // },
//   ]
//   export default {
//     routes:(_routes)=>[
//       ..._routes,
//       ...customRoutes
//     ]
//   }