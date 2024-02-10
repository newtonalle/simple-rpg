<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="forgeCrafting.result.type === 'equipment'" class="fw-bold">
      {{
        equipments.find((equipment) => equipment.id === forgeCrafting.result.id)
          .label
      }}
    </h4>
    <h4 v-else-if="forgeCrafting.result.type === 'material'" class="fw-bold">
      {{
        materials.find((material) => material.id === forgeCrafting.result.id)
          .label
      }}
    </h4>

    <div
      v-for="(cost, indexMCost) in forgeCrafting.materialCosts"
      :key="`forgeCraftingMaterialCostId-${cost.id}-indexMaterialCost-${indexMCost}-forgeCraftingId-${forgeCrafting.id}`"
    >
      <h5>
        {{ materials.find((material) => material.id === cost.id).label
        }}{{ materials.find((material) => material.id === cost.id).symbol }} x{{
          cost.amount
        }}
      </h5>
    </div>

    <h5 v-if="forgeCrafting.goldCost > 0">{{ forgeCrafting.goldCost }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in forgeCrafting.equipmentCosts"
      :key="`forgeCraftingEquipmentCostId-${cost.id}-indexEquipmentCost-${indexECost}-forgeCraftingId-${forgeCrafting.id}`"
    >
      <h5>
        {{ equipments.find((equipment) => equipment.id === cost.id).label }}
        x{{ cost.amount }}
      </h5>
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

  props: { forgeCrafting: Object },

  methods: {
    forgeCraft() {
      this.$store.dispatch("forgeCraft", this.forgeCrafting.id);
    },

    affordableForgeCrafting() {
      let result = true;

      if (this.forgeCrafting.materialCosts) {
        this.forgeCrafting.materialCosts.forEach((materialCost) => {
          if (
            this.materialAmounts.find(
              (materialAmount) => materialAmount.id === materialCost.id
            ).amount < materialCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.forgeCrafting.equipmentCosts) {
        this.forgeCrafting.equipmentCosts.forEach((equipmentCost) => {
          if (
            this.numberOfEquipment.find(
              (equipmentAmount) => equipmentAmount.id === equipmentCost.id
            ).amount < equipmentCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.forgeCrafting.goldCost > this.player.coins) {
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