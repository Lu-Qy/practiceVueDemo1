<template>
  <div class="Home">
    <Header></Header>
    <el-container class='content'>
      <Menu></Menu>
      <el-main>
        <div>主要内容区</div>
        <Footer></Footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
import Menu from './common/Menu'
export default {
  name: 'Home',
  components: {
    Header: Header,
    Footer: Footer,
    Menu: Menu
  },
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'scss'>
</style>
