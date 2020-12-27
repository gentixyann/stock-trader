<template>
    <section>
        FILTER
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
           <coache-item 
           v-for="coach in filteredCoaches" 
           :key="coach.id"
           :id="coach.id"
           :first-name="coach.firstName"
           :last-name="coach.lastName"
           :rate="coach.hourlyRate"
           :areas="coach.areas"></coache-item>
        </ul>
        <h3 v-else>
            No coach found.
        </h3>
    </section>
</template>

<script>
import CoacheItem from '../../components/coaches/CoacheItem.vue';

export default {
  components: { CoacheItem },
    computed: {
        filteredCoaches() {
            // index.jsの「coaches」/ getters.jsの「coaches」
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>