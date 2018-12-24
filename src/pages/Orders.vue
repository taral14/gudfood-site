<template>
    <div>
        <order-list-view v-for="order in orders" :key="order.id" :order="order"></order-list-view>
    </div>
</template>

<script>
    import OrderListView from "./Orders/ListView";
    export default {
        name: "Orders",
        components: {OrderListView},
        data() {
            return {
                orders: []
            }
        },
        async created() {
            this.orders = await this.$store.dispatch('orders/findAll')
        }
    }
</script>

<style scoped>

</style>
