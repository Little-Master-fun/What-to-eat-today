<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import http from '@/utils/http';
import { numberToChineseCharacter } from 'pixiu-number-toolkit';


const dishlocation = ref('')
const dish = ref('')
const router = useRouter()
const props = defineProps({
  dishid: Number,
})


async function getDish(params) {
    const res = http.get('/dish/' + props.dishid)
    dish.value = (await res).data
    dishLocation()
}
async function dishLocation() {
  const res = http.get('/canteen/all')
  console.log((await res).data);
  const canteen = (await res).data
  const dishFloor = numberToChineseCharacter(dish.value.floor) + '层'
  const dishCanteen = canteen[dish.value.canteen - 1].name
  dishlocation.value = dishCanteen + dishFloor
}

onMounted(() => {
  getDish()
})
</script>

<template>
  <el-card class="dishCard" :body-style="{ padding: '10px 10px 10px 10px' }">
    <el-row>
      <el-col :span="9" style="display: grid; place-items: center">
        <el-image style="border-radius: 10px; margin-right: 10px" :src="dish.image" />
      </el-col>
      <el-col :span="15" justify="space-between">
        <el-row justify="space-between">
          <el-col :span="9"><el-text style="font-size: 16px; color: black">{{ dish.name }}</el-text></el-col>
          <el-col :span="10">
            <el-text style="font-size: 15px; margin-right: 25px; color: black">{{ dish.price }}元</el-text>
          </el-col>
        </el-row>
        <el-row style="margin-top: 3vh" justify="space-between">
          <el-col :span="9"><el-text style="font-size: 16px">{{ dishlocation }}</el-text></el-col>
          <el-col :span="11">
            <el-button class="detailButton" round @click="router.push('/detail/' + dish.id)"><el-text
                style="color: black; font-size: 14px">详细信息</el-text></el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>

</template>

<style scoped>
.detailButton {
  color: rgb(0, 0, 0);
  background-color: #ffe062;
  margin-right: 0px;
  height: 25px;
  border: none;
  display: flex;
  text-align: center;
  justify-content: center;
}

.dishCard {
  padding-right: 0px !important;
  padding: 0px !important;
  margin-top: 10px;
  border-radius: 20px;
}
</style>