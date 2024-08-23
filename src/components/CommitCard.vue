<script setup>
import StarRating from 'vue-star-rating'



</script>

<template>
    <div class="commitCard">
        <el-avatar :size="40" :src="circleUrl" />
        <div class="commit">
            <div>
                <el-text style="text-align: left;">用户名称</el-text>
            </div>
            <div>
                <star-rating :rating="2.5" 
                    :rounded-corners=ture
                    :increment="0.5"
                    :star-size="10"
                    active-color="#FEDE00"
                    :read-only=true
                    :show-rating=false
                    ></star-rating>
            </div>
            <div style="width: 75vw;">
                <el-text style="color: black;">评论内容评论内容评论内容评论内容评论内容评论内容评论内容</el-text>
            </div>
            <div class="commitFooter">
                <el-text style="font-size: 12px; margin-top: 3px;">2024-8-23</el-text>
            </div>
        </div>
    </div>
</template>

<style scoped>
.commitCard{
    width: 100vw;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    margin-bottom: 10px;
}
.commit{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}
.commitFooter{
    display: flex;
    flex-direction: row;
}
</style>