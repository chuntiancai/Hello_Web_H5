
## Vuex简介
    Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。
    Vuex 就是以第三者旁观的角度来管理项目中的数据。类似共享池的概念。

    1、使用 Vuex 统一管理状态的好处：
        ① 能够在 vuex 中集中管理共享的数据，易于开发和后期维护
        ② 能够高效地实现组件之间的数据共享，提高开发效率
        ③ 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

    2、一般组件之间共享数据的方式(满足不了)： 
        父向子传值：v-bind 属性绑定
        子向父传值：v-on 事件绑定
        兄弟组件之间共享数据： EventBus
             $on 接收数据的那个组件
             $emit 发送数据的那个组件

    3、一般情况下，只有组件之间共享的数据，才有必要存储到 vuex 中；对于组件中的私有数据，依旧存储在组件自身的 data 中即可。

## Vuex的基本使用：
    1. 安装 vuex 依赖包
        npm install vuex --save

    2. 导入 vuex 包
        import Vuex from 'vuex'
        Vue.use(Vuex)

    3. 创建 store 对象
        const store = new Vuex.Store({
            // state 中存放的就是全局共享的数据
            state: { count: 0 }
        })
    4. 将 store 对象挂载到 vue 实例中
        new Vue({
            el: '#app',
            render: h => h(app),
            router,
            // 将创建的共享数据对象，挂载到 Vue 实例中
            // 所有的组件，就可以直接从 store 中获取全局的数据了
            store
        })

## Vuex的核心概念：
     State ， Mutation ， Action ， Getter
### 1、State 存放数据
        State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。  
        // 创建store数据源，提供唯一公共数据
        const store = new Vuex.Store({
            state: { count: 0 }
        })
    
        1.组件访问 State 中数据的第一种方式：
            this.$store.state.全局数据名称

        2.组件访问 State 中数据的第二种方式：
            // 1. 从 vuex 中按需导入 mapState 函数。
            import { mapState } from 'vuex'
            
            // 2. 将全局数据，映射为当前组件的计算属性。
                通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：
            computed: {
             ...mapState(['count']) //于是count就是一个计算属性了，可以通过插值表达式访问，存在state中。
            }

### 2、Mutation 修改数据
        Mutation 用于变更 Store中 的数据。
        ① 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
        ② 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
         // 定义 Mutation
        const store = new Vuex.Store({
            state: {
                count: 0
            },
            mutations: {
                //可以在触发 mutations 时传递参数step
                add(state, step) {
                    // 变更状态
                    state.count += step
                }
            }
        })

        // 触发mutation，其他地方
        methods: {
            handle1() {
                // 触发 mutations 的第一种方式
                this.$store.commit('add')
                // 触发 mutations 时携带参数
                //this.$store.commit('add', 3)
            }
        }

        1.触发 mutations 的第二种方式：
            // 1. 从 vuex 中按需导入 mapMutations 函数
            import { mapMutations } from 'vuex'

            // 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数：
                通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：
            methods: {
             ...mapMutations(['add', 'addN'])   //映射之后，可以通过其他方法直接调用add和addN函数。
            }

### Action 异步处理任务
    1、如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
        // 定义 Action
        const store = new Vuex.Store({
        // ...省略其他代码
            mutations: {
                add(state) {
                    state.count++
                }
            },
            actions: {
                addAsync(context) {
                    setTimeout(() => {
                            context.commit('add')
                        }, 1000)
                } 
            }
        })

        // 触发 Action
        methods: {
            handle() {
                // 触发 actions 的第一种方式
                this.$store.dispatch('addAsync')
            }
        }
