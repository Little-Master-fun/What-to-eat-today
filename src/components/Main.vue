<template>
    <div class="container">
        <Swiper></Swiper>
        <div class="selectedDishes">
            <el-card style="background: linear-gradient(to bottom, rgba(255, 219, 74, 1), #fff); border-radius: 10px;">
                <el-row>
                <el-col :span="6">
                </el-col>
                <el-col :span="18">
                     <el-row>
                        <el-text style="color: black;" size="large"><strong>随机选菜</strong></el-text>
                     </el-row>
                     <el-row>
                        <el-text size="small">不知道吃什么，我们来帮你选</el-text>
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
    min-height: 36vh;
    margin-top: 2vh;
    border-radius: 15px;
}
</style>