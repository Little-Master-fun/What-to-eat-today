<script setup>
import { ref } from 'vue';
import { http } from '../utils/http'
import { useUserState } from '../composables/state'
import { useRouter } from 'vue-router';

const userState = useUserState()
const form = ref({
    username:"",
    password:""
})

const router = useRouter()

async function handleLogin() {
    const res = await http.post("/login",{
        username: form.value.username,
        password: form.value.password
    });

    userState.value = {
        userID: res.data.userId,
        username: res.data.username,
        token: res.data.access_token
    }

    alert('Login is successful')

    console.log(userState.value);
    router.push('/')
}
</script>

<template>    
     <div>
        <el-card class="Login-View">
            <template #header>
                <div>
                    Login
                </div>
            </template>

            <el-from :model="form">
                <el-form-item label="UserName">
                    <el-input v-model="form.username"/>
                </el-form-item>
            </el-from>
            <el-from :model="form">
                <el-form-item label="PassWord">
                    <el-input v-model="form.password" type="password"/>
                </el-form-item>
            </el-from>

            <el-form-item>
                <el-button type="primary" @click="handleLogin">Login</el-button>
                <el-button type="primary" @click="router.push('/register')">Register</el-button>
            </el-form-item>
        </el-card>
     </div>
</template>

<style>
.Login-View{
    max-width: 360px;
    margin: 0 auto;
    margin-top: 64px;
}
</style>