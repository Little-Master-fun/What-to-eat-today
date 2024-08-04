<script setup>

const src =
  'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
</script>

<template>
    <div class="contain">
        <el-row style="height: 5vh;">
            <el-col span="6">
                <el-text style="padding-left: 10px;">9:40</el-text>
            </el-col>
            <el-col></el-col>
        </el-row>
        <el-row justify="center">
            <el-col span="24">
                <div>
                    <el-image :src="src" class="img" />
                </div>
            </el-col>
        </el-row>
        <el-row style="height: 8vh;" justify="space-between">
            <el-col span="10">
                <el-text size="large" class="text"><strong>新远食堂</strong></el-text>
            </el-col>
            <el-col span="10">
                <el-button class="changeButton" round><el-text size="small" style="color: black;"><strong>更换食堂</strong></el-text></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.contain{
    height: 38vh;
    width: 100vw;
    background: linear-gradient(to bottom, #FFD93E, #fff);
}
 .img {
  border-radius: 20px ;
  width: 90vw;
  height: 25vh;
}
.el-row{
    width: 100vw;
}
.text{
    color: black;
    margin-left: 20px;
}
.el-col{
    justify-content: center;
    align-items: center;
    display: flex;
}
.changeButton{
    color: rgb(0, 0, 0);
    background-color: #FFE062;
    margin-right: 20px;
    height: 25px;
    border: none;
    display: flex;
    text-align: center;
    justify-content: center;
}

</style>