<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useUserState } from '@/composables/state';

const footerIndex = useUserState('footerIndex',1)
  const navItems = [
    { id: 1, name: '首页', icon: '/src/components/icon/Frame%20(2).png', path: '/'},
    { id: 2, name: '菜品', icon: '/src/components/icon/Frame%20(1).png', path: '/dish'},
    { id: 3, name: '我的', icon: '/src/components/icon/Group.png', path: '/user'},
  ];
  
  
  function handleClick(i) {
    footerIndex.value = i.id
    router.push(i.path)
    
  }
  </script>  


<template>
    <div class="container">
        <div class="selectBox">
            <el-row justify=center>
                <el-col :span="6" v-for="item in navItems" :key="item.id">
                    <el-button
                    type="primary"
                    :class="{ active: footerIndex == item.id }"
                    @click="handleClick(item)"
                    color="rgba(0, 0, 0, 0)"
                    size="large"
                    circle
                    >
                     <div style="display: flex; flex-direction: column;align-items: center;">
                      <img width="18px" :src="item.icon"  style="display: block;" />
                      <el-text class="mx-1" size="small">{{ item.name }}</el-text>
                    </div>
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
  </template>
  
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
    display: flex;
    flex-direction: column;
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
.mx-1{
  display: block;
}
.el-text {
  font-size: 10px;  /* 将 16px 替换为您想要的字体大小值，如 14px、18px 等  */
}
  </style>