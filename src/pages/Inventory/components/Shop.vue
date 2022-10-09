<template>
  <div>
    <h2>Shop</h2>
    <h3>({{ player.coins }}x 🪙)</h3>

    <br />

    <div v-for="(item, index) in shop" :key="`${item.name}-${index}`">
      <div v-if="item.unlocked">
        <h4 class="fw-bold">{{ item.label }}</h4>

        <div v-if="item.materialPrices">
          <div
            v-for="(cost, indexMCost) in item.materialPrices"
            :key="`${cost.material.name}-${indexMCost}`"
          >
            <h5>
              {{ materials[cost.material.type][cost.material.name].label }}
              {{ materials[cost.material.type][cost.material.name].symbol }}
              x{{ cost.amount }}
            </h5>
          </div>
        </div>
        <h5 v-if="item.goldPrice > 0">{{ item.goldPrice }}x 🪙</h5>

        <div
          v-for="(cost, indexECost) in item.equipmentPrices"
          :key="`${cost.name}-${indexECost}`"
        >
          <h5>{{ cost.label }} x{{ cost.amount }}</h5>
        </div>

        <br />

        <button
          class="btn btn-success"
          @click="buyItem(index)"
          :disabled="!affordableItem(index)"
        >
          Buy
        </button>
        <hr class="divider" />
        <br />
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    buyItem(itemIndex) {
      this.$store.dispatch("buyItem", itemIndex);
    },

    affordableItem(itemIndex) {
      let result = true;

      if (this.shop[itemIndex].materialPrices) {
        this.shop[itemIndex].materialPrices.forEach((materialPrice) => {
          if (
            this.materials[materialPrice.material.type][
              materialPrice.material.name
            ].amount < materialPrice.amount
          ) {
            result = false;
          }
        });
      }

      if (this.shop[itemIndex].equipmentPrices) {
        this.shop[itemIndex].equipmentPrices.forEach((equipmentPrice) => {
          if (
            !this.numberOfEquipment[equipmentPrice.name] ||
            this.numberOfEquipment[equipmentPrice.name].amount <
              equipmentPrice.amount
          ) {
            result = false;
          }
        });
      }

      if (this.shop[itemIndex].goldPrice > this.player.coins) {
        result = false;
      }

      return result;
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    shop() {
      return this.$store.getters.getShop;
    },

    numberOfEquipment() {
      return this.$store.getters.getNumberOfEquipment;
    },
  },
};
</script>

<style 
scoped>
button {
  width: 150px;
}
</style>