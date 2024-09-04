<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import http from "@/utils/http";
import "animate.css";

const route = useRoute();
const randomdish = ref({
  name: '随机选菜',
  id: 1
})
const router = useRouter()
const canteenId = route.params.canteenid;
const isRandomizing = ref(false);
const intervalId = ref(null);
const intervalDish1 = ref(null);
const intervalDish2 = ref(null);
const intervalDish3 = ref(null);
const intervalDish4 = ref(null);
const dishes = ref([]);

async function getallDish() {
  const res = http.get("/dish/" + canteenId + "/all");
  for (let i of (await res).data) {
    dishes.value.push({ name: i.name, id: i.id });
  }
}
const randomDish = () => {
  const randomIndex = Math.floor(Math.random() * dishes.value.length);
  randomdish.value = dishes.value[randomIndex]

};

const getRandomDish = () => {
  const randomIndex = Math.floor(Math.random() * dishes.value.length);
  const dish = dishes.value[randomIndex].name
  return (dish)
}

const randomFontSize = () => {
  return Math.random() * 30 + 10;
};

const toggleRandom = () => {
  if (isRandomizing.value) {
    isRandomizing.value = false;
    clearInterval(intervalId.value);
    clearInterval(intervalDish1.value);
    clearInterval(intervalDish2.value);
    clearInterval(intervalDish3.value);
    clearInterval(intervalDish4.value);
    intervalId.value = null;
    intervalDish1.value = null;
    intervalDish2.value = null;
    intervalDish3.value = null;
    intervalDish4.value = null;
  } else {
    isRandomizing.value = true;
    intervalId.value = setInterval(randomDish, 50);
    intervalDish1.value = setInterval(randomBackground, 500);
    intervalDish2.value = setInterval(randomBackground, 500);
    intervalDish3.value = setInterval(randomBackground, 500);
    intervalDish4.value = setInterval(randomBackground, 500);
  }
};

const randomBackground = () => {
  const container = document.querySelector(".common-layout");
  const containerRect = container.getBoundingClientRect();

  const x = Math.random() * (containerRect.width - 50);
  const y = Math.random() * (containerRect.height - 50);

  const dish = document.createElement("div");
  dish.classList.add("dishBackground", "animate__animated", "animate__fadeIn");
  dish.addEventListener("animationend", function () {
    dish.classList.add("animate__fadeOut");
  });

  const fontSize = randomFontSize();

  dish.innerHTML = getRandomDish();

  dish.style.left = x + "px";
  dish.style.top = y + "px";
  dish.style.position = "absolute";
  dish.style.zIndex = "0";
  dish.style.fontSize = fontSize + "px";

  document.querySelector(".backgroundBox").appendChild(dish);

  setTimeout(() => {
    dish.remove();
  }, 3000);
};

onMounted(() => {
  getallDish();
});
</script>

<template>
  <div class="backgroundBox">
    <div class="randomBox">
      <el-text style="
          font-size: 40px;
          font-weight: 600;
          color: #ff9900;
          position: relative;
          z-index: 2;
        " @click="router.push('/detail/' + randomdish.id)">{{ randomdish.name }}</el-text>
      <el-button @click="toggleRandom(), getRandomDish()" round class="starButton">{{
        isRandomizing ? "停止选菜" : "开始选菜"
      }}</el-button>
    </div>
  </div>
</template>

<style scoped>
.randomBox {
  width: 300px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.el-button {
  display: block;
  z-index: 2;
}

.dishBackground {
  position: absolute !important;
}

.backgroundBox {
  width: 100vw;
  height: 90vh;
}

.starButton {
  background-color: #ffdb4a;
  position: relative;
  z-index: 2;
}

.starButton:hover,
.starButton:focus {
  background-color: #ffdb4a;
  color: initial;
}
</style>
