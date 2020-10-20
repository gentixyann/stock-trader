<template>
   <v-app>
    <app-header></app-header>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- フッター -->
    </v-footer>
  </v-app>
</template>

<script>
import constants from './common/constants'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    }
  }
  
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
