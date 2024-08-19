<script>
import { RouterView } from 'vue-router';
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"

export default {
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<template>
  <div class="common-layout">
    <RouterView></RouterView>
    <el-container>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout{
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-color: #FFDB4A; */
  background: linear-gradient(to bottom, #FFE062, #F5F5F5);
}
.el-footer{
  height: 8vh;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0%;
  position: absolute;
  bottom: 0px;
}

</style>