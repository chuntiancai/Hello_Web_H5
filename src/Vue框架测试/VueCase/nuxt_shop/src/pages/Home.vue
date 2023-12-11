<template>
    <div>
      <el-button type="info" @click="logout">退出</el-button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // 清除token
        window.sessionStorage.clear()
        this.$router.push('/login') //回退到登录页
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }
  
  .el-aside {
    background-color: #333744;
    .el-menu {
      border-right: none;
    }
  }
  
  .el-main {
    background-color: #eaedf1;
  }
  
  .iconfont {
    margin-right: 10px;
  }
  
  .toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  </style>
  