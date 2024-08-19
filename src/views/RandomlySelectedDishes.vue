<script setup>
import { ref } from 'vue';
import 'animate.css';


const studentName = ref('随机选菜');
const isRandomizing = ref(false);
const intervalId = ref(null)
const intervalDish = ref(null)
const students = Array.from({ length: 10000 }, (_, index) => index + 1);

const randomStudent = () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    studentName.value = students[randomIndex];
    const Dish = students[randomIndex]
    return{ Dish }
};

const randomFontSize = () => {
          return Math.random() * 30 + 10;  // 生成 10 到 40 之间的随机字体大小
        };

const toggleRandom = () => {
    if (isRandomizing.value) {
        isRandomizing.value = false;
        clearInterval(intervalId.value);
        clearInterval(intervalDish.value)
        intervalId.value = null
        intervalDish.value = null
        } else {
        isRandomizing.value = true;
        intervalId.value = setInterval(randomStudent, 50);
        intervalDish.value = setInterval(randomBackground, 1000)
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
    dish.style.fontSize = fontSize + 'px';


    document.querySelector('.common-layout').appendChild(dish);

    setTimeout(() => {
        dish.remove()
    }, 4000);
}

</script>

<template>
    <div class="randomBox">
      <h1 class="animate__animated animate__bounce">651615</h1>
        <h1 >{{ studentName }}</h1>
        <el-button @click="toggleRandom">{{ isRandomizing? '停止选菜' : '开始选菜'}}</el-button>
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
}
.el-button{
    display: block;
}
.dishBackground{
    position: absolute !important;
    z-index: -1;
}
</style>


<!-- <template>
    <div class="container">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
    mounted() {
      this.startAddingRandomText();
    },
    methods: {
      startAddingRandomText() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
  
        const randomPosition = () => {
          const x = Math.random() * (containerRect.width - 50);
          const y = Math.random() * (containerRect.height - 50);
  
          return { x, y };
        };
  
        const randomFontSize = () => {
          return Math.random() * 30 + 10;
        };
  
        const addRandomText = () => {
          const text = document.createElement('div');
          text.classList.add('text');
          text.innerHTML = '随机文字';
  
          const { x, y } = randomPosition();
          const fontSize = randomFontSize();
  
          text.style.left = x + 'px';
          text.style.top = y + 'px';
          text.style.position = 'absolute'
          text.style.fontSize = fontSize + 'px';
  
          container.appendChild(text);
  
          setTimeout(() => {
            text.remove();
          }, 31000);
        };
  
        setInterval(addRandomText, 1000);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    position: relative;
  }
  
  .text {
    position: absolute;
    font-size: 20px;
    z-index: -1;
  }
  </style> -->