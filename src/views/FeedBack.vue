<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
import router from "@/router";
import { onMounted, ref } from "vue";
import http from "@/utils/http";
import { useUserState } from "@/composables/state";
import { ElMessage } from 'element-plus'


const stateUser = useUserState()
const selectedNav = ref("home");
const refreshData = ref({
    problem: '',
    advice: ''
})
const allCanteen = ref('')
const selectCanteen = ref(1)
const selectObject = ref(0)
const refreshObject = ref([
    {
        'object': '技术bug',
        'target': 0
    },
    {
        'object': '食堂菜品',
        'target': 1
    }
])

async function onSubmit(twd) {
    http.post('/feedback/', {
        "content": String(refreshData.value),
        "user_id": stateUser.value.userid,
        "towards": selectObject.value
    }, {
        headers: {
            'Authorization': 'Bearer ' + stateUser.value.accesstoken
        }
    }).then(res => {
        ElMessage({
            message: '提交成功，感谢您的建议',
            type: 'success',
            plain: true,
        })
        refreshData.value = ref({
            problem: '',
            advice: ''
        })
    }).catch(error => {
        ElMessage({
            message: '登入过期啦',
            type: 'error',
            plain: true,
        })

    })
}
async function getCanteen() {
    const res = http.get('/canteen/all')
    allCanteen.value = (await res).data
}
function selectNav(nav) {
    selectedNav.value = nav;
}

onMounted(() => {
    getCanteen()
})
</script>

<template>
    <el-card class="collectionBox" :body-style="{ padding: '0px 0px 0px 0px' }">
        <div style="width: 100vw; padding: 10px;">
            <el-row class="row-bg" justify="space-between">
                <el-col :span="6">
                    <el-icon size="25" class="backButton" @click="router.go(-1)">
                        <ArrowLeft />
                    </el-icon>
                </el-col>
                <el-col :span="6" style="align-content: center">
                    <el-text style="font-size: 18px; font-weight: 500">提交反馈</el-text>
                </el-col>
                <el-col :span="6" style="align-content: center; display: flex">
                    <el-text style="font-size: 16px; margin-left: auto">帮助</el-text>
                </el-col>
            </el-row>
        </div>
        <el-scrollbar style="overflow: hidden;">
            <div class="scrollbar-flex-content">
                <p v-for="i in refreshObject" :key="i.target" class="scrollbar-demo-item"
                    :class="{ active: selectObject === i.target }" @click="selectObject = i.target">
                    {{ i.object }}
                </p>
            </div>
        </el-scrollbar>
        <el-card class="refreshBox" :body-style="{ padding: '10vh 5vw 0px 5vw' }">
            <el-form v-model="refreshData" label-width="auto" size="large" v-if="!selectObject">
                <el-form-item label="问题描述">
                    <el-input v-model="refreshData.problem" type="textarea" :row="2"
                        :autosize="{ minRows: 10, maxRows: 4 }" placeholder="小白项目，bug多多，如有不便，还望见谅，" />
                </el-form-item>
                <el-form-item label="开发建议">
                    <el-input v-model="refreshData.advice" type="textarea" :row="2"
                        :autosize="{ minRows: 10, maxRows: 4 }" placeholder="小白项目，bug多多，如有不便，还望见谅，" />
                </el-form-item>
                <el-form-item style="display: flex; ">
                    <div style="flex: 1;text-align: end;">
                        <el-button type="primary" @click="onSubmit()">提交</el-button>
                    </div>
                </el-form-item>
            </el-form>
            <el-form v-model="refreshData" label-width="auto" size="large" v-else>
                <el-form-item label="菜品意见">
                    <el-input v-model="refreshData.problem" type="textarea" :row="2"
                        :autosize="{ minRows: 10, maxRows: 4 }" placeholder="目前还未做相应食堂接口，如果可以，请您说明一下食堂信息，菜品位置以及您的意见" />
                </el-form-item>
                <el-form-item style="display: flex; ">
                    <div style="flex: 1;text-align: end;">
                        <el-button type="primary" @click="onSubmit()">提交</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-card>
    </el-card>
</template>

<style scoped>
.refreshBox {
    height: 81vh;
    border: none;
}

.collectionBox {
    height: 92.9vh;
    background-color: #f5f5f5;
}

.nav-container ul li {
    cursor: pointer;
}

.nav-container {
    display: flex;
    flex-direction: row;
}

.nav-container ul li.active span {
    color: blue;
    /* 更改选中时的字体颜色，您可以根据需求修改 */
    border-bottom: 2px solid blue;
    /* 更改选中时的下划线颜色和样式，您可以根据需求修改 */
}

.scrollbar-flex-content {
    display: flex;
    height: 5vh;
}

.scrollbar-demo-item {
    flex: 1;
    flex-shrink: 0;
    display: flex;
    padding-top: 10px;
    align-items: flex-start;
    justify-content: center;
    width: 100px;
    height: 50px;
    text-align: center;
    color: #848484;
}

.scrollbar-flex-content p.active {
    color: black;
    background-color: white;
    border-radius: 100% 100% 0px 0px;
}
</style>
