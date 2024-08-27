<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import http from '@/utils/http';

const dishlocation = ref('')
const router = useRouter()
const props = defineProps({
  dish : Object,
})
const Fooler = ['一层','二层','三层','四层']

async function dishLocation() {
  const res = http.get('/canteen/all')
  console.log((await res).data);
  const canteen = (await res).data
  const dishFloor = Fooler[props.dish.floor]
  const dishCanteen = canteen[props.dish.canteen - 1].name  
  dishlocation.value = dishCanteen + dishFloor
}

onMounted(() => {
  dishLocation()
})
</script>

<template>
        <el-card
      class="dishCard"
      :body-style="{ padding: '10px 10px 10px 10px' }"
      
    >
      <el-row>
        <el-col :span="9" style="display: grid; place-items: center">
          <el-image
            style="border-radius: 10px; margin-right: 10px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </el-col>
        <el-col :span="15" justify="space-between">
          <el-row justify="space-between">
            <el-col :span="9"
              ><el-text style="font-size: 16px; color: black"
                >{{ props.dish.name }}</el-text
              ></el-col
            >
            <el-col :span="10">
              <el-text style="font-size: 15px; margin-right: 25px; color: black"
                >{{ props.dish.price }}元</el-text
              >
            </el-col>
          </el-row>
          <el-row style="margin-top: 3vh" justify="space-between">
            <el-col :span="9"
              ><el-text style="font-size: 16px">{{ dishlocation }}</el-text></el-col
            >
            <el-col :span="11">
              <el-button
                class="detailButton"
                round
                @click="router.push('/detail')"
                ><el-text style="color: black; font-size: 14px"
                  >详细信息</el-text
                ></el-button
              >
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