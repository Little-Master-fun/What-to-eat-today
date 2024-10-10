<script setup>
import { useRouter } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import { Delete, CloseBold} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue';
import { stopRefresh } from '@/utils/refresh';
import { useUserState } from '@/composables/state';
import { UploadFilled } from '@element-plus/icons-vue'

const router = useRouter()
const user = localStorage.getItem('state-user')
const userinfo = JSON.parse(user)
const stateUser = useUserState()
const avatar = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
const upload = ref(false)
const authorization = "Bearer" + stateUser.value.accesstoken


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
                        <el-avatar :size="100" @click="router.push('/login')"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
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
                        <el-avatar :size="100" :src="avatar" @click="upload=true"/>
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="userName">
                        <div style="text-align: center;">
                            <el-text style="font-size: 24px;margin-top: 10px;"><strong>{{ stateUser.username
                                    }}</strong></el-text>
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
                    <img src="../components/icon/star_.png" alt="star">
                    <p>收藏</p>
                </div>
                <div class="icon-test" @click="router.push('/feedback')">
                    <img src="../components/icon/edit one_.png" alt="edit">
                    <p>反馈</p>
                </div>
            </div>
        </el-card>
    </div>

    <!-- 头像上传 -->
    <div class="uploadCard" v-if="upload">
        <el-card class="upload">
            <el-icon style="float: right; color: gray" @click="upload=false"><CloseBold /></el-icon>
            <el-upload class="upload-demo" drag action="https://eat.vincent.0nline.tech/users/me/image"
                 style="margin-top: 5vh;" method="patch" :headers="authorization">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
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
.uploadCard {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.upload {
    width: 80vw;
    height: 50vh;
    margin: 0 auto;
    border-radius: 10px;
}
</style>
