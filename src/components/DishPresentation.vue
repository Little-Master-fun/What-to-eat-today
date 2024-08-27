<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { numberToChineseCharacter } from 'pixiu-number-toolkit';

const emit = defineEmits(['changeWindow'])
const props = defineProps({
    window: Object,
    canteen: Number,
    floor: Number,
    dishes: Object
})
console.log(props.window);
console.log(props.dishes);


const router = useRouter()
const windows = ref([])
const dish = 50



// function getWindow() {
//   for (let i = 0; i < props.window; i++) {
//     windows.value.push({window: numberToChineseCharacter(i+1) + '号窗口',
//       id: String(i + 1)
//     })
//   }
//   console.log(windows.value);
  
// }
function handleSelect(i) {
    emit('changeWindow', i)
}

onMounted(() => {
    emit('changeWindow')
})
</script>

<template>
     <div class="layout">
        <el-container style="height: 100%;">
        <el-aside width="22vw">
            <el-menu
                default-active="1"
                class="el-menu-demo"
            >
                <el-menu-item :index="item.id" v-for="item in props.window" :key="item.id" @click="handleSelect(item.id)">
                    <el-text size="small">{{item.window}}</el-text>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-card class="dishCard"
            :body-style="{padding:'10px 0px 10px 10px'}"
            v-for="i in props.dishes"
            >
                <el-row>
                <el-col :span="9" style="display: grid; place-items: center;">
                    <el-image style="border-radius: 5px; margin-right: 10px;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
                </el-col>
                <el-col :span="15" justify="space-between">
                     <el-row >
                        <el-text style="color: black;" size="large"><strong>{{ i.name }}</strong></el-text>
                     </el-row>
                     <el-row style="margin-top: 3vh;" justify="space-between">
                        <el-col :span="6"><el-text size="small">{{ i.price }} 元</el-text></el-col>
                        <el-col :span="12">
                            <el-button class="detailButton" round @click="router.push('detail')"><el-text size="small" style="color: black;">详细信息</el-text></el-button>
                        </el-col>
                     </el-row>
                </el-col>
                </el-row>
            </el-card>

        </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.layout{
    height: 44.5vh;
}
.el-menu-item {
  text-align: center;
  display: flex;
}
.el-menu {
  overflow: hidden !important; 
  border-right: none;
}
.el-card{
    padding: 0px;
    margin: 0px;
    box-shadow: none;
    border: none;
}
.el-main{
    margin: 0px;
    padding: 0px;
}
.detailButton{
    color: rgb(0, 0, 0);
    background-color: #FFE062;
    margin-right: 20px;
    height: 25px;
    border: none;
    display: flex;
    text-align: center;
    justify-content: center;
}
.el-card {
  padding: 10px;  /* 您可以将 20px 替换为您想要的具体值，如 10px、30px 等  */
}
.dishCard{
    padding-right: 0px !important;
    padding: 0px !important;
}
.el-menu-item{
    background-color: #F5F5F5;
}
.el-menu-item.is-active {
  background-color: #ffffff;  /* 将 #007BFF 替换为您想要的背景颜色值 */
}
.el-aside::-webkit-scrollbar {
  display: none; /* 针对Webkit浏览器 */
}
 
.el-aside {
  -ms-overflow-style: none;  /* 针对IE、Edge浏览器 */
  scrollbar-width: none;  /* 针对Firefox浏览器 */
}
</style>