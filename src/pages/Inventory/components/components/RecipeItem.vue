<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="recipe.result.type === 'equipment'" class="fw-bold">
      {{ recipe.result.amount }}x {{ equipments[recipe.result.id].label }}
    </h4>
    <h4 v-else-if="recipe.result.type === 'material'" class="fw-bold">
      {{ recipe.result.amount }} {{ materials[recipe.result.id].symbol }}
      {{ materials[recipe.result.id].label }}
    </h4>
    <h4 v-else-if="recipe.result.type === 'arrow'" class="fw-bold">
      {{ recipe.result.amount }}x {{ arrows[recipe.result.id].label }}
    </h4>

    <div
      v-for="(cost, indexMCost) in recipe.materialCosts"
      :key="`recipeMaterialCostId-${cost.id}-indexMaterialCost-${indexMCost}-index-${index}`"
    >
      <h5>
        {{ materials[cost.id].label }}{{ materials[cost.id].symbol }} x{{
          cost.amount
        }}
      </h5>
    </div>

    <h5 v-if="recipe.goldCost > 0">{{ recipe.goldCost }}x 🪙</h5>

    <div
      v-for="(cost, indexECost) in recipe.equipmentCosts"
      :key="`recipeEquipmentCostId-${cost.id}-indexEquipmentCost-${indexECost}-index-${index}`"
    >
      <h5>{{ equipments[cost.id].label }} x{{ cost.amount }}</h5>
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

  props: { recipe: Object, index: Number },

  methods: {
    craftItem() {
      this.$store.dispatch("craftItem", this.index);
    },

    affordableRecipe() {
      let result = true;

      if (this.recipes[this.index].materialCosts) {
        this.recipes[this.index].materialCosts.forEach((materialCost) => {
          if (this.materialAmounts[materialCost.id] < materialCost.amount) {
            result = false;
          }
        });
      }

      if (this.recipes[this.index].equipmentCosts) {
        this.recipes[this.index].equipmentCosts.forEach((equipmentCost) => {
          if (this.numberOfEquipment[equipmentCost.id] < equipmentCost.amount) {
            result = false;
          }
        });
      }

      if (this.recipes[this.index].goldCost > this.player.coins) {
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

    recipesUnlocked() {
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

