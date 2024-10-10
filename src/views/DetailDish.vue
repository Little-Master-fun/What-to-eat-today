<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import http from "@/utils/http";
import StarRating from "vue-star-rating";
import { ArrowLeft } from "@element-plus/icons-vue";
import CommitCard from "@/components/CommitCard.vue";
import router from "@/router";
import { EditPen, Star, StarFilled } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserState } from "@/composables/state";

const stateUser = useUserState()
const count = ref(5)
const centerDialogVisible = ref(false)
const allCanteen = ref({})
const route = useRoute()
const dishId = route.params.dishid
const dishName = ref('')
const dishPrice = ref('')
const dishlocation = ref('')
const rating = ref(2.5);
const vote = ref(2.5)
const Imgsrc = ref(
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
);
const Fooler = ['一层', '二层', '三层', '四层']
const comment = ref('')
const allComment = ref([])
const isMark = ref(false)
const markId = ref()

//添加收藏
async function addMark() {
  http.post('/marks', {
    "dish_id": dishId,
    "user_id": stateUser.value.userid,
  }, {
    headers: {
      'Authorization': 'Bearer ' + stateUser.value.accesstoken
    }
  }).then(res => {
    ElMessage({
      message: '收藏成功',
      type: 'success',
      plain: true,
    })
    markId.value = res.data.id
    console.log(markId.value);
    isMark.value = true
  }).catch(error => {
    ElMessage({
      message: '请登入或登入已过期',
      type: 'error',
      plain: true,
    })
    console.log(error);
    
  })
}

//检查是否收藏
async function getMark() {
  http.get('/marks/user/' + stateUser.value.userid, {
    headers: {
      'Authorization': 'Bearer ' + stateUser.value.accesstoken
    }
  }).then(res => {
    console.log(res.data);
    for (let index = 0; index < res.data.length; index++) {
      if (res.data[index].dish_id == dishId) {
        isMark.value = true
        markId.value = res.data[index].id
      }
    }
  })
}
//删除收藏
async function deleteMark(params) {
  http.delete('/marks/' + markId.value, {
    headers: {
      'Authorization': 'Bearer ' + stateUser.value.accesstoken
    }
  }).then(res => {
    ElMessage({
      message: '取消收藏成功',
      type: 'success',
      plain: true,
    })
    isMark.value = false
  }).catch(error => {
    ElMessage({
      message: '请登入或登入已过期',
      type: 'error',
      plain: true,
    })
  })

}

//获取评论
async function getComment(params) {
  const res = http.get('/comments/dish/' + dishId)
  allComment.value = (await res).data
}
//发表评论
async function postComment() {
  http.post('/comments/', {
    "user_id": stateUser.value.userid,
    "dish_id": dishId,
    "content": comment.value,
    "vote": vote.value,
  }, {
    headers: {
      'Authorization': 'Bearer ' + stateUser.value.accesstoken
    }
  }).then(res => {
    ElMessage({
      message: '提交成功',
      type: 'success',
      plain: true,
    })
    centerDialogVisible.value = false
    comment.value = ''

  }).catch(error => {
    ElMessage({
      message: '请登入或登入已过期',
      type: 'error',
      plain: true,
    }),
      centerDialogVisible.value = false
  })
}
function cancel() {
  centerDialogVisible.value = false
  comment.value = ''
}
function createComment() {
  centerDialogVisible.value = true
}
async function dishLocation(i) {
  const res = http.get('/canteen/all')
  allCanteen.value = (await res).data
  dishPrice.value = i.price
  const dishFloor = Fooler[i.floor]
  dishlocation.value = allCanteen.value[i.canteen - 1].name + dishFloor + i.window + '号窗口'
}
async function getDetailDish() {
  const res = http.get('/dish/' + dishId)
  rating.value = (await res).data.average_vote
  dishName.value = (await res).data.name
  dishLocation((await res).data)
  Imgsrc.value = (await res).data.image
}



const load = () => {
  count.value += 2;
};

onMounted(() => {
  getDetailDish()
  getComment(),
  getMark()
})
</script>

<template>
  <div class="headerImg">
    <el-icon size="30" class="backButton" @click="router.go(-1)">
      <ArrowLeft />
    </el-icon>
    <el-image :src="Imgsrc" style="height: 30.8vh; width: 100vw" />
  </div>
  <div>
    <el-card class="dishDetial" :body-style="{ padding: '0px 0px 0px 0px' }">
      <el-card class="starBox">
        <div style="display: flex;">
          <div style="flex: 1;display: flex;flex-direction: column;text-align: left;">
            <div style="margin-bottom: 5px;">
              <el-text style="font-size: 30px;font-weight: 600;color: black;">{{ dishName }}</el-text>
            </div>
            <div style="margin-bottom: 5px;">
              <el-text style="font-size: 17px;font-weight: 600;">{{ dishPrice }}元</el-text>
            </div>
            <div>
              <el-text style="">{{ dishlocation }}</el-text>
            </div>
          </div>
          <div style="flex: 1;">
            <star-rating :rating="rating" :increment="0.1" :star-size="30" active-color="#FEDE00" :show-rating="false"
              :rtl="true"></star-rating>
            <el-text class="point">{{ rating.toFixed(1) }}</el-text>
          </div>

        </div>
      </el-card>
      <el-card class="commitBox">
        <template #header>
          <div style="display: flex; justify-content: space-between;">
            <div>
              <el-text style="color: black; font-size: medium">评论</el-text>
            </div>
            <div>
              <el-icon @click="createComment()">
                <EditPen />
              </el-icon>
              <el-icon style="margin-left: 20px;" @click="deleteMark()" v-if="isMark" size="19">
                <StarFilled color="#fede00" />
              </el-icon>
              <el-icon style="margin-left: 20px;" @click="addMark()" v-else>
                <Star />
              </el-icon>

            </div>

          </div>
        </template>
        <div style="overflow: hidden;">
          <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in allComment" :key="i.id" class="infinite-list-item">
              <CommitCard :comments="i"></CommitCard>
            </li>
            <div class="divider">
              <span class="divider-text">没有更多评论啦</span>
            </div>
          </ul>
        </div>
      </el-card>
    </el-card>
  </div>
  <!-- 评论对话框 -->
  <el-card class="createComment" v-if="centerDialogVisible">
    <template #header>
      <el-text>评论</el-text>
    </template>
    <el-form label-width="auto" size="large">
      <el-form-item label="评论">
        <el-input v-model="comment" type="textarea" :row="2" :autosize="{ minRows: 4, maxRows: 6 }"
          placeholder="(๑˃̵ᴗ˂̵)و写下你对这道菜的看法吧" />
      </el-form-item>
      <el-form-item label="评分">
        <star-rating :rating="vote" :increment="0.5" :star-size="20" active-color="#FEDE00"
          :show-rating="false"></star-rating>
      </el-form-item>
      <el-form-item>
        <div style="flex: 1;padding-left: 20px;">
          <el-button @click="cancel()">取消</el-button>
        </div>
        <div style="flex: 1;text-align: right;padding-right: 20px;">
          <el-button @click="postComment()" type="primary">提交评论</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  position: relative;
  margin: 20px 0;
}

.divider-text {
  position: absolute;
  text-align: center;
  top: -10px;
  font-size: 15px;
  background-color: white;
  padding: 0 10px;
  left: 50%;
  transform: translateX(-50%);
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
  scrollbar-width: none;
}

.createComment {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
}

.infinite-list {
  height: 30vh;
  overflow: hidden;
}

.commitBox {
  margin-top: 1vh;
  min-height: 40vh;
}

.starBox {
  width: 100vw;
  height: 20vh;
  border-radius: 10px 10px 0px 0px;
}

.dishDetial {
  position: absolute;
  top: 29vh;
  width: 100vw;
  height: 63.9vh;
  border-radius: 10px 10px 0px 0px;
}

.point {
  position: absolute;
  right: 7vw;
  font-size: 50px;
  font-weight: 600;
  color: #fede00;
}

.backButton {
  position: absolute;
  z-index: 1;
  left: 1vw;
  top: 1vh;
}
</style>
