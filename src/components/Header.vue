<template>
  <v-app-bar app dark>
       <v-toolbar-title>
          <router-link to="/">Stock Trader</router-link>
       </v-toolbar-title>
       <v-tabs>
            <v-tab>
                 <router-link to="/portfolio" tag="li">Portfolio</router-link>
            </v-tab>
             <v-tab>
                 <router-link to="/stocks" tag="li">Stocks</router-link>
            </v-tab>
             <v-tab>
               <a href="">Save Data</a>
            </v-tab>
             <v-tab>
               <a href="">Load Data</a>
            </v-tab>
       </v-tabs>

  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>