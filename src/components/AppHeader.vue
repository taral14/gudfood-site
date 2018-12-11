<template>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Блюда</el-menu-item>
        <el-menu-item index="3">Заказы</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                activeIndex: null
            }
        },
        methods: {
            handleSelect() {

            }
        }
    }
</script>

<style scoped>

</style>