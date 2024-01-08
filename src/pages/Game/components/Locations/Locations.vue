<template>
  <div>
    <h1>{{ locations[player.currentLocationId].label }}</h1>
    <p class="fs-5">Travel to:</p>
    <div class="row">
      <div
        v-for="(location, index) in locations"
        :key="`locationIndex-${index}-locationId-${location.id}`"
        class="col-4"
      >
        <button
          @click="changeLocation(location.id)"
          class="btn btn-outline-dark"
        >
          {{ location.label }}
        </button>
        <span v-if="location.id === player.currentLocationId"> 📍</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {
    changeLocation(locationId) {
      this.$store.dispatch("changeLocation", locationId);
    },
  },

  computed: {
    locations() {
      return this.$store.getters.getLocations;
    },

    player() {
      return this.$store.getters.getPlayer;
    },
  },
};
</script>

<style scoped>
button {
  width: 80%;
}
</style>