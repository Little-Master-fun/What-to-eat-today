<script setup>
import { useUserState } from '@/composables/state';
import { useLocalStorage } from '@vueuse/core';
import { ElButton } from 'element-plus';
import { RouterLink ,useRouter} from 'vue-router';

const router=useRouter();
const userState = useUserState()

function handleClickLogin(){
    router.push('/login')
}

function handleClickLogout(){
    useLocalStorage = {}
}

</script>
<template>
    <div class="header-container">
        <router-link to="/" class="header">Simple BBS</router-link>

        <el-button 
        v-if="!userState.userID"
        link type="primary" 
        class="header-login-btn" 
        @click="handleClickLogin">
        Login
        </el-button>

        <template v-else>
            <div class="HeaderButton">
                <el-button type="primary" link @click="router.push('/createpost')">CreatePost</el-button>
                <div style="margin: 0 1rem;">{{ userState.username }}</div>  
                <el-button link type="danger" @click="handleClickLogout">Exit</el-button>
            </div>
        </template>
    </div>
    <!-- <router-view></router-view> -->
</template>
<style scoped>
.header-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;

}
.header{
    font-size: 1.25rem;
}
.HeaderButton{
    display: flex;
}
</style>