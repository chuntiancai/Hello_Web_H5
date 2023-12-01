
##  Vue中的this：
    1、全局环境下，this 始终指向全局对象（window）
    2、在Vue实例中，methods、生命周期函数中如果用的是正常函数，那么它的this就指向Vue实例，也就是vm（本文中的vm是指const vm = new Vue（{···}）中的vm。
    3、箭头函数没有绑定this，this继承自外围作用域，理解：查看上一层级的函数的this的指向，继承它！！
    4、html组件绑定函数中的this就是vue实例对象，想要获取当前组件，则通过this.$refs来引用，ref是vue的引用的意思(名字)。