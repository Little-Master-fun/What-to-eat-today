<script setup>
import router from "@/router";
import DishHeader from "../components/DishHeader.vue";
import DishMenu from "../components/DishMenu.vue";
import DishPresentation from "../components/DishPresentation.vue";

const Window = [
  { id: 1, name: "一号窗口", path: "/" },
  { id: 2, name: "二号窗口", path: "/dish" },
  { id: 3, name: "三号窗口", path: "/user" },
  { id: 4, name: "四号窗口", path: "/user" },
  { id: 5, name: "五号窗口", path: "/user" },
  { id: 6, name: "六号窗口", path: "/user" },
  { id: 7, name: "七号窗口", path: "/user" },
  { id: 8, name: "八号窗口", path: "/user" },
];

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
