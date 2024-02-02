<script>
import { RouterView } from 'vue-router';
import Header from "./components/Header.vue"
export default {
  components:{
    Header
  }
}
</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-header class="shadow">
        <Header></Header>
        
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

