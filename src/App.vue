<template>
   <v-app>
    <v-app-bar app>
      <!-- アプリケーションバー -->
    </v-app-bar>

    <!-- <v-navigation-drawer app> -->
      <!-- ドロワー -->
    <!-- </v-navigation-drawer> -->

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- フッター -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
