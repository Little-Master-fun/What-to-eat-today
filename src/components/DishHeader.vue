<script setup>
import { onMounted, ref } from "vue";
import http from "@/utils/http";

const canteenId = ref(1)
const src =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
const dialogFormVisible = ref(false);
const allCanteen = ref('')
const canteenName = ref('')


async function getDish() {
  const res = http.get('/dish/'+canteenId.value+'/all')
  console.log((await res).data);
}
async function getCanteen() {
  const res = http.get('/canteen/' + canteenId.value)
  canteenName.value = (await res).data.name
  
}
async function changeCanteenButton(){
  allCanteen.value = (await http.get('/canteen/all')).data
  dialogFormVisible.value = true 
}
async function changeCanteen(id) {
  canteenId.value = id;
  dialogFormVisible.value = false
  getDish()
  getCanteen()
}

onMounted(() => {
  getDish()
  getCanteen()
})
</script>

<template>
  <div class="contain">
    <el-row justify="center" style="">
      <el-col :span="24">
        <div>
          <el-image :src="src" class="img" />
        </div>
      </el-col>
    </el-row>
    <el-row style="height: 8vh" justify="space-between">
      <el-col :span="10">
        <el-text size="large" class="text">{{ canteenName }}食堂</el-text>
      </el-col>
      <el-col :span="10">
        <el-button class="changeButton" round @click="changeCanteenButton()"
          ><el-text size="small" style="color: black"
            ><strong>更换食堂</strong></el-text
          ></el-button
        >
      </el-col>
    </el-row>
  </div>
  <el-dialog v-model="dialogFormVisible" title="更换食堂" width="80vw">
    <div class="iconBox">
      <div class="icon-test" v-for="canteen in allCanteen" @click="changeCanteen(canteen.id)">
        <img src="../components/icon/🦆 icon _star_.png" alt="star" />
        <p>{{ canteen.name }}</p>
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
  font-weight: 600;
  font-size: 20px;
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
