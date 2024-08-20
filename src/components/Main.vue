<template>
    <div class="container">
        <Swiper></Swiper>
        <div class="selectedDishes" @click="">
            <el-card style="background: linear-gradient(to bottom, rgba(255, 219, 74, 1), #fff); border-radius: 10px;">
                <el-row>
                <el-col :span="9" style="display: grid; place-items: center;margin-right: 10px;">
                    <el-image style="border-radius: 5px; padding-right: 5px;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
                </el-col>
                <el-col :span="15" style="margin-left: 10px;">
                     <el-row>
                        <el-text style="color: black; margin-left: 2vw;" size="large" ><strong>随机选菜</strong></el-text>
                     </el-row>
                     <el-row>
                        <el-text size="small" style="margin-top: 2vh;">不知道吃什么，我们来帮你选</el-text>
                     </el-row>
                </el-col>
                </el-row>
            </el-card>
            <el-card class="canteen">
                <h1>食堂上新</h1>
            </el-card>
        </div>
    </div>

</template>

<script setup>
import Swiper from './Swiper.vue';


</script>

<style scoped>

.container{
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    padding: 0%;
}
.selectedDishes{
    width: 100%;
    height: 13vh;
    margin-top: 2vh;
    border-radius: 20px;
}
.canteen{
    height: 45vh;
    margin-top: 2vh;
    border-radius: 15px;
}
</style>