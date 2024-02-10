<template>
  <div>
    <h2>Collections</h2>
    <br />
    <div
      v-for="(collection, index) in collections"
      :key="`collections-${index}`"
    >
      <div>
        <p>
          {{
            collectionAmounts.find(
              (collectionAmount) => collectionAmount.id === collection.id
            ).amount
          }}{{
            materials.find((material) => material.id === collection.itemId)
              .symbol
          }}
          {{
            materials.find((material) => material.id === collection.itemId)
              .label
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    collections() {
      return this.$store.getters.getCollections;
    },

    collectionAmounts() {
      return this.$store.getters.getCollectionAmounts;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },
  },
};
</script>