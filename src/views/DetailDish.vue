<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import http from "@/utils/http";
import StarRating from "vue-star-rating";
import { ArrowLeft } from "@element-plus/icons-vue";
import CommitCard from "@/components/CommitCard.vue";
import router from "@/router";

const allCanteen = ref({})
const route = useRoute()
const dishId = route.params.dishid
const dishName = ref('')
const dishPrice = ref('')
const dishlocation = ref('')
const rating = ref(2.5);
const Imgsrc = ref(
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
);
const Fooler = ['一层','二层','三层','四层']


async function dishLocation(i) {
  const res = http.get('/canteen/all')
  allCanteen.value = (await res).data
  dishPrice.value = i.price
  const dishFloor = Fooler[i.floor]  
  dishlocation.value = allCanteen.value[i.canteen].name + dishFloor +i.window + '号窗口'
}


async function getDetailDish() {
  const res = http.get('/dish/' + dishId)
  rating.value = (await res).data.average_vote
  dishName.value = (await res).data.name
  dishLocation((await res).data)
}


const load = () => {
  count.value += 2;
};

onMounted(() => {
  getDetailDish()
})
</script>

<template>
  <div class="headerImg">
    <el-icon size="30" class="backButton" @click="router.go(-1)"
      ><ArrowLeft
    /></el-icon>
    <el-image :src="Imgsrc" style="height: 30.8vh; width: 100vw" />
  </div>
  <div>
    <el-card class="dishDetial" :body-style="{ padding: '0px 0px 0px 0px' }">
      <el-card class="starBox">
        <div style="display: flex;">
          <div style="flex: 1;display: flex;flex-direction: column;text-align: left;">
            <div style="margin-bottom: 5px;">
              <el-text style="font-size: 30px;font-weight: 600;color: black;">{{ dishName }}</el-text>
            </div>
            <div style="margin-bottom: 5px;">
              <el-text style="font-size: 17px;font-weight: 600;">{{ dishPrice }}元</el-text>
            </div>
            <div>
              <el-text style="">{{ dishlocation }}</el-text>
            </div>
        </div>
        <div style="flex: 1;">
          <star-rating
            :rating="rating"
            :increment="0.5"
            :star-size="30"
            active-color="#FEDE00"
            :read-only="true"
            :show-rating="false"
            :rtl="true"
          ></star-rating>
          <el-text class="point">{{ rating }}</el-text>
        </div>

        </div>
      </el-card>
      <el-card class="commitBox">
        <template #header>
          <el-text style="color: black; font-size: medium">评论</el-text>
        </template>
        <div>
          <ul
            v-infinite-scroll="load"
            class="infinite-list"
            style="overflow: auto"
          >
            <li v-for="i in 10" :key="i" class="infinite-list-item">
              <CommitCard></CommitCard>
            </li>
          </ul>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style scoped>
.infinite-list {
  height: 35.5vh;
  overflow: hidden;
}

.commitBox {
  margin-top: 1vh;
  min-height: 43vh;
}
.starBox {
  width: 100vw;
  height: 20vh;
  border-radius: 10px 10px 0px 0px;
}
.dishDetial {
  position: absolute;
  top: 29vh;
  width: 100vw;
  height: 63.9vh;
  border-radius: 10px 10px 0px 0px;
}
.point {
  position: absolute;
  right: 7vw;
  font-size: 50px;
  font-weight: 600;
  color: #fede00;
}
.backButton {
  position: absolute;
  z-index: 1;
  left: 1vw;
  top: 1vh;
}
</style>
