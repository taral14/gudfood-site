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

    <div class="dish" v-for="(dishes, name) in filterDishes" :key="dishes.map(d=>d.id).join('-')">
      <div class="dish-name">{{name}}</div>
      <div class="garnishes" v-if="dishes.length > 1">
        <el-checkbox v-for="dish in dishes">{{dish.garnish ? dish.garnish : dish.name}}</el-checkbox>
      </div>
      <div v-else class="garnishes">
        <el-checkbox>Заказать</el-checkbox>
      </div>
    </div>
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
.dish {
  padding: 5px 10px;
  border-bottom: 1px dashed #dadada;
}
.dish:hover {
  background: #ecf8ff;
}
.dish .dish-name {
  margin-bottom: 5px;
}
.dish .el-checkbox+.el-checkbox {
  margin-left: 15px;
}
</style>
