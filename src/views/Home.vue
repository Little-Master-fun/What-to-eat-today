<script setup>
import Header from "../components/Header.vue"
import Main from "@/components/Main.vue";
import Swiper from "../components/Swiper.vue";
import router from "@/router";
import { RouterLink ,useRouter} from 'vue-router';
import { Location } from '@element-plus/icons-vue';




</script>

<template>
    <div>
      <el-container>
        <el-header >
          <Header></Header>
        </el-header>
        <el-main>
            <Main></Main>
        </el-main>
    </el-container>
    </div>
</template>

<style scoped>
.el-header{
  height: 10vh;
  width: 100%;
  padding: 0%;
  background-color: #FFDB4A;  

}
.el-main{
  height: 82.9vh;
  background-color: #F5F5F5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  -ms-overflow-style: none;  /* 针对IE、Edge浏览器 */
  scrollbar-width: none;  /* 针对Firefox浏览器 */
}
.el-main::-webkit-scrollbar {
  display: none; /* 针对Webkit浏览器 */
}
</style>