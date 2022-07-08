<template>
  <div class="Login">
    <el-card class="box-card">
      <div slot="header" class='clearfix'>
        <span>后台管理系统</span>
      </div>
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item label="用户名" prop="username" :rules="[
          {required: true, message: '请输入用户名',trigger: 'blur'},
          {
            min: 4,
            max: 10,
            message:'长度在4-10字符之间',
            trigger: 'blur'
          }
        ]">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[
          {required: true, message: '请输入密码',trigger: 'blur'},
          {
            min: 6,
            max: 12,
            message:'长度在6-12字符之间',
            trigger: 'blur'
          }
        ]">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$router.push('/Home')
        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'scss'>
.Login{
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(244,167,185,0.2);
  .box-card{
    width: 450px;
    margin: 200px auto;
    .clearfix {
      font-size: 30px;
    }
    .el-button{
      width: 100%;
    }
  }
}
</style>
