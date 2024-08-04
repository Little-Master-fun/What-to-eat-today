<script>

</script>

<template>
    <div class="userBox">
        <el-row justify="center" :gutter="120">
            <el-col :span="9">
                <div class="block">
                    <el-avatar :size="100" :src="circleUrl" />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="userName">
                    <el-row>
                        <el-text size="large"><strong>你的名字</strong></el-text>
                    </el-row>
                    <el-row>
                        <el-text>一花一世界，一叶一菩提</el-text>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>

</template>


<style scoped>
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
    display: flexbox;
}
</style>

