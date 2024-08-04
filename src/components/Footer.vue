
<template>
    <div class="container">
        <div class="selectBox">
            <el-row justify=center>
                <el-col :span="6" v-for="item in navItems" :key="item.id">
                    <el-button
                    type="primary"
                    :class="{ active: selectedId === item.id }"
                    @click="handleClick(item)"
                    color="rgba(0, 0, 0, 0)"
                    size="large"
                    circle
                    >
                    <!-- <el-icon :name="item.icon" /> -->
                    <el-text class="mx-1" size="small">{{ item.name }}</el-text>
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
import { ref } from 'vue';
//   import { SvgIcon } from '@element-plus/icons-vue';  

  const navItems = [
    { id: 1, name: '首页', icon: 'home', path: '/'},
    { id: 2, name: '菜品', icon: 'document', path: '/dish'},
    { id: 3, name: '我的', icon: 'user', path: '/user'},
  ];
  
  const selectedId = ref(1);
  
  function handleClick(i) {
    selectedId.value = i.id;
    router.push(i.path)
  }
  </script>  
  <style scoped>
  .el-button.active {
    background-color: #FEDE00; /* 这里设置点击后的背景颜色 */
  }
  .el-row{
    height: 100%;
    width: 100vw;
}
.el-col{
    display: grid;
    place-items: center;
}
.el-buttom{
    text-align: center;
}
.container{
    background-color: #F5F5F5;
    height: 100%;
    width: 100%;
    
}
.selectBox{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
}
.el-button:focus {
  outline: none;
}
  </style>