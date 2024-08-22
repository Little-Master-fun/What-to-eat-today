<script setup>
import { ref } from 'vue';
import StarRating from 'vue-star-rating'
import { ArrowLeft } from '@element-plus/icons-vue';


const Imgsrc = ref('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg')
const rating = ref(2.5)
</script>

<template>
    <div class="headerImg">
        <el-icon size="30" class="backButton"><ArrowLeft /></el-icon>
        <el-image :src="Imgsrc" style="height: 30.8vh; width: 100vw;"/>
    </div>
    <div>
        <el-card class="dishDetial">
            <div>
                <star-rating :rating="rating" 
                :rounded-corners=ture
                :increment="0.5"
                :star-size="30"
                active-color="#FEDE00"
                :read-only=true
                :show-rating=false
                :rtl=true
                ></star-rating>
                <el-text class="point">{{ rating }}</el-text>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.dishDetial{
    position: absolute;
    top: 29vh;
    width: 100vw;
    height: 63.9vh;
    border-radius: 10px 10px 0px 0px;
}
.point{
    position: absolute;
    right: 7vw;
    font-size: 50px;
    font-weight: 600;
    color: #FEDE00;
}
.backButton{
    position: absolute; 
    z-index: 1; 
    left: 1vw; 
    top: 1vh;
}
</style>