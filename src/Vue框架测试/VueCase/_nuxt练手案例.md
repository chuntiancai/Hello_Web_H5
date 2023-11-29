
## 这是用nuxt脚手架搭建的案例，购物后台管理系统。

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

## pages目录：
    1、自己在根目录下手动创建pages目录，直接在page目录下创建.vue文件，nuxt就自动根据名字生成路由器了。
        然后nuxt就可以用<NuxtPage>和<NuxtLink>这些标签来路由到pages目录下的其他vue文件了。
        这个是.vue文件本地路由的意思，server目录的就是url请求的路由的意思。

## layouts目录：
    1、自己在根目录下手动创建layouts目录，直接在layouts目录下创建.vue文件，nuxt就可以用 <NuxtLayout> 来使用layouts目录下的vue文件了。

## components目录：
    1、自己在根目录下手动创建components目录，直接在components目录下创建.vue文件，Nuxt3 中会自动导入您 components/ 目录中的所有组件，也就是说当你想使用组件时，就不用 import 了，直接使用即可；

## composables目录：
    1、你自己在根目录下手动创建composables目录，在 Nuxt 3 中使用该目录时，composables/ 目录将自动导入，将 Vue 可组合项（Hooks）自动导入到您的应用程序中，即不需要在其它地方 import。
        就是供全局js文件使用的函数的意思，就是全局函数的意思。
        所以，所谓的hook，其实也就是第三方函数，或者是占位函数。

## plugins目录：
    1、这个是第三方插件的目录，也就是js的第三方包，Nuxt会自动读取plugins/目录中的文件，并在创建Vue应用程序时加载它们，只有在plugins目录的顶层文件（或任何子目录中的索引文件index.ts）才会自动注册为插件。如果是子目录的非index.ts文件，则需要在nuxt.config.ts文件中注册才可以使用。
        在nuxt.config.ts文件中：
            export default defineNuxtConfig({
                plugins: [
                    '~/plugins/bar/baz',    //~符号，默认是项目根目录。
                    '~/plugins/bar/foz'
                ]
            })

## public目录：
    1、public/ 目录位于服务器根目录下，包含一些公共文件，这些文件需要保持原来的文件名（例如 robots.txt）

## server目录：
    1、server/目录用于在应用程序中注册API和服务器处理程序。就是url访问服务器的意思。Nuxt会自动扫描server目录中的文件，以便在应用程序中注册具有HMR支持的API和服务器处理程序。
        然后其他js文件，可以通过访问url的方式来访问server目录下，ts文件的函数和变量。相当于一个本地服务器资源。

    2、~/server/api目录，nuxt会为该目录中的文件自动在其路由中添加/api前缀。访问的时候需要在url上带上 ～/api/xxxFunc
        ~/server/routes目录，要添加没有/api前缀的服务器路由，请将它们放入~/server/routes目录中。

    3、~/server/middleware目录，Nuxt会自动读取该目录中的任何文件，以创建项目的服务器中间件。

    4、~/server/plugins目录，Nuxt会自动读取该目录中的任何文件，并将它们注册为Nitro插件。这允许扩展Nitro的运行时行为并钩入生命周期事件。

    5、~/server/utils目录，你可以在~/server/utils目录中自己添加更多的辅助函数。服务器路由由unjs/h3提供支持，并附带一组方便的辅助函数。

## middleware目录：
    1、Nuxt 提供了中间件来在导航到特定路由之前运行代码。也就是url请求到结束直接的中间处理。
        有三种类型的路由中间件：
            1.匿名（或内联）路由中间件直接在页面内定义。
            2.命名路由中间件，放置在 middleware/ 目录下，并在页面上使用时通过异步导入自动加载。
            3.全局路由中间件，放置在 middleware/ 目录下，并以 .global 后缀结尾，在每次路由更改时运行。

        前两种类型的路由中间件可以在 definePageMeta 中定义。       
        中间件的名称会被规范化为 kebab-case 格式：myMiddleware 变成 my-middleware 