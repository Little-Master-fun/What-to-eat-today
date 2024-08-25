<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import StarRating from "vue-star-rating";
import { ArrowLeft } from "@element-plus/icons-vue";
import CommitCard from "@/components/CommitCard.vue";
import router from "@/router";


const route = useRoute()
const dishId = route.params.dishid
console.log(dishId);

const Imgsrc = ref(
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
);
const rating = ref(2.5);

const load = () => {
  count.value += 2;
};
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
        <div>
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
