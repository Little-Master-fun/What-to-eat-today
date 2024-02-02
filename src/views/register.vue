<script setup>
import { ref } from 'vue';
import { http } from '../utils/http'
import {useUserState} from '../composables/state'
import { useRouter } from 'vue-router';

const form = ref({
    username:"",
    password:""
})

const router = useRouter()

async function handleRegister() {
    const res = await http.post("/users",{
        username: form.value.username,
        password: form.value.password
    });

    useUserState.value = {
        userID: res.data.userID,
        username: res.data.username,
        token: res.data.token
    }

    alert('Registration is successful')

    // console.log(res.data);
    router.push('/')
}
</script>

<template>    
     <div>
        <el-card class="Login-View">
            <template #header>
                <div>
                    Register
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
                <el-button type="primary" @click="handleRegister">Register</el-button>
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