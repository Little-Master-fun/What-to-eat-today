<script setup>
import { ref } from 'vue';

const activeIndex = ref('1')
const Floor = [
    { id: 1, name: '欣园一楼', path: '/'},
    { id: 2, name: '欣园二楼', path: '/'},
    { id: 3, name: '欣园三楼', path: '/'},
    { id: 3, name: '欣园三楼', path: '/'},
  ];

</script>
<template>
 <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="#FFE062"
  >
    <el-menu-item v-for="item in Floor" :key="item.id" :index="item.id">{{item.name}}</el-menu-item>
  </el-menu>

</template>

<style scoped>
</style>