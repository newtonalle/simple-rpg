<template>
  <div>
    <h3 id="locationsSectorWiki">Locations</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(location, index) in locations"
        class="col-4"
        :key="`wikiLocationIndex-${index}`"
      >
        <hr />
        <br />
        <h4>#{{ location.id }} {{ location.label }}</h4>
        <br />
        <div v-if="location.availableEnemies.length > 0">
          <p class="fw-bold">Enemies</p>
          <div class="row">
            <div
              v-for="(enemyId, enemyIndex) in location.availableEnemies"
              :key="`wikiLocationIndex+${index}-locationEnemyIndex-${enemyIndex}`"
              class="col-4"
            >
              <p
                style="cursor: pointer"
                @click="scrollToElement(`wiki-enemy-id-${enemyId}`)"
              >
                {{ enemies[enemyId].label }}
              </p>
            </div>
          </div>
          <br />
        </div>

        <div v-if="location.availableOres.length > 0">
          <p class="fw-bold">Ores</p>
          <div class="row">
            <div
              v-for="(oreId, oreIndex) in location.availableOres"
              :key="`wikiLocationIndex+${index}-locationOreIndex-${oreIndex}`"
              class="col-4"
            >
              <p
                style="cursor: pointer"
                @click="scrollToElement(`wiki-ore-id-${oreId}`)"
              >
                {{ ores[oreId].label }}
              </p>
            </div>
          </div>
          <br />
        </div>

        <div v-if="location.availablePlants.length > 0">
          <p class="fw-bold">Plants</p>
          <div class="row">
            <div
              v-for="(plantId, plantIndex) in location.availablePlants"
              :key="`wikiLocationIndex+${index}-locationPlantIndex-${plantIndex}`"
              class="col-4"
            >
              <p
                style="cursor: pointer"
                @click="scrollToElement(`wiki-plant-id-${plantId}`)"
              >
                {{ plants[plantId].label }}
              </p>
            </div>
          </div>
        </div>
        <p
          style="cursor: pointer"
          @click="scrollToElement(`forgeSectorWiki`)"
          class="fw-bold"
          v-if="location.hasForge"
        >
          Access to the Forge (in inventory)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    locations() {
      return this.$store.getters.getLocations;
    },

    enemies() {
      return this.$store.getters.getEnemies;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    plants() {
      return this.$store.getters.getPlants;
    },
  },

  methods: {
    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>