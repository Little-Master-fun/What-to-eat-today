<script setup>

const Window = [
    { id: 1, name: '一号窗口', path: '/'},
    { id: 2, name: '二号窗口', path: '/dish'},
    { id: 3, name: '三号窗口', path: '/user'},
    { id: 4, name: '四号窗口', path: '/user'},
    { id: 5, name: '五号窗口', path: '/user'},
    { id: 6, name: '六号窗口', path: '/user'},
    { id: 7, name: '七号窗口', path: '/user'},
    { id: 8, name: '八号窗口', path: '/user'},
  ];

const dish = 50
</script>

<template>
     <div class="layout">
        <el-container style="height: 100%;">
        <el-aside width="22vw">
            <el-menu
                :default-active="1"
                class="el-menu-demo"
                @select="handleSelect"
            >
                <el-menu-item :index="item.id" v-for="item in Window" :key="item.id">
                    <el-text size="small">{{item.name}}</el-text>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-card class="dishCard"
            :body-style="{padding:'10px 0px 10px 10px'}"
            v-for="i in dish"
            >
                <el-row>
                <el-col :span="9" style="display: grid; place-items: center;">
                    <el-image style="border-radius: 5px; margin-right: 10px;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
                </el-col>
                <el-col :span="15" justify="space-between">
                     <el-row >
                        <el-text style="color: black;" size="large"><strong>菜品名称</strong></el-text>
                     </el-row>
                     <el-row style="margin-top: 3vh;" justify="space-between">
                        <el-col span="6"><el-text size="small">价格</el-text></el-col>
                        <el-col span="10">
                            <el-button class="changeButton" round><el-text size="small" style="color: black;">详细信息</el-text></el-button>
                        </el-col>
                     </el-row>
                </el-col>
                </el-row>
            </el-card>

        </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.layout{
    height: 43vh;
}
.el-menu-item {
  text-align: center;
  display: flex;
}
.el-menu {
  overflow: hidden !important; 
  border-right: none;
}
.el-card{
    padding: 0px;
    margin: 0px;
    box-shadow: none;
    border: none;
}
.el-main{
    margin: 0px;
    padding: 0px;
}
.changeButton{
    color: rgb(0, 0, 0);
    background-color: #FFE062;
    margin-right: 20px;
    height: 25px;
    border: none;
    display: flex;
    text-align: center;
    justify-content: center;
}
.el-card {
  padding: 10px;  /* 您可以将 20px 替换为您想要的具体值，如 10px、30px 等  */
}
.dishCard{
    padding-right: 0px !important;
    padding: 0px !important;
}
.el-menu-item{
    background-color: #F5F5F5;
}
.el-menu-item.is-active {
  background-color: #ffffff;  /* 将 #007BFF 替换为您想要的背景颜色值 */
}
.el-aside::-webkit-scrollbar {
  display: none; /* 针对Webkit浏览器 */
}
 
.el-aside {
  -ms-overflow-style: none;  /* 针对IE、Edge浏览器 */
  scrollbar-width: none;  /* 针对Firefox浏览器 */
}
</style>