<template>
    <section class="routes">
      <routes-list/>
    </section>
</template>
<script>
import RoutesList from "@/components/routes/routes-list/routes-list";
import {mapActions} from 'vuex'
export default {
  name: 'routes',
  methods: {
      ...mapActions(['getRoutes'])
  },
  mounted() {
    this.getRoutes()
  },
  components: {RoutesList}
}
</script>
<style lang="scss" src="./routes.scss" scoped />