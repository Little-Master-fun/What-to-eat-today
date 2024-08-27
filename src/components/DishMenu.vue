<script setup>
import { onMounted, ref } from "vue";
import http from "@/utils/http";

const props = defineProps({
  floor : Number,
  canteen: String
})
const floor = ref([])
const allFloor = ['一楼','二楼','三楼','四楼']

console.log(props.floor);
function getFloor() {
  for (let i = 0; i < props.floor; i++) {
    floor.value.push({floor: props.canteen + allFloor[i],
      id: i + 1
    })
  }
  console.log(floor.value);
}

const activeIndex = ref("1");


function handleSelect(params) {
  
}
onMounted(() => {
  getFloor()
})
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="#FFE062"
  >
    <el-menu-item
      v-for="item in floor"
      :key="item.id"
      :index="item.id.toString()"
      >{{ item.floor }}</el-menu-item
    >
  </el-menu>
</template>

<style scoped>
</style>
