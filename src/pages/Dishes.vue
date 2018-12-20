<template>
  <div class="dishes-index">
    <el-button-group>
      <el-button
              v-for="category in categories"
              :type="selectedCategory === category ? 'primary' : ''"
              @click="selectedCategory = category"
              size="small"
      >{{category.name}}</el-button>
    </el-button-group>

    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="dishes-list">
      <dish-list-view
              v-for="(dishes, name) in filterDishes"
              :dishes="dishes"
              :name="name"
              :key="dishes.map(d=>d.id).join('-')"
      />
    </div>
  </div>
</template>

<script>
import http from '../http/common'
import _ from 'lodash'
import DishListView from "./Dishes/ListView";
export default {
  name: 'Dishes',
  components: {DishListView},
  data () {
    let categories = [
        {id: 1, name: 'Салаты'},
        {id: 2, name: 'Сэндвич'},
        {id: 3, name: 'Супы'},
        {id: 4, name: 'Десерты'},
        {id: 5, name: 'Основные блюда'},
    ];
    return {
        dishes: [],
        categories: categories,
        selectedCategory: categories[0],
        loading: false,
    }
  },
  computed: {
      filterDishes() {
          let dishes = this.dishes.filter(dish => dish.category === this.selectedCategory.id)
          return _.groupBy(dishes, dish => dish.name)
      }
  },
  async created() {
    this.loading = true
    this.dishes = await http.get('/dishes').then(r => r.data)
    this.loading = false
  },
}
</script>

<style scoped>
.loading {
  padding: 20px 5px;
}
.dishes-list {
  margin-top: 10px;
}
</style>
