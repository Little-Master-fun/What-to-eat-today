<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
import { reactive, ref } from 'vue';
import http from "@/utils/http";
import { useLocalStorage } from "@vueuse/core";

const router = useRouter()
const register = ref(false)
const stateUser = useLocalStorage('state-user', {
    accesstoken: '',
    username: ''

})
const form = ref({
    username: "LittleMaster",
    password: "123456",
    passwordAgine: ''
})


const openHelp = () => {
    ElMessage({
        message: '这都需要帮助，原来你和我一样吗，啊吧啊吧',
        type: 'info',
        grouping: true,
        plain: true,
        customClass: 'message'
    })
}
async function handleRegister() {
    if (form.value.password !== form.value.passwordAgine) {
        ElMessage({
            message: '请仔细核对密码',
            type: 'error',
            plain: true,
        })

    } else {
        http.post("/users/admin/register", null, {
            params: {
                access_name: form.value.username,
                password: form.value.password
            }
        }
        ).then(response => {
            ElMessage({
                message: '注册成功',
                type: 'success',
                plain: true,
            })
            ElMessage({
                message: '登入中',
                type: 'info',
                plain: true,
            })

            handleLogin()
        }).catch(error => {
            console.error('请求出错:', error);
            ElMessage({
                message: '用户名重复，请修改',
                type: 'error',
                plain: true,
            })
            return
        });
    }
}
async function handleLogin() {
    http.post("/users/token", {
        username: form.value.username,
        password: form.value.password
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        stateUser.value = {
            accesstoken: response.data.access_token,
            username: form.value.username
        }
        console.log(stateUser);
        ElMessage({
            message: '登入成功',
            type: 'success',
            plain: true,
        })
        router.go(-1)
    }).catch(error => {
        console.error('请求出错:', error);
        ElMessage({
            message: '请仔细核对账户和密码',
            type: 'error',
            plain: true,
        })
        return
    });

}

</script>


<template>
    <el-card class="loginBox">
        <el-row class="row-bg" justify="space-between">
            <el-col :span="6">
                <el-icon size="25" class="backButton" @click="router.go(-1)">
                    <ArrowLeft />
                </el-icon>
            </el-col>
            <el-col :span="6" style="align-content: center;text-align: right;">
                <el-text style="font-size: 18px; font-weight: 500" @click="openHelp()">帮助</el-text>
            </el-col>
        </el-row>
        <div>
            <el-card class="Login-View" v-if="!register">
                <template #header>
                    <el-text style="font-size: 30px; color: black;">欢迎登入今天吃什么</el-text>
                </template>

                <el-form :model="form" label-position="left" label-width="auto" size="large">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <div style="flex: 1;padding-left: 20px;">
                            <el-button type="primary" @click="handleLogin()">登入</el-button>
                        </div>
                        <div style="flex: 1;text-align: right;padding-right: 20px;">
                            <el-button @click="register = true">注册</el-button>
                        </div>
                    </el-form-item>
                </el-form>

            </el-card>

            <el-card class="Register-View" v-else>
                <template #header>
                    <el-text style="font-size: 30px; color: black;">欢迎注册今天吃什么</el-text>
                </template>

                <el-form :model="form" label-position="left" label-width="auto" size="large">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" type="password" />
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="form.passwordAgine" type="password" />
                    </el-form-item>

                    <el-form-item style="display: flex; ">
                        <div style="flex: 1;padding-left: 20px;">
                            <el-button type="" @click="register = false">登入</el-button>
                        </div>
                        <div style="flex: 1;text-align: right;padding-right: 20px;">
                            <el-button type="primary" @click="handleRegister()">注册</el-button>
                        </div>
                    </el-form-item>
                </el-form>

            </el-card>

        </div>
    </el-card>
</template>

<style scoped>
.Register-View {
    margin-top: 10vh;
}

.loginBox {
    height: 92.9vh;
}

.Login-View {
    margin-top: 10vh;
    height: 40vh;
    box-shadow: none;
}
</style>