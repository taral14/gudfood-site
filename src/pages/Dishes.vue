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

    <dish-list-view v-for="(dishes, name) in filterDishes" :dishes="dishes" :name="name" :key="dishes.map(d=>d.id).join('-')"/>
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
