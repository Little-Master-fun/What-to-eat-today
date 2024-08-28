<script setup>
import { onMounted, ref } from 'vue';
import StarRating from 'vue-star-rating'
import http from '@/utils/http';
import { useUserState } from '@/composables/state';
import { ElMessage } from 'element-plus'


const stateUser = useUserState()
const props = defineProps({
    comments: Object
})
const url = ref('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg')
const userName = ref('奥德彪')


function formatDateAndTime(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
async function getCommentUser(params) {
    http.get('/users/users/' + props.comments.user_id, {
        headers: {
            'Authorization': 'Bearer ' + stateUser.value.accesstoken
        }
    }).then(res => {
        userName.value = res.data.username
        url.value = res.data.image
    }).catch(error => {
        ElMessage({
            message: '未登录或登入过期无法查看用户头像和姓名哦╲(｡◕‿◕｡)╱',
            type: 'error',
            plain: true,
            grouping: true,
        })

    })
}

onMounted(() => {
    getCommentUser()
})
</script>

<template>
    <div class="commitCard">
        <el-avatar :size="40" :src="url" />
        <div class="commit">
            <div>
                <el-text style="text-align: left;">{{ userName }}</el-text>
            </div>
            <div>
                <star-rating :rating="props.comments.vote" :rounded-corners="true" :increment="0.5" :star-size="10"
                    active-color="#FEDE00" :read-only="true" :show-rating="false"></star-rating>
            </div>
            <div style="width: 75vw;">
                <el-text style="color: black;">{{ props.comments.content }}</el-text>
            </div>
            <div class="commitFooter">
                <el-text style="font-size: 12px; margin-top: 3px;">{{ formatDateAndTime(props.comments.time)
                    }}</el-text>
            </div>
        </div>
    </div>
</template>

<style scoped>
.commitCard {
    width: 100vw;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    margin-bottom: 10px;
}

.commit {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.commitFooter {
    display: flex;
    flex-direction: row;
}
</style>