<script>
import Header from "../components/Header.vue"
import Main from "@/components/Main.vue";

export default {
  components:{
    Header,
    Main
  }
}

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
  height: 15vh;
  width: 100%;
  padding: 0%;
  background-color: #FFDB4A;  

}
.el-main{
  height: 77vh;
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