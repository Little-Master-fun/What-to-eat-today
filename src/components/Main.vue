<script setup>
import Swiper from "./Swiper.vue";
import { useRouter } from "vue-router";
import DishCard from "./DishCard.vue";
import http from "@/utils/http";
import { onMounted, ref} from "vue";
import { HomeFilled} from '@element-plus/icons-vue'

const count = ref(0)
const router = useRouter();
const dialogFormVisible = ref(false)

async function getNewdish() {
  const res = await http.get('/new/0')
  console.log(res);
}
const handleClick = () => {
  dialogFormVisible.value = true
}
const load = () => {
  count.value += 2
}

onMounted(() => {
    getNewdish()
})

</script>



<template>
  <div class="container">
    <el-button 
    class="changeCateen"
    :icon="HomeFilled"
    circle
    @click="handleClick()"
    ></el-button>
    <Swiper></Swiper>
    <div>
      <el-card
        :body-style="{ padding: '1.8vh 0px 0px 4.1vw' }"
        class="selectedDishes"
        @click="router.push('/randomDish')"
      >
        <el-row>
          <el-col :span="9" style="display: grid; place-items: center">
            <el-image
              style="width: 31.8vw; border-radius: 5px; height: 8.6vh"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
          </el-col>
          <el-col :span="15" style="">
            <el-row>
              <el-text style="color: black; margin-left: 6.7vw" size="large"
                ><strong>随机选菜</strong></el-text
              >
            </el-row>
            <el-row>
              <el-text size="small" style="margin-top: 2vh; margin-left: 4.9vw"
                >不知道吃什么，我们来帮你选</el-text
              >
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="canteen">
        <h1>食堂上新</h1>
        <ul 
        v-infinite-scroll="load" 
        class="infinite-list" 
        style="overflow: auto"
        :infinite-scroll-disabled="disabled"
        >
          <li v-for="i in 10" :key="i" class="infinite-list-item">
            <DishCard dish-name="黄焖鸡" dish-location="欣园二楼" dish-price="12" :dish-id="1"></DishCard>
          </li>
        </ul>
      </el-card>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" title="更换食堂" width="80vw">
    <div class="iconBox">
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>食堂1</p>
      </div>
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>食堂</p>
      </div>
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>食堂</p>
      </div>
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>收藏</p>
      </div>
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>收藏</p>
      </div>
      <div class="icon-test">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>收藏</p>
      </div>
    </div>
  </el-dialog>

</template>

<style scoped>
.changeCateen{
  position: absolute;
  right: 20px;
  top: 46vh;
  color: rgb(255, 255, 255);
  background-color: #ffe062;
  border: none;
}
.infinite-list {
  height: 35.5vh;
  overflow: hidden;
}
.container {
  background-color: rgba(0, 0, 0, 0);
  height: 100%;
  width: 100%;
  padding: 0%;
}
.selectedDishes {
  margin-top: 2vh;
  border-radius: 20px;
  height: 12.2vh;
  width: 92.3vw;
  background: linear-gradient(to bottom, rgba(255, 219, 74, 1), #fff);
  border-radius: 10px;
  margin-left: 1.5vw;
}
.canteen {
  max-height: 44vh;
  margin-top: 2vh;
  border-radius: 15px;
  overflow: hidden;
}
.el-card {
  padding: 0px;
  box-shadow: none;
  border: none;
}
.icon-test {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  margin-right: 3%;
  margin-bottom: 4vh;
}
.iconBox {
  flex-wrap: wrap;
  display: flex;
}

</style>
