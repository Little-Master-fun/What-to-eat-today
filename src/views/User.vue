<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
    <div class="userBox">
        <el-row justify="center" :gutter="12">
            <el-col :span="9">
                <div class="block">
                    <el-avatar :size="100" :src="circleUrl" />
                </div>
            </el-col>
            <el-col :span="15">
                <div class="userName">
                        <el-text style="font-size: 24px;margin-top: 10px;"><strong>你的名字</strong></el-text>
                        <el-text style="font-size: 16px;">一花一世界，一叶一菩提</el-text>
                </div>
            </el-col>
        </el-row>
        <el-card class="iconBox">
            <div style="display: flex;" @click="router.push('/collection')">
                <div class="icon-test">
                    <img src="../components/icon/🦆 icon _star_.png" alt="star">
                    <p>收藏</p>
                </div>
                <div class="icon-test">
                    <img src="../components/icon/🦆 icon _edit one_.png" alt="edit">
                    <p>反馈</p>
                </div>
            </div>
        </el-card>
    </div>

</template>


<style scoped>
.block{
    align-items: center;
    text-align: right;
}
.userBox{
    position: absolute;
    top: 10vh;
    width: 100vw;

}
.el-row{
    width: 100vw;
    margin-bottom: 10px;
    
}
.userName{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.iconBox{
    width: 92.3vw;
    margin: 4.7vh auto;
    border-radius: 20px;
}
.icon-test {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
}
</style>

