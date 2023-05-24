

## 简介
    flex布局对PC端的兼容性并不友好，对移动端很友好。
    flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。
        div {
            display: flex;
            justify-content: space-around;
        }
    1、建议：
        1.如果是PC端页面布局，我们还是传统的流式布局。
        2.如果是移动端或者不考虑兼容性问题的PC端页面布局，我们还是使用flex弹性布局


### flex 布局原理

    1、当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
       伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 =flex布局。任何一个容器都可以指定为 flex 布局。

    2、felx原理是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。子容器可以横向排列也可以纵向排列
        以下6个属性是对父元素设置的： 
            flex-direction：设置主轴的方向。  （默认主轴是水平向右的X轴，侧轴是垂直向下的Y轴）。
            justify-content：设置主轴上的子元素排列方式。   (并不改变主轴的方向)
            flex-wrap：设置子元素是否换行。     (默认是不换行)
            align-content：设置侧轴上的子元素的排列方式（多行，单行无效果）。
            align-items：设置侧轴上的子元素排列方式（单行）。   (默认是从上到下)
            flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap。
         
         以下3个属性是对子元素设置的： 
            flex 属性定义子项目分配的剩余空间，用flex来表示占多少份数。
            align-self 控制子项自己在侧轴上的排列方式。
            order 属性定义项目的排列顺序。(注意：和z-index不一样)(默认是0)




