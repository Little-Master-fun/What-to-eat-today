<script setup>
import DishHeader from "../components/DishHeader.vue";
import DishMenu from "../components/DishMenu.vue";
import DishPresentation from "../components/DishPresentation.vue";
import http from "@/utils/http";


const dish = 50;
</script>

<template>
  <div class="container">
    <div class="header">
      <DishHeader></DishHeader>
    </div>
    <div class="dishMenu">
      <DishMenu></DishMenu>
    </div>
    <div class="dishPresentation">
      <DishPresentation></DishPresentation>
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
</style>
