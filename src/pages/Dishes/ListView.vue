<template>
  <div class="dish">
    <div class="dish-name">{{name}}</div>
    <div class="garnishes" v-if="dishes.length > 1">
      <check-dish v-for="dish in dishes" :id="dish.id" :name="dish.garnish ? dish.garnish : dish.name"/>
    </div>
    <div v-else class="garnishes">
      <check-dish name="заказать" :id="dishes[0].id"/>
    </div>
  </div>
</template>

<script>
  import CheckDish from "./CheckDish";
  export default {
    name: "DishListView",
    components: {CheckDish},
    props: {
      dishes: {
        type: Array
      },
      name: {
        type: String
      }
    },
  }
</script>

<style scoped>

</style>
