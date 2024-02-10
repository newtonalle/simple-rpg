<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="recipe.result.type === 'equipment'" class="fw-bold">
      {{ recipe.result.amount }}x
      {{
        equipments.find((equipment) => equipment.id === recipe.result.id).label
      }}
    </h4>
    <h4 v-else-if="recipe.result.type === 'material'" class="fw-bold">
      {{ recipe.result.amount }}
      {{
        materials.find((material) => material.id === recipe.result.id).symbol
      }}
      {{ materials.find((material) => material.id === recipe.result.id).label }}
    </h4>
    <h4 v-else-if="recipe.result.type === 'arrow'" class="fw-bold">
      {{ recipe.result.amount }}x
      {{ arrows.find((arrow) => arrow.id === recipe.result.id).label }}
    </h4>

    <div
      v-for="(cost, indexMCost) in recipe.materialCosts"
      :key="`recipeMaterialCostId-${cost.id}-indexMaterialCost-${indexMCost}-recipeId-${recipe.id}`"
    >
      <h5>
        {{ materials.find((material) => material.id === cost.id).label
        }}{{ materials.find((material) => material.id === cost.id).symbol }} x{{
          cost.amount
        }}
      </h5>
    </div>

    <h5 v-if="recipe.goldCost > 0">{{ recipe.goldCost }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in recipe.equipmentCosts"
      :key="`recipeEquipmentCostId-${cost.id}-indexEquipmentCost-${indexECost}-recipeId-${recipe.id}`"
    >
      <h5>
        {{ equipments.find((equipment) => equipment.id === cost.id).label }} x{{
          cost.amount
        }}
      </h5>
    </div>

    <br />

    <button
      class="btn btn-success"
      @click="craftItem()"
      :disabled="!affordableRecipe()"
    >
      Craft
    </button>

    <br />
    <br />

    <div v-if="hovering">
      <div v-if="recipe.result.type === 'equipment'">
        <equipment-stats :itemId="recipe.result.id" />
      </div>
      <div v-else-if="recipe.result.type === 'arrow'">
        <arrow-stats :itemId="recipe.result.id" />
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

  props: { recipe: Object },

  methods: {
    craftItem() {
      this.$store.dispatch("craftItem", this.recipe.id);
    },

    affordableRecipe() {
      let result = true;

      if (this.recipe.materialCosts) {
        this.recipe.materialCosts.forEach((materialCost) => {
          if (
            this.materialAmounts.find(
              (materialAmount) => materialAmount.id === materialCost.id
            ).amount < materialCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.recipe.equipmentCosts) {
        this.recipe.equipmentCosts.forEach((equipmentCost) => {
          if (
            this.numberOfEquipment.find(
              (equipmentAmount) => equipmentAmount.id === equipmentCost.id
            ).amount < equipmentCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.recipe.goldCost > this.player.coins) {
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

    recipes() {
      return this.$store.getters.getRecipes;
    },

    arrows() {
      return this.$store.getters.getArrows;
    },

    recipeUnlocks() {
      return this.$store.getters.getRecipeUnlocks;
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

