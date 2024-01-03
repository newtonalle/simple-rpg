<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 class="fw-bold">{{ equipments[item.equipmentId].label }}</h4>

    <div v-if="item.materialPrices">
      <div
        v-for="(cost, indexMCost) in item.materialPrices"
        :key="`costMaterialId-${cost}-indexCost-${indexMCost}-index-${index}`"
      >
        <h5>
          {{ materials[cost.id].label }}
          {{ materials[cost.id].symbol }}
          x{{ cost.amount }}
        </h5>
      </div>
    </div>
    <h5 v-if="item.goldPrice > 0">{{ item.goldPrice }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in item.equipmentPrices"
      :key="`costEquipId-${cost}-indexCost-${indexECost}-index-${index}`"
    >
      <h5>{{ equipments[cost.id].label }} x{{ cost.amount }}</h5>
    </div>

    <br />

    <button
      class="btn btn-success"
      @click="buyItem()"
      :disabled="!affordableItem()"
    >
      Buy
    </button>

    <br />
    <br />

    <div v-if="hovering">
      <equipment-stats :itemId="item.equipmentId" />
    </div>

    <br />

    <hr class="divider" />
    <br />
  </div>
</template>

<script>
import EquipmentStats from "../../../components/EquipmentStats.vue";
export default {
  data: () => ({
    hovering: false,
  }),

  components: { EquipmentStats },

  props: { item: Object, index: Number },

  methods: {
    buyItem() {
      this.$store.dispatch("buyItem", this.index);
    },

    affordableItem() {
      let result = true;

      if (this.shop[this.index].materialPrices) {
        this.shop[this.index].materialPrices.forEach((materialPrice) => {
          if (this.materialAmounts[materialPrice.id] < materialPrice.amount) {
            result = false;
          }
        });
      }

      if (this.shop[this.index].equipmentPrices) {
        this.shop[this.index].equipmentPrices.forEach((equipmentPrice) => {
          if (
            this.numberOfEquipment[equipmentPrice.id] < equipmentPrice.amount
          ) {
            result = false;
          }
        });
      }

      if (this.shop[this.index].goldPrice > this.player.coins) {
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

    materialAmounts() {
      return this.$store.getters.getMaterialAmounts;
    },

    shop() {
      return this.$store.getters.getShop;
    },

    shopUnlocks() {
      return this.$store.getters.getShopUnlocks;
    },

    equipments() {
      return this.$store.getters.getEquipments;
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