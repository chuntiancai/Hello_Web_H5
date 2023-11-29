<template>
    <div class="myindex">
        <h1>欢迎来到index页</h1>
        <div>
            <NuxtLayout name="header"/>
            <!-- <NuxtLink> 是 Vue Router 中 <RouterLink> 组件和 HTM L<a> 标签的替代品； -->
            <NuxtLink to="/list">进入列表页</NuxtLink>
        </div>
    </div>
</template>