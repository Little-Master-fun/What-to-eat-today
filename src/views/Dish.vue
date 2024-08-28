<script setup>
import DishPresentation from "../components/DishPresentation.vue";
import http from "@/utils/http";
import { onMounted, ref } from "vue";
import { numberToChineseCharacter } from 'pixiu-number-toolkit';

const floors = ref([])
const activeIndex = ref("1");
const canteenId = ref(1)
const src = ref("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg")
const dialogFormVisible = ref(false);
const allCanteen = ref('')
const floorCount = ref('2')
const canteenName = ref('')
const selectFloor = ref(1)
const windowCount = ref(5)
const windows = ref([])
const dishes = ref([])


async function getWindowDish(wdi) {
  if (wdi) {
    const res = http.get('/dish/' + canteenId.value + '/' + selectFloor.value + '/' + wdi)
    dishes.value = (await res).data

  } else {
    const res = http.get('/dish/' + canteenId.value + '/' + selectFloor.value + '/' + 1)
    dishes.value = (await res).data

  }
}
function getFloor() {
  for (let i = 0; i < floorCount.value; i++) {
    floors.value.push({
      floors: canteenName.value + numberToChineseCharacter(i + 1) + '楼',
      id: i + 1
    })
  }
}
async function getWindowCount(i) {
  const res = http.get('/canteen/' + canteenId.value + '/floors')
  windowCount.value = (await res).data[i - 1].count_of_windows
  windows.value = []
  for (let i = 0; i < windowCount.value; i++) {
    windows.value.push({
      window: numberToChineseCharacter(i + 1) + '号窗口',
      id: String(i + 1)
    })
  }

}
function handleSelect(i) {
  selectFloor.value = i
  getWindowCount(i)
}
async function getCanteen() {
  const res = http.get('/canteen/' + canteenId.value)
  canteenName.value = (await res).data.name
  src.value = (await res).data.image
  getFloor()
}
async function changeCanteenButton() {
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
  getCanteen()
  handleSelect(1)
  getWindowDish(1)
})

const dish = 50;
</script>

<template>
  <div class="container">
    <div class="header">
      <!-- <DishHeader></DishHeader> -->
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
            <el-button class="changeButton" round @click="changeCanteenButton()"><el-text size="small"
                style="color: black"><strong>更换食堂</strong></el-text></el-button>
          </el-col>
        </el-row>
      </div>
      <el-dialog v-model="dialogFormVisible" title="更换食堂" width="80vw">
        <div class="iconBox">
          <div class="icon-test" v-for="canteen in allCanteen" @click="changeCanteen(canteen.id)">
            <el-image :src="canteen.icon" alt="star" />
            <p>{{ canteen.name }}</p>
          </div>
        </div>
      </el-dialog>

    </div>
    <div class="dishMenu">
      <!-- <DishMenu :floorCount="floorCount" :canteen="canteenName"></DishMenu> -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        active-text-color="#FFE062">
        <el-menu-item v-for="item in floors" :key="item.id" :index="item.id.toString()"
          @click="handleSelect(item.id)">{{ item.floors }}</el-menu-item>
      </el-menu>
    </div>
    <div class="dishPresentation">
      <DishPresentation :window="windows" :floor="selectFloor" :canteen="canteenId" @changeWindow="getWindowDish"
        :dishes="dishes"></DishPresentation>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  height: 100vh;
  /* width: 100vw; */
}

.header {
  padding-bottom: 1vh;
}

.dishMenu {
  padding-bottom: 1vh;
}

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
