<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="forgeCrafting.result.type === 'equipment'" class="fw-bold">
      {{ equipments[forgeCrafting.result.id].label }}
    </h4>
    <h4 v-else-if="forgeCrafting.result.type === 'material'" class="fw-bold">
      {{ materials[forgeCrafting.result.id].label }}
    </h4>

    <div
      v-for="(cost, indexMCost) in forgeCrafting.materialCosts"
      :key="`forgeCraftingMaterialCostId-${cost.id}-indexMaterialCost-${indexMCost}-index-${index}`"
    >
      <h5>
        {{ materials[cost.id].label }}{{ materials[cost.id].symbol }} x{{
          cost.amount
        }}
      </h5>
    </div>

    <h5 v-if="forgeCrafting.goldCost > 0">{{ forgeCrafting.goldCost }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in forgeCrafting.equipmentCosts"
      :key="`forgeCraftingEquipmentCostId-${cost.id}-indexEquipmentCost-${indexECost}-index-${index}`"
    >
      <h5>{{ equipments[cost.id].label }} x{{ cost.amount }}</h5>
    </div>

    <br />

    <button
      class="btn btn-success"
      @click="forgeCraft()"
      :disabled="!affordableForgeCrafting()"
    >
      Forge
    </button>

    <br />
    <br />

    <div v-if="hovering && forgeCrafting.result.type === 'equipment'">
      <equipment-stats :itemId="forgeCrafting.result.id" />
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

  props: { forgeCrafting: Object, index: Number },

  methods: {
    forgeCraft() {
      this.$store.dispatch("forgeCraft", this.index);
    },

    affordableForgeCrafting() {
      let result = true;

      if (this.forge[this.index].materialCosts) {
        this.forge[this.index].materialCosts.forEach((materialCost) => {
          if (this.materialAmounts[materialCost.id] < materialCost.amount) {
            result = false;
          }
        });
      }

      if (this.forge[this.index].equipmentCosts) {
        this.forge[this.index].equipmentCosts.forEach((equipmentCost) => {
          if (this.numberOfEquipment[equipmentCost.id] < equipmentCost.amount) {
            result = false;
          }
        });
      }

      if (this.forge[this.index].goldCost > this.player.coins) {
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

    equipments() {
      return this.$store.getters.getEquipments;
    },

    forge() {
      return this.$store.getters.getForge;
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