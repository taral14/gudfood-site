<template>
  <div class="dishes-index">
    <el-button-group>
      <el-button
              v-for="category in categories"
              :type="selectedCategory === category ? 'primary' : ''"
              @click="selectedCategory = category"
              size="mini"
      >{{category.name}}</el-button>
    </el-button-group>

    <el-card class="box-card" v-for="(dishes, name) in filterDishes">
      <div class="dish-name">{{name}}</div>
      <div class="garnishes">
        <el-button
                v-for="dish in dishes"
                size="mini"
        >{{dish.garnish ? dish.garnish : dish.name}}</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import http from '../http/common'
import _ from 'lodash'
export default {
  name: 'Dishes',
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
        selectedCategory: categories[0]
    }
  },
  computed: {
      filterDishes() {
          let dishes = this.dishes.filter(dish => dish.category === this.selectedCategory.id)
          return _.groupBy(dishes, dish => dish.name)
      }
  },
  async created() {
    this.dishes = await http.get('/dishes').then(r => r.data)
  },
}
</script>

<style scoped>
.box-card {
  margin-top: 10px;
}
.dish-name {
  margin-bottom: 5px;
}
</style>
