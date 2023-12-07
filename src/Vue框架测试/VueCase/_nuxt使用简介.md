
## nuxt简介
    1、nuxt就是一个封装了vue的框架。
        vue适用于spa单页面系统，nuxt更适合ssr前后端共同渲染的系统，就是后台同时编译压缩了js然后直接返回浏览器渲染，这样的渲染速度更快，浏览器承压更小。
        客户端渲染（CSR）和服务端渲染（SSR），nuxt也更适合SEO搜索优化。

    2、Nuxt的核心包组成：
        核心引擎：nuxt
        打包工具：@nuxt/vite-builder 和 @nuxt/webpack-builder
        命令行界面：nuxi
        服务器引擎：nitro
        开发工具包：@nuxt/kit
        Nuxt 2桥接：@nuxt/bridge

    3、nuxt默认支持了ts。
    4、nuxt可以区分客户端服务的，可以在文件名中使用 .server 或 .client 后缀来让插件在 服务器端 或 客户端 加载插件。
    5、Nuxt由不同的核心包组成：
        核心引擎：nuxt
                就是集成了下面几个核心包的功能。
        打包工具：@nuxt/vite-builder 和 @nuxt/webpack-builder
        命令行界面：nuxi
        服务器引擎：nitro
                  自动导入头文件，路由的功能主要都是由这个包实现，所以你要去看这个包的api，而这个包主要优势用unjs/h3实现，所以你就要去看unjs/h3的文档。
        开发工具包：@nuxt/kit
        Nuxt 2桥接：@nuxt/bridge
        
## nuxt的自动化和约定
    1、也就是nuxt的默认行为，它默认为你干的一些事情。
        基于文件的路由: 根据pages/目录的结构定义路由。  //也就是page目录下的文件，它都自动给你设置了路由路径。
        内置服务器端渲染: Nuxt具备内置的服务器端渲染能力，因此你不需要自己设置单独的服务器。
        自动导入: 在各自的目录中编写Vue组件和可组合函数，并在使用时无需手动导入，享受树摇和优化JS捆绑包的好处。
        数据获取工具: Nuxt提供了可用于处理与服务器端渲染兼容的数据获取的可组合函数，以及不同的策略。
        零配置的TypeScript支持: 提供了自动生成的类型和tsconfig.json配置文件。
        配置好的构建工具: 默认使用Vite来支持开发中的热模块替换（HMR），以及在生产中将代码打包成符合最佳实践的形式。

    2、nuxt默认创建的目录和文件，以及相关的作用：
        1.你用npx nuxi@latest init <projext name>来创建nuxt应用的时候，nuxt就会为你创建一大堆的目录和文件的了，具体什么作用，你去看nuxt官网的介绍吧。


## nuxt的步骤：
    1、直接查看官网看步骤
    2、nuxt的入口文件不是main.js，内部直接封装了main.js，入口文件直接就是app.vue。有什么在app.vue中干就可以了。
        关于路由器，直接在page目录下创建.vue文件，nuxt就自动根据名字生成路由器了。
        自己在根目录下手动创建pages目录。

## nuxt命令：
        npm run dev     //执行nuxt程序，和npm一样。

## pages目录(业务vue组件)：
    1、自己在根目录下手动创建pages目录，直接在page目录下创建.vue文件，nuxt就自动根据名字生成路由器了。
        然后nuxt就可以用<NuxtPage>和<NuxtLink>这些标签来路由到pages目录下的其他vue文件了。
        这个是.vue文件本地路由的意思，server目录的就是url请求的路由的意思。

## layouts目录(布局vue组件)：
    1、自己在根目录下手动创建layouts目录，直接在layouts目录下创建.vue文件，nuxt就可以用 <NuxtLayout> 来使用layouts目录下的vue文件了。

## components目录(UI的vue组件)：
    1、自己在根目录下手动创建components目录，直接在components目录下创建.vue文件，Nuxt3 中会自动导入您 components/ 目录中的所有组件，也就是说当你想使用组件时，就不用 import 了，直接使用即可；

## composables目录（全局函数）：
    1、你自己在根目录下手动创建composables目录，在 Nuxt 3 中使用该目录时，composables/ 目录将自动导入，将 Vue 可组合项（Hooks）自动导入到您的应用程序中，即不需要在其它地方 import。
        就是供全局js文件使用的函数的意思，就是全局函数的意思。你可以在 .js、.ts 和 .vue 文件中使用自动导入的组合函数。
        所以，所谓的hook，其实也就是第三方函数，或者是占位函数。

    2、这个文件夹下导出的函数(文件名.ts)，一般都约定加上use前缀。例如 myFunc --> usemyFunc。
        const count = useState('counter', () => Math.round(Math.random() * 100))
        useState是nuxt3提供的一个函数，传入两个参数，用来全局状态管理，也就是持久化数据？不是，只是可以用来可以整个项目都可以访问的变量。
        这些数据只是存储在内存中的，当浏览器刷新或者关闭后，重新打开就恢复原样了。

    3、如果需要持久化window，获取window，那么可以在app.vue中获取到window，然后存储到全局变量中。或者存储到localStorage中。

## plugins目录(第三方包)：
    1、这个是第三方插件的目录，也就是js的第三方包，Nuxt会自动读取plugins/目录中的文件，并在创建Vue应用程序时加载它们，只有在plugins目录的顶层文件（或任何子目录中的索引文件index.ts）才会自动注册为插件。如果是子目录的非index.ts文件，则需要在nuxt.config.ts文件中注册才可以使用。
        在nuxt.config.ts文件中：
            export default defineNuxtConfig({
                plugins: [
                    '~/plugins/bar/baz',    //~符号，默认是项目根目录。
                    '~/plugins/bar/foz'
                ]
            })
    2、在plugins目录下绑定$axios，就可以在vue文件中调用this.$axios参数来使用axios了。

## public目录(客户可访问的资源文件)：
    1、public/ 目录位于服务器根目录下，包含一些公共文件，这些文件需要保持原来的文件名（例如 robots.txt）

## server目录(url请求)：
    1、server/目录用于在应用程序中注册API和服务器处理程序。就是url访问服务器的意思。Nuxt会自动扫描server目录中的文件，以便在应用程序中注册具有HMR支持的API和服务器处理程序。
        然后其他js文件，可以通过访问url的方式来访问server目录下，ts文件的函数和变量。相当于一个本地服务器资源。

    2、~/server/api目录，nuxt会为该目录中的文件自动在其路由中添加/api前缀。访问的时候需要在url上带上 ～/api/xxxFunc
        ~/server/routes目录，要添加没有/api前缀的服务器路由，请将它们放入~/server/routes目录中。

    3、~/server/middleware目录，Nuxt会自动读取该目录中的任何文件，以创建项目的服务器中间件。

    4、~/server/plugins目录，Nuxt会自动读取该目录中的任何文件，并将它们注册为Nitro插件。这允许扩展Nitro的运行时行为并钩入生命周期事件。

    5、~/server/utils目录，你可以在~/server/utils目录中自己添加更多的辅助函数。服务器路由由unjs/h3提供支持，并附带一组方便的辅助函数。

    6、处理文件名可以使用.get、.post、.put、.delete等后缀来匹配请求的HTTP方法，也就是文件后缀带有post字符，就会是post请求的路由。

## middleware目录(拦截请求)：
    ！！！先去看vue-router的文档，nuxt是基于vue-router的。

    1、Nuxt 提供了中间件来在导航到特定路由之前运行代码。也就是url请求到结束直接的中间处理。
        有三种类型的路由中间件：
            1.匿名（或内联）路由中间件直接在页面内定义。
            2.命名路由中间件，放置在 middleware/ 目录下，并在页面上使用时通过异步导入自动加载。
            3.全局路由中间件，放置在 middleware/ 目录下，并以 .global 后缀结尾，在每次路由更改时运行。

        前两种类型的路由中间件可以在 definePageMeta 中定义。       
        中间件的名称会被规范化为 kebab-case 格式：myMiddleware 变成 my-middleware 

    2、使用：
        1.nuxt默认会从上到下，一个一个地去执行middleware目录中的.ts文件，而这些文件中函数有写return到哪个路由路径下，然后nuxt就根据return去执行了，而不是继续从上到下执行middleware目录中的.ts文件。

        2.全局路由中间件是每次url请求改变的时候都会去执行，非全局路由中间件是在vue组件的<script>中用definePageMeta宏来执行。
            //页面.vue
            <script setup lang="ts">
                definePageMeta({
                  middleware: ["auth"]  //先经过auth.ts路由中间件，再路由到该页面vue
                  // 或 middleware: 'auth'
                })
            </script>

        3.带 .global 后缀的全局路由中间件，执行顺序优先于app.vue

## utils目录(全局工具函数)：
        1、nuxt会自动导入在utils/目录下你的工具函数，需要你自己手动创建utils目录。
            utils/目录的主要目的是在你的Vue组件和其他自动导入的工具函数之间进行语义上的区分。文件名作为函数名，或者你命名导出函数。
            utils/自动导入的工作方式和扫描方式与composables/目录相同。

## app目录(自己创建，自动扫描，可配路由)：
    1、需要自己手动创建app目录，nuxt会自动扫描加载app目录下的文件，在这里创建router.options.ts文件，nuxt自动读取这个router.options.ts文件配置自定义路由。
        //router.options.ts文件的字段配置
        routes:(_routes)=>[
            //... 是 JavaScript 中的扩展运算符，也称为剩余参数语法。它可以将一个数组或对象展开成单独的元素。在函数参数中，... 用于将多个参数合并为一个数组。
            ..._routes, 
            [
                //这里配置路由
                {
                  name: 'login',    //路由名字
                  path: '/myindex',     //访问路径
                  component: ()=> import('../pages/myindex.vue')    //关联的组件
                },
            ]
        ]

## nuxt的路由：
    1、nuxt默认情况下路由打开的组件是app.vue,通过<NuxtPage/>标签路由到的组件是pages/index.vue，如果你想要改掉这些默认的初始路由，可以在nuxt.config.ts增加hooks配置：
        hooks:{
            'pages:extend' (pages) {
              // 添加一个路由，nuxt 钩子可以添加、修改或删除扫描到的路由中的页面。
              pages.push({
                name: 'login',
                path: '/',
                file: '~/pages/list.vue'
              })
            }
        },
    也可以在middleware目录下配置.global.ts文件的全局路由，它会优先于app.vue的执行。
    
    TOFIX:
    还可以自己创建app/router.options.ts文件，配置vue-router的路由，nuxt默认使用vue-router作为路由器,但是这个会覆盖掉默认的路由配置？报错404？
    使用app/router.options.ts文件就会覆盖掉nuxt的默认路由配置？我也不知道，这是一个bug
    据说router.options.ts使用来扩展nuxt默认的路由的，但是好像没有生效，据说还没有支持，具体为什么我也不知道了。
        
## nuxt安装第三方插件：
    1、安装Element Plus和Element Plus的图标库。
        !!! 官网有教程，直接看官网
        1.npm install element-plus --save     //安装element-plus
        2.npm i @element-plus/nuxt -D    //安装 Nuxt Element Plus 模块,已经包含了图标库。
        4.在 nuxt.config.ts 文件中进行配置，添加 Element Plus 模块和 CSS 样式：
            import { defineNuxtConfig } from 'nuxt3'
            export default defineNuxtConfig({
                devtools: { enabled: true },
                modules: [
                    '@element-plus/nuxt'
                ]
            })


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