<template>
    <div class="order">
        <strong v-if="loading">
            Loading...
        </strong>
        <strong v-else>
            {{internalOrder.date|date}}
            <font-awesome-icon class="reset-order" icon="sync-alt" @click="reset"/>
        </strong>

        <ul>
            <li v-for="dish in internalOrder.dishes">
                {{dish.name}}
                <template v-if="dish.garnish">(з {{dish.garnish}})</template>
            </li>
        </ul>
    </div>
</template>

<script>
    import date from '../../mixins/date'

    export default {
        name: "OrderListView",
        mixins: [date],
        props: {
            order: {
                type: Object
            }
        },
        data() {
            return {
                loading: false,
                internalOrder: {}
            }
        },
        methods: {
            async reset() {
                this.loading = true
                this.internalOrder = await this.$store.dispatch('orders/addRandom', this.order.date)
                this.loading = false
            }
        },
        watch: {
            order(order) {
                this.internalOrder = order
            }
        },
        created() {
            this.internalOrder = this.order
        }
    }
</script>

<style scoped>
.reset-order:hover {
    color: dodgerblue;
    cursor: pointer;
}
.order strong {
    border-bottom: 1px dashed #dadada;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: block;
}
.order ul {
    padding: 0;
    list-style: none;
    margin: 0;
}

.reset-order {
    float: right;
}

.order {
    padding: 5px;
}
.order:hover {
    background: #ecf8ff;
}
</style>