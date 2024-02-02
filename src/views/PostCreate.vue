<script setup>
import { ref } from 'vue';

const from = ref({
    title:'',
    content:''
})
</script>

<template>
    <div>
        <el-from :model="from" label-width="96px">
            <el-form-item label="Title">
                <el-input v-model="from.title"></el-input>
            </el-form-item>

            <el-form-item label="Content">
                <el-input v-model="from.content"></el-input>
            </el-form-item>
        </el-from>
    </div>
</template>