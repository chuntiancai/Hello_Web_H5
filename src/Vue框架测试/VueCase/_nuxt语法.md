
## <NuxtPage>组件:
    1、<NuxtPage> 是 Nuxt 内置的组件。它可以用来显示位于 pages/ 目录中的顶级或嵌套页面。
        <NuxtPage> 是对 Vue Router 的 <RouterView> 组件的封装。它接受相同的 name 和 route 属性。
        <NuxtPage> 只用一次，用于用户第一次访问web应用的时候，就是<RouterView> 组件的封装。
        <NuxtPage> 就是pages/目录下的顶级路由，也就是访问localhost:/的时候，就会去pages目录下寻找index.vue文件来填充<NuxtPage> 的坑位。
        实际上你不要<NuxtPage> 也是可以的，在app.vue中路由到pages的其他vue文件就可以了。

## <NuxtLayout>组件：
    1、<NuxtLayout>是layouts目录下的顶级路由，Nuxt 提供了 <NuxtLayout> 组件来在页面和错误页面上显示布局。
        根据<NuxtLayout name="header"/>去寻找，layout目录下class="header"的组件来填充<NuxtLayout name="header"/>的坑位。
        我也不知道为啥<NuxtPage> 不行，还不是很懂。