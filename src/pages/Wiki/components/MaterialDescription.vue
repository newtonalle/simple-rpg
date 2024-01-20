<template>
  <div>
    <h3 id="materialsSectorWiki">Materials</h3>

    <br />
    <div class="row">
      <div
        v-for="(material, index) in availableMaterials"
        :key="`materialWikiIndex-${index}`"
        class="col-3"
      >
        <div :id="`wiki-materials-id-${material.id}`">
          <hr />

          <br />

          <h4>#{{ material.id }} {{ material.label }} {{ material.symbol }}</h4>

          <p class="fw-bold">{{ materialTypeLabel(material.type) }}</p>

          <p v-if="material.price">Sold for {{ material.price }}🪙</p>
          <p v-else>Can't be sold</p>

          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableMaterials() {
      return this.$store.getters.getAvailableMaterials;
    },
  },

  methods: {
    materialTypeLabel(type) {
      let label = "";

      switch (type) {
        case "enemyDrop":
          label = "Enemy Drop";
          break;

        case "miningDrop":
          label = "Mining Drop";
          break;

        case "foragingDrop":
          label = "Foraging Drop";
          break;

        case "farmingDrop":
          label = "Farming Drop";
          break;

        case "fishingDrop":
          label = "Fishing Drop";
          break;

        case "specialFishingDrop":
          label = "Special Fishing Drop";
          break;

        case "treasure":
          label = "Treasure";
          break;

        case "specialCrafting":
          label = "Special Crafting";
          break;

        default:
          break;
      }

      return label;
    },

    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>