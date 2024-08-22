<template>
  <div class="container">
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
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Swiper from "./Swiper.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
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
  min-height: 44vh;
  margin-top: 2vh;
  border-radius: 15px;
}
.el-card {
  padding: 0px;
  box-shadow: none;
  border: none;
}
</style>
