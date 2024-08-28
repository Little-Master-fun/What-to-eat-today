<script setup>
import Header from "../components/Header.vue";
import Main from "@/components/Main.vue";
import { onMounted, ref } from "vue";
import { HomeFilled } from "@element-plus/icons-vue";
import http from "@/utils/http";

const dialogFormVisible = ref(false);
const canteenId = ref(1)
const newDish = ref([])
const allCanteen = ref([])
const carousel = ref([])


async function getCarousel() {
  const res = http.get('/carousel/' + canteenId.value)
  carousel.value = (await res).data
}
async function getNewdish() {
  const res = http.get('/new/' + canteenId.value)
  newDish.value = (await res).data
}
async function getCanteen() {
  const res = http.get('/canteen/all')
  allCanteen.value = (await res).data
}
const handleClick = () => {
  dialogFormVisible.value = true;
};
const changeCanteen = (i) => {
  dialogFormVisible.value = false
  canteenId.value = i
  getNewdish()
  getCarousel()
}



onMounted(() => {
  getNewdish(),
    getCanteen(),
    getCarousel()
})
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <Header :canteenId='canteenId'></Header>
      </el-header>
      <el-main>
        <el-button class="changeCateen" :icon="HomeFilled" circle @click="handleClick()"></el-button>
        <Main :new-dish=newDish :all-canteen=allCanteen :canteenId=canteenId :carousel="carousel"></Main>
        <el-dialog v-model="dialogFormVisible" title="更换食堂" width="80vw">
          <div class="iconBox">
            <div class="icon-test" v-for="i in allCanteen" :key="i.id" @click="changeCanteen(i.id)">
              <el-image :src="i.icon" alt="star" />
              <p>{{ i.name }}</p>
            </div>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.iconBox {
  flex-wrap: wrap;
  display: flex;
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

.changeCateen {
  position: absolute;
  right: 20px;
  top: 46vh;
  color: rgb(255, 255, 255);
  background-color: #ffe062;
  border: none;
}

.el-header {
  height: 10vh;
  width: 100%;
  padding: 0%;
  background-color: #ffdb4a;
}

.el-main {
  height: 82.9vh;
  background-color: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  -ms-overflow-style: none;
  /* 针对IE、Edge浏览器 */
  scrollbar-width: none;
  /* 针对Firefox浏览器 */
}

.el-main::-webkit-scrollbar {
  display: none;
  /* 针对Webkit浏览器 */
}
</style>
