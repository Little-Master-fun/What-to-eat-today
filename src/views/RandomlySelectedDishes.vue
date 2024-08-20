<script setup>
import { ref } from 'vue';
import 'animate.css';


const dishName = ref('随机选菜');
const isRandomizing = ref(false);
const intervalId = ref(null)
const intervalDish1 = ref(null)
const intervalDish2 = ref(null)
const intervalDish3 = ref(null)
const intervalDish4 = ref(null)
const dishes = Array.from({ length: 10000 }, (_, index) => index + 1);

const randomStudent = () => {
    const randomIndex = Math.floor(Math.random() * dishes.length);
    dishName.value = dishes[randomIndex];
    const Dish = dishes[randomIndex]
    return{ Dish }
};

const randomFontSize = () => {
          return Math.random() * 30 + 10;  // 生成 10 到 40 之间的随机字体大小
        };

const toggleRandom = () => {
    if (isRandomizing.value) {
        isRandomizing.value = false;
        clearInterval(intervalId.value);
        clearInterval(intervalDish1.value)
        clearInterval(intervalDish2.value)
        clearInterval(intervalDish3.value)
        clearInterval(intervalDish4.value)
        intervalId.value = null
        intervalDish1.value = null
        intervalDish2.value = null
        intervalDish3.value = null
        intervalDish4.value = null
        } else {
        isRandomizing.value = true;
        intervalId.value = setInterval(randomStudent, 50);
        intervalDish1.value = setInterval(randomBackground, 500)
        intervalDish2.value = setInterval(randomBackground, 500)
        intervalDish3.value = setInterval(randomBackground, 500)
        intervalDish4.value = setInterval(randomBackground, 500)
        }
};

const randomBackground = () => {
    const container = document.querySelector('.common-layout');
    const containerRect = container.getBoundingClientRect();

    const x = Math.random() * (containerRect.width - 50); 
    const y = Math.random() * (containerRect.height - 50); 

    const dish = document.createElement('div');
    dish.classList.add('dishBackground','animate__animated','animate__fadeIn');
    dish.addEventListener('animationend', function() {
    // 动画结束后的操作
    dish.classList.add('animate__fadeOut')
  });

    const fontSize = randomFontSize();
    const interDish = randomStudent();

    dish.innerHTML = 'sada';

    dish.style.left = x + 'px';
    dish.style.top = y + 'px';
    dish.style.position = 'absolute'
    dish.style.zIndex = '0'
    dish.style.fontSize = fontSize + 'px';


    document.querySelector('.backgroundBox').appendChild(dish);

    setTimeout(() => {
        dish.remove()
    }, 3000);
}

</script>

<template>
  <div class="backgroundBox">
    <div class="randomBox">
        <el-text style="font-size: 40px; color: #ff9900; position: relative; z-index: 2;">{{ dishName }}</el-text>
        <el-button @click="toggleRandom" round style="background-color: #FFDB4A; position: relative; z-index: 2;">{{ isRandomizing? '停止选菜' : '开始选菜'}}</el-button>
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
.el-button{
    display: block;
    z-index: 2;
}
.dishBackground{
    position: absolute !important;
}
.backgroundBox{
  width: 100vw;
  height: 90vh;
}
</style>


