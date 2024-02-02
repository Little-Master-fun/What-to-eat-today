<script setup>
import { useRoute } from 'vue-router';
import { ref ,onMounted} from 'vue';
import http from '@/utils/http';

const route = useRoute()
const PostId = route.params.id

const post = ref({})

async function getPost() {
    const res = await http.get("/posts/" + PostId)
    post.value = res.data
    console.log(post.value);
}

onMounted(() => {
    getPost()
})
</script>

<template>
    <div>
        <h1 class="post-title">{{ post.title }}</h1>

        <div class="PostAuthor">
            <span>{{ post.author?.username }}</span>
            <span>发布于</span>
            <span>{{ post.publish_at }}</span>
        </div>

        <div>{{ post.content }}</div>
    </div>
</template>

<style scoped>
.post-title{
    font-size: 2rem;
    font-weight: 500;
}
.PostAuthor{
    display: flex;
    flex-direction: row-reverse;
    font-size: 0.75rem;
    color: gray;
    margin: 1rem 0;
}
</style>