<script setup>
import { ref } from "vue";

const src =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
const dialogFormVisible = ref(false);
</script>

<template>
  <div class="contain">
    <el-row justify="center" style="">
      <el-col span="24">
        <div>
          <el-image :src="src" class="img" />
        </div>
      </el-col>
    </el-row>
    <el-row style="height: 8vh" justify="space-between">
      <el-col span="10">
        <el-text size="large" class="text"><strong>新远食堂</strong></el-text>
      </el-col>
      <el-col span="10">
        <el-button class="changeButton" round @click="dialogFormVisible = true"
          ><el-text size="small" style="color: black"
            ><strong>更换食堂</strong></el-text
          ></el-button
        >
      </el-col>
    </el-row>
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
.contain {
  height: 38vh;
  width: 100vw;
  background: linear-gradient(to bottom, #ffd93e, #fff);
  padding-top: 4vh;
}
.img {
  border-radius: 20px;
  width: 90vw;
  height: 25vh;
}
.el-row {
  width: 100vw;
}
.text {
  color: black;
  margin-left: 20px;
}
.el-col {
  justify-content: center;
  align-items: center;
  display: flex;
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
