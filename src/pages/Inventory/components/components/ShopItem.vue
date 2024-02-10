<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="item.result.type === 'equipment'" class="fw-bold">
      {{ item.result.amount }}x
      {{
        equipments.find((equipment) => equipment.id === item.result.id).label
      }}
    </h4>
    <h4 v-else-if="item.result.type === 'material'" class="fw-bold">
      {{ item.result.amount }}
      {{ materials.find((material) => material.id === item.result.id).symbol }}
      {{ materials.find((material) => material.id === item.result.id).label }}
    </h4>
    <h4 v-else-if="item.result.type === 'arrow'" class="fw-bold">
      {{ item.result.amount }}x
      {{ arrows.find((arrow) => arrow.id === item.result.id).label }}
    </h4>

    <div v-if="item.materialPrices">
      <div
        v-for="(cost, indexMCost) in item.materialPrices"
        :key="`costMaterialId-${cost}-indexCost-${indexMCost}-shopItemId-${item.id}`"
      >
        <h5>
          {{ materials.find((material) => material.id === cost.id).label }}
          {{ materials.find((material) => material.id === cost.id).symbol }}
          x{{ cost.amount }}
        </h5>
      </div>
    </div>
    <h5 v-if="item.goldPrice > 0">{{ item.goldPrice }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in item.equipmentPrices"
      :key="`costEquipId-${cost.id}-indexCost-${indexECost}-shopItemId-${item.id}`"
    >
      <h5>
        {{ equipments.find((equipment) => equipment.id === cost.id).label }}
        x{{ cost.amount }}
      </h5>
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
      <div v-if="item.result.type === 'equipment'">
        <equipment-stats :itemId="item.result.id" />
      </div>
      <div v-else-if="item.result.type === 'arrow'">
        <arrow-stats :itemId="item.result.id" />
      </div>
    </div>

    <br />

    <hr class="divider" />
    <br />
  </div>
</template>

<script>
import EquipmentStats from "../../../components/EquipmentStats.vue";
import ArrowStats from "../../../components/ArrowStats.vue";

export default {
  data: () => ({
    hovering: false,
  }),

  components: { EquipmentStats, ArrowStats },

  props: { item: Object },

  methods: {
    buyItem() {
      this.$store.dispatch("buyItem", this.item.id);
    },

    affordableItem() {
      let result = true;

      if (this.item.materialPrices) {
        this.item.materialPrices.forEach((materialPrice) => {
          if (
            this.materialAmounts.find(
              (materialAmount) => materialAmount.id === materialPrice.id
            ).amount < materialPrice.amount
          ) {
            result = false;
          }
        });
      }

      if (this.item.equipmentPrices) {
        this.item.equipmentPrices.forEach((equipmentPrice) => {
          if (
            this.numberOfEquipment.find(
              (equipmentAmount) => equipmentAmount.id === equipmentPrice.id
            ).amount < equipmentPrice.amount
          ) {
            result = false;
          }
        });
      }

      if (this.item.goldPrice > this.player.coins) {
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

    arrows() {
      return this.$store.getters.getArrows;
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