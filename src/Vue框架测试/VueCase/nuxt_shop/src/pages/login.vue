<template>
    <div class="login_container">
                欢迎来到登录页
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" :prefix-icon="ElIconUserFilled">
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" :prefix-icon="ElIconLock" type="password"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <div class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
  
<script>
  // import sessionStore from '~/model/sessionStore'
  export default {
    data() {
      return {
        // 这是登录表单的数据绑定对象
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        // 这是表单的验证规则对象
        loginFormRules: {
          // 验证用户名是否合法
          username: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          // 验证密码是否合法
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 点击重置按钮，重置登录表单
      resetLoginForm() {
        console.log(this);
        // console.log('点击了登录页的重置按钮～',sessionStore.localToken,'--',sessionStore.sessionToken,sessionStore.localToken)
        this.$refs.loginFormRef.resetFields()

        let resp;
          try {
            resp = this.$axios.post('api/loginreset', this.loginForm)
            console.log('重置resp的返回是：',resp.data)
          } catch (error) {
            resp = error
          }

      },
      login() {
        console.log('点击了登录页的登录按钮～')
        //这里的validate验证是的loginFormRef的rules属性绑定的loginFormRules规则。
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid){
            console.log('验证不通过')
            return
          } 
          console.log('格式验证通过了')

          let resp;
          try {
            resp = await this.$axios.post('api/login', this.loginForm)
            console.log('resp的返回是：',resp.data)
          } catch (error) {
            resp = error
          }

           
          // console.log('longin vue的响应：',resp)
          // console.log('this是什么？',this)
          if (resp == 'unknown'  ||resp.status !== 200) {
            console.log('登录失败',resp.data.message)
            return this.$message.error('登录失败！',resp.data.message)
          }else{
            if(resp.data.isAuthed === true) {
                console.log('登录成功',resp.data.message)
                //   1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
                //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
                //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
                
                window.sessionStorage.setItem('token', resp.data.token)
                console.log('window.sessionStorage对象：',window.sessionStorage)
                // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                this.$message.success(`${resp.data.message}, 登录成功了！`)
                this.$router.push('/home')
            }else{
                console.log('登录不成功',resp.data.message)
                this.$message.error(`${resp.data.message}, 登录失败！`)
            }
          }
         
        
          
        })  
      }
    }
  }
  </script>
  

  <style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }
  
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);   //相对于已经定位好了的位置进行偏移
  
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .btns {
    display: flex;
    justify-content: flex-end;
    padding: 0 0 10px 0;
  }
  </style>
  