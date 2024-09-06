<script setup>
import { useRouter } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import { Delete } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue';
import { stopRefresh } from '@/utils/refresh';
import { useUserState } from '@/composables/state';

const router = useRouter()
const user = localStorage.getItem('state-user')
const userinfo = JSON.parse(user)
const stateUser = useUserState()
const avatar = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')


const Exit = () => {
    ElMessageBox.confirm(
        '你确认要退出登入吗',
        '警告',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '成功退出',
            })
            stateUser.value = {}
            stopRefresh()
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '已取消',
            })
        })
}
</script>

<template>
    <div class="userBox">
        <div v-if="!stateUser.username">
            <el-row justify="center" :gutter="12">
                <el-col :span="9">
                    <div class="block">
                        <el-avatar :size="100" @click="router.push('/login')" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="userName">
                        <el-text style="font-size: 24px;margin-top: 10px;"
                            @click="router.push('/login')"><strong>登入/注册</strong></el-text>
                        <el-text style="font-size: 16px;">一花一世界，一叶一菩提</el-text>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div v-else>
            <el-row justify="center" :gutter="12">
                <el-col :span="9">
                    <div class="block">
                        <el-avatar :size="100" :src="avatar" />
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="userName">
                        <div style="text-align: center;">
                            <el-text
                                style="font-size: 24px;margin-top: 10px;"><strong>{{ stateUser.username }}</strong></el-text>
                            <el-icon style="margin-left: 20px;color: brown;" @click="Exit()">
                                <Delete />
                            </el-icon>
                        </div>
                        <el-text style="font-size: 16px;">一花一世界，一叶一菩提</el-text>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-card class="iconBox">
            <div style="display: flex;">
                <div class="icon-test" @click="router.push('/collection')">
                    <img src="../components/icon/🦆 icon _star_.png" alt="star">
                    <p>收藏</p>
                </div>
                <div class="icon-test" @click="router.push('/feedback')">
                    <img src="../components/icon/🦆 icon _edit one_.png" alt="edit">
                    <p>反馈</p>
                </div>
            </div>
        </el-card>
    </div>

</template>


<style scoped>
.block {
    align-items: center;
    text-align: right;
}

.userBox {
    position: absolute;
    top: 10vh;
    width: 100vw;

}

.el-row {
    width: 100vw;
    margin-bottom: 10px;

}

.userName {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.iconBox {
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
