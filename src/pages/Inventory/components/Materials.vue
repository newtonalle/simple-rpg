<template>
  <div>
    <h2>Materials</h2>

    <br />

    <h4>Enemy Drops 🗡️</h4>

    <br />

    <div
      v-for="(material, index) in materials.enemies"
      :key="`enemyDrops-${material.label}-${index}`"
    >
      <h5>{{ material.label }}{{ material.symbol }} x{{ material.amount }}</h5>
      <button
        class="btn btn-success"
        @click="sellItem(material.name, 'enemies')"
        :disabled="material.amount <= 0"
      >
        Sell ({{ material.price }}x 🪙)
      </button>
      <br />
      <br />
    </div>

    <br />
    <br />

    <h4>Mining Drops 🪨</h4>

    <br />

    <div
      v-for="(material, index) in materials.mining"
      :key="`miningDrops-${material.label}-${index}`"
    >
      <h5>{{ material.label }}{{ material.symbol }} x{{ material.amount }}</h5>
      <button
        class="btn btn-success"
        @click="sellItem(material.name, 'mining')"
        :disabled="material.amount <= 0"
      >
        Sell ({{ material.price }}x 🪙)
      </button>
      <br />
      <br />
    </div>

    <br />
    <br />

    <h4>Fish 🐟</h4>

    <br />

    <div
      v-for="(material, index) in materials.fishing"
      :key="`fishingDropsFish-${material.label}-${index}`"
    >
      <h5>{{ material.label }}{{ material.symbol }} x{{ material.amount }}</h5>
      <button
        class="btn btn-success"
        @click="sellItem(material.name, 'fishing')"
        :disabled="material.amount <= 0"
      >
        Sell ({{ material.price }}x 🪙)
      </button>
      <br />
      <br />
    </div>

    <br />
    <br />

    <h4>Special Fishing Drops 🎣</h4>

    <br />

    <div
      v-for="(material, index) in materials.specialDrops"
      :key="`fishingDropsSpecial-${material.label}-${index}`"
    >
      <h5>{{ material.label }}{{ material.symbol }} x{{ material.amount }}</h5>
      <br />
    </div>

    <br />
    <br />

    <h4>Treasures 💰</h4>

    <br />

    <div
      v-for="(material, index) in materials.treasures"
      :key="`fishingDropsTreasures-${material.label}-${index}`"
    >
      <h5>{{ material.label }}{{ material.symbol }} x{{ material.amount }}</h5>
      <button
        class="btn btn-success"
        @click="openTreasure(material.name)"
        :disabled="material.amount <= 0"
      >
        Open ({{ material.prize }}x 🪙)
      </button>
      <br />
      <br />
    </div>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    materials() {
      return this.$store.getters.getMaterials;
    },
  },

  methods: {
    sellItem(item, type) {
      this.$store.dispatch("sellItem", { item, type });
    },

    openTreasure(treasure) {
      this.$store.dispatch("openTreasure", treasure);
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>