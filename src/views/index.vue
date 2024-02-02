<script setup>
import { ref ,onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { http } from '../utils/http'


const router = useRouter()
const posts = ref([])
const page = ref(1)
const size = ref(20)
async function Update() {
    const skip = (page.value-1)*size.value
    const limit = size.value
    const res = await http.get('/posts',{
        params:{
            skip,
            limit
        }
    })
    
    posts.value = res.data
    // console.log(res.data);
}

onMounted(() => {
    Update()
})
</script>

<template>
        <div>
            <template v-for="post in posts">
                <el-card class="Post-Card">
                    <template #header>{{ post.title }}</template>

                    <div>{{ post.content.slice(0,50) }}</div>

                    <template #footer>
                        <el-button link type="primary" @click="router.push('/post/' + post.id)">Read all</el-button>
                    </template>
                </el-card>
            </template>
        </div>
</template>

<style scoped>
.Post-Card{
    margin-top: 1rem;
}
.Post-Card-Container{
    margin: 0 auto;
    width: 100%;
    max-width: 100px;
}
</style>