<template>
    <table class="routes-list">
      <tr>
        <th>id</th>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
        <th>Действия</th>
      </tr>
      <tr v-for="route in returnRoutes">
        <td>{{route.id}}</td>
        <td>{{route.date}}</td>
        <td>{{route.name}}</td>
        <td>{{route.count}}</td>
        <td>{{route.distance}}</td>
        <td>
          <button>Изменить</button>
          <button>Удалить</button>
        </td>
      </tr>
    </table>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'routes-list',
  computed: {
    ...mapGetters(['returnRoutes'])
  }
}
</script>
<style lang="scss" src="./routes-list.scss" scoped />