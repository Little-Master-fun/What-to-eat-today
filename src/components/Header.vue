<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { Location } from '@element-plus/icons-vue';
import { ref } from 'vue';


const router = useRouter()
const route = useRoute()
const searchData = ref('')
const props = defineProps({
    canteenId: Number
})


</script>
<template>
    <div class="header">
        <el-row style="height: 3.8vh; padding-bottom: 1.3vh;">
            <el-col :span="24" style="padding-left: 5vw;">
                <el-icon style="font-size: 2.3vh;">
                    <Location />
                </el-icon>
                <el-text class="mx-1" size="small">山东大学（中心校区）</el-text>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="padding-left: 5vw;">
                <div style="display: flex;" class="searchBox">
                    <input v-model="searchData" type="text"
                        style="border-radius: 0px; width: 92.3vw;height: 4.5vh; margin-left: 15px; margin-right: 15px;" />
                    <div class="searchButton" @click="router.push('/search/' + props.canteenId + '/' + searchData)">
                        <el-text size="small" style="color: black;">搜索</el-text>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<style scoped>
input:focus {
    outline: none;
}

.header {
    width: 100%;
    height: 100%;
    margin: 0%;
    background-color: rgba(0, 0, 0, 0);
}

.grid-content {
    background-color: aliceblue;
}

.el-row {
    height: 20%;
    width: 100%;
    padding-bottom: 5vh;
}

.searchBox {
    border-radius: 20px;
    width: 90vw;
    background-color: #fff;
    position: relative;
}

.searchButton {
    display: flex;
    width: 14.4vw;
    height: 3.8vh;
    text-align: center;
    justify-content: center;
    background-color: #FFE062;
    border-radius: 20px;
    position: absolute;
    top: 2px;
    right: 2px;
}
</style>