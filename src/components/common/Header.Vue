<template>
  <div class="header">
    <el-header>
        <div class="title">后台管理系统</div>
        <div class="content">name</div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'scss'>
.header {
    .el-header{
        background-color: rgba(244,167,185,0.2);
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width: 200px;
            font-size: 24px;
            color: #64363C;
        }
        .content {
            // width: 200px;
            font-size: 24px;
            color: #64363C;
            position: relative;
        }
    }
}
</style>
