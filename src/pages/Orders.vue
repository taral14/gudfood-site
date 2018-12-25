<template>
    <div>
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else class="orders-list">
            <order-list-view v-for="order in orders" :key="order.id" :order="order"></order-list-view>
        </div>
    </div>
</template>

<script>
    import OrderListView from "./Orders/ListView";
    export default {
        name: "Orders",
        components: {OrderListView},
        data() {
            return {
                orders: [],
                loading: false,
            }
        },
        async created() {
            this.loading = true
            this.orders = await this.$store.dispatch('orders/findAll')
            this.loading = false
        }
    }
</script>

<style scoped>
    .loading {
        padding: 10px 5px;
    }
</style>
