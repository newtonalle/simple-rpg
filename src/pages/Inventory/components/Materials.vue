<template>
  <div>
    <h2>Materials</h2>

    <br />

    <div class="row">
      <div class="col-6">
        <h4>Enemy Drops 🗡️</h4>

        <br />

        <div
          v-for="(material, index) in materials"
          :key="`enemyMaterials-${material.id}-index-${index}`"
        >
          <div v-if="material.type === 'enemyDrop'">
            <h5>
              {{ material.label }}{{ material.symbol }} x{{
                materialAmounts[material.id]
              }}
            </h5>
            <button
              class="btn btn-success"
              @click="sellItem(material.id)"
              :disabled="materialAmounts[material.id] <= 0"
            >
              Sell ({{ material.price }}x 🪙)
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div class="col-6">
        <h4>Mining Drops 🪨</h4>

        <br />

        <div
          v-for="(material, index) in materials"
          :key="`miningMaterials-${material.id}-index-${index}`"
        >
          <div v-if="material.type === 'miningDrop'">
            <h5>
              {{ material.label }}{{ material.symbol }} x{{
                materialAmounts[material.id]
              }}
            </h5>
            <button
              class="btn btn-success"
              @click="sellItem(material.id)"
              :disabled="materialAmounts[material.id] <= 0"
            >
              Sell ({{ material.price }}x 🪙)
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

    <br />

    <hr />

    <br />
    <br />
    <!-- 
    <div class="row">
      <div class="col-6">
        <h4>Fish 🐟</h4>

        <br />

        <div
          v-for="(material, index) in materials"
          :key="`fishingMaterials-${material.id}-index-${index}`"
        >
          <div v-if="material.type === 'fishingDrop'">
            <h5>
              {{ material.label }}{{ material.symbol }} x{{
                materialAmounts[material.id]
              }}
            </h5>
            <button
              class="btn btn-success"
              @click="sellItem(material.id)"
              :disabled="materialAmounts[material.id] <= 0"
            >
              Sell ({{ material.price }}x 🪙)
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div class="col-6">
        <h4>Treasures 💰</h4>

        <br />

        <div
          v-for="(material, index) in materials"
          :key="`treasureMaterials-${material.id}-index-${index}`"
        >
          <div v-if="material.type === 'fishingTreasure'">
            <h5>
              {{ material.label }}{{ material.symbol }} x{{
                materialAmounts[material.id]
              }}
            </h5>
            <button
              class="btn btn-success"
              style="width: 200px"
              @click="openTreasure(material.id)"
              :disabled="materialAmounts[material.id] <= 0"
            >
              Open (+{{ material.prize }}x 🪙)
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

    <br />

    <hr />

    <br />
    <br />

    <h4>Special Fishing Drops 🎣</h4>

    <br />

    <div
      v-for="(material, index) in materials"
      :key="`specialFishingMaterials-${material.id}-index-${index}`"
    >
      <div v-if="material.type === 'specialFishingDrop'">
        <h5>
          {{ material.label }}{{ material.symbol }} x{{
            materialAmounts[material.id]
          }}
        </h5>
        <br />
        <br />
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  computed: {
    materials() {
      return this.$store.getters.getMaterials;
    },

    materialAmounts() {
      return this.$store.getters.getMaterialAmounts;
    },
  },

  methods: {
    sellItem(materialId) {
      this.$store.dispatch("sellItem", materialId);
    },

    openTreasure(materialId) {
      this.$store.dispatch("openTreasure", materialId);
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>