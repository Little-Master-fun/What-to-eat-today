<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
import router from "@/router";
import { onMounted, ref } from "vue";
import http from "@/utils/http";
import { ElMessage } from 'element-plus'
import { useUserState } from "@/composables/state";
import Dishcard20 from "@/components/Dishcard2.0.vue";


const stateUser = useUserState()
const selectedNav = ref("home");
const allCanteen = ref('')
const selectCanteen = ref(1)
const marks = ref([])
const count = ref(0)
const load = () => {
  count.value += 2
}


async function getMark() {
  http.get('/marks/user/' + stateUser.value.userid, {
    headers: {
      'Authorization': 'Bearer ' + stateUser.value.accesstoken
    }
  }).then(res => {
    console.log(res.data);
    marks.value = res.data
  }).catch(error => {
    ElMessage({
      message: '登入已过期或未登入，请重新登入',
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
  getMark()
})
</script>

<template>
  <el-card class="collectionBox" :body-style="{ padding: '0px 0px 0px 0px' }">
    <template #header>
      <el-row class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-icon size="25" class="backButton" @click="router.go(-1)">
            <ArrowLeft />
          </el-icon>
        </el-col>
        <el-col :span="6" style="align-content: center">
          <el-text style="font-size: 18px; font-weight: 500">我的收藏</el-text>
        </el-col>
        <el-col :span="6" style="align-content: center; display: flex">
          <el-text style="font-size: 16px; margin-left: auto">管理</el-text>
        </el-col>
      </el-row>
    </template>
    <!-- 头部食堂menu，后端接口未开发 -->
    <!-- <el-scrollbar style="overflow: hidden;">
      <div class="scrollbar-flex-content">
        <p v-for="i in allCanteen" :key="i.id" class="scrollbar-demo-item" :class="{active: selectCanteen === i.id}">
          {{ i.name }}
        </p>
      </div>
    </el-scrollbar> -->
    <el-card class="collectionDish">
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="i in marks" :key="i.id" class="infinite-list-item">
            <Dishcard20 :dishid=i.dish_id></DishCard20>
          </li>
        </ul>
    </el-card>
  </el-card>
</template>

<style scoped>
.infinite-list-item{
  margin: 10px 8px;
}
.collectionDish {
  height: 84.8vh;
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
  max-width: 130px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  color: #848484;
}

.scrollbar-flex-content p.active {
  color: black;
  background-color: white;
  border-radius: 100% 100% 0px 0px;
}
</style>
