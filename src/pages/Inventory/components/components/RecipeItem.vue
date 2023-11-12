<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <h4 v-if="recipe.result.type === 'equipment'" class="fw-bold">
      {{ equipments[recipe.result.id].label }}
    </h4>
    <h4 v-else-if="recipe.result.type === 'material'" class="fw-bold">
      {{ materials[recipe.result.id].label }}
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

    <div v-if="hovering && recipe.result.type === 'equipment'">
      <p class="fw-bold">
        {{ equipments[recipe.result.id].typeLabel }}
      </p>
      <p class="fw-bold" v-if="equipments[recipe.result.id].setLabel">
        {{ equipments[recipe.result.id].setLabel }} Set
      </p>
      <p class="fw-bold" v-if="equipments[recipe.result.id].effectLore">
        {{ equipments[recipe.result.id].effectLore }}
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].strengthBonus != 0">
        {{ equipments[recipe.result.id].strengthBonus }} 👊
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].defenseBonus != 0">
        {{ equipments[recipe.result.id].defenseBonus }} 🛡️
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].healthBonus != 0">
        {{ equipments[recipe.result.id].healthBonus }} ❤️
      </p>

      <p
        class="fw-bold"
        v-if="equipments[recipe.result.id].miningSpeedBonus != 0"
      >
        {{ equipments[recipe.result.id].miningSpeedBonus }} ⛏
      </p>

      <p
        class="fw-bold"
        v-if="equipments[recipe.result.id].miningLuckBonus != 0"
      >
        {{ equipments[recipe.result.id].miningLuckBonus }} 🍀
      </p>

      <p
        class="fw-bold"
        v-if="equipments[recipe.result.id].fishingLuckBonus != 0"
      >
        {{ equipments[recipe.result.id].fishingLuckBonus }} 🐟
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].manaCost != 0">
        {{ equipments[recipe.result.id].manaCost }} 🪄
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].healing != 0">
        {{ equipments[recipe.result.id].healing }} ️‍🩹
      </p>

      <p class="fw-bold" v-if="equipments[recipe.result.id].regeneration != 0">
        {{ equipments[recipe.result.id].regeneration }} ️‍💗
      </p>

      <p
        class="fw-bold"
        v-if="equipments[recipe.result.id].critChanceBonus != 0"
      >
        {{ equipments[recipe.result.id].critChanceBonus }}% ️💥🍀
      </p>

      <p
        class="fw-bold"
        v-if="equipments[recipe.result.id].critDamageMultiplierBonus != 0"
      >
        {{ equipments[recipe.result.id].critDamageMultiplierBonus }}x ️💥👊
      </p>
    </div>

    <br />

    <hr class="divider" />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    hovering: false,
  }),

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
          if (
            !this.numberOfEquipment[this.equipments[equipmentCost.id].name] ||
            this.numberOfEquipment[this.equipments[equipmentCost.id].name] <
              equipmentCost.amount
          ) {
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