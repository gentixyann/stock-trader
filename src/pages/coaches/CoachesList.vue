<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
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
        </base-card>
    </section>
</template>

<script>
import CoacheItem from '../../components/coaches/CoacheItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';


export default {
  components: { CoacheItem, CoachFilter },
  data() {
      return {
          activeFilters: {
              frontend: true,
              backend: true,
              career: true,
          }
      };
  },
    computed: {
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
        filteredCoaches() {
            // index.jsの「coaches」/ getters.jsの「coaches」
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    },
    methods: {
        // CoachFilterのemitからupdatedFiltersを受け取る
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
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