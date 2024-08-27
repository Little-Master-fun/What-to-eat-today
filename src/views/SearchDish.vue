<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import http from "@/utils/http";
import { onMounted, ref } from "vue";
import DishCard from "@/components/DishCard.vue";


const router = useRouter()
const route = useRoute()
const searchResult = ref([])
const randomResult = ref([])

async function getSearchResult(s) {
  http.get('/dish/search/',null,{
    params: {
      s: '25'
    }
  }).then(res => {
    searchResult.value = res.data
    if (Object.keys(res.data).length < 5) {
      for (let i = 0; i <= 5-Object.keys(res.data).length; i++) {
        http.get('/dish/' + route.params.canteenId + '/random').then(res => {
          randomResult.value.push(res.data)
        })
      }
      console.log(randomResult.value);
      
    }
  }).catch(error => {
    console.log(error);
    
    if (Object.keys(searchResult.value).length < 5) {
      for (let i = 0; i < 5-Object.keys(searchResult.value).length; i++) {
        http.get('/dish/' + route.params.canteenId + '/random').then(res => {
          randomResult.value.push(res.data)
        })
      }
      console.log(randomResult.value);

  }})
}


onMounted(() => {
  getSearchResult(route.params.searchData)
})
</script>

<template>
  <div class="header">
    <el-row>
      <el-col :span="1" @click="router.push('/')">
        <el-icon size="30" class="backButton" ><ArrowLeft /></el-icon>
      </el-col>
      <el-col :span="20" style="padding-left: 5vw">
        <div class="searchBox">
          <input
            type="text"
            style="
              border-radius: 0px;
              width: 90vw;
              height: 4.5vh;
              margin-left: 15px;
              margin-right: 15px;
            "
          />
          <div class="searchButton" @click="router.push('/search')">
            <el-text size="small" style="color: black">搜索</el-text>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-card class="searchResult" :body-style="{ padding: '0px 0px 0px 0px' }">
    <DishCard v-for="i in searchResult" :dish="i"></DishCard>
    <div class="divider">
      <span class="divider-text">符合条件较少，我们为您推荐以下菜品</span>
    </div>
    <DishCard v-for="i in randomResult" :dish="i"></DishCard>
  </el-card>
</template>

<style scoped>
.dividers::before,
.dividers::after {
  background-color: transparent; /* 去除默认的分割线背景 */
}
.dividers.el-divider__text {
  background-color: #835858 !important; /* 设置中间文本的背景颜色，您可以根据需求修改 */
  padding: 0 10px; /* 增加文本的内边距，可根据需要调整 */
}
.header {
  margin: 0%;
  background-color: rgba(0, 0, 0, 0);
  height: 7vh;
  width: 100%;
  padding: 0%;
  background-color: #ffdb4a;
}
.grid-content {
  background-color: aliceblue;
}
.searchBox {
  display: flex;
  border-radius: 20px;
  width: 90vw;
  background-color: #fff;
  position: relative;
  margin-top: 10px;
}
.searchButton {
  display: flex;
  width: 14.4vw;
  height: 4vh;
  text-align: center;
  justify-content: center;
  background-color: #ffe062;
  border-radius: 20px;
  position: absolute;
  top: 2px;
  right: 2px;
}
.backButton {
  position: absolute;
  z-index: 1;
  left: 1vw;
  top: 1.5vh;
}
.searchResult {
  height: 85.9vh;
  box-shadow: none;
  background-color: #f5f5f5;
  overflow: auto;
}
.container {
  background-color: #f5f5f5;
  height: 100vh;
  /* width: 100vw; */
}
.dishMenu {
  padding-bottom: 1vh;
}
.layout {
  height: 45vh;
}
.el-menu-item {
  text-align: center;
  display: flex;
}
.el-menu {
  overflow: hidden !important;
  border-right: none;
}
.el-card {
  padding: 0px;
  margin: 0px;
  box-shadow: none;
  border: none;
}
.el-main {
  margin: 0px;
  padding: 0px;
}
.changeButton {
  color: rgb(0, 0, 0);
  background-color: #ffe062;
  margin-right: 20px;
  height: 25px;
  border: none;
  display: flex;
  text-align: center;
  justify-content: center;
}
.el-card {
  padding: 10px; /* 您可以将 20px 替换为您想要的具体值，如 10px、30px 等  */
}
.dishCard {
  padding-right: 0px !important;
  padding: 0px !important;
  margin-top: 10px;
  border-radius: 20px;
}
.el-menu-item {
  background-color: #f5f5f5;
}
.el-menu-item.is-active {
  background-color: #ffffff; /* 将 #007BFF 替换为您想要的背景颜色值 */
}
.el-aside::-webkit-scrollbar {
  display: none; /* 针对Webkit浏览器 */
}

.el-aside {
  -ms-overflow-style: none; /* 针对IE、Edge浏览器 */
  scrollbar-width: none; /* 针对Firefox浏览器 */
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  position: relative;
  margin: 20px 0;
}

.divider-text {
  position: absolute;
  text-align: center;
  width: 280px;
  top: -10px;
  font-size: 15px;
  background-color: #f5f5f5;
  padding: 0 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
