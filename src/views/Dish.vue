<script setup>
import DishHeader from '../components/DishHeader.vue'
import DishMenu from '../components/DishMenu.vue'
</script>

<template>
    <div class="container">
        <div class="header">
            <DishHeader></DishHeader>
        </div>
        <div class="dishMenu">
            <DishMenu></DishMenu>
        </div>
    </div>

</template>

<style scoped>
.container{
    background-color: #F5F5F5;
    height: 100vh;
    /* width: 100vw; */
}
.header{
    padding-bottom: 1vh;
}
</style>