<script setup>
import { onMounted, ref } from "vue";
import http from "@/utils/http";

const props = defineProps({
  floors : Number,
  canteen: String
})
const floors = ref([])
const allFloor = ['一楼','二楼','三楼','四楼']

console.log(props.floors);
function getFloor() {
  for (let i = 0; i < props.floors; i++) {
    floors.value.push({floors: props.canteen + allFloor[i],
      id: i + 1
    })
  }
  console.log(floors.value);
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
      v-for="item in floors"
      :key="item.id"
      :index="item.id.toString()"
      >{{ item.floors }}</el-menu-item
    >
  </el-menu>
</template>

<style scoped>
</style>
