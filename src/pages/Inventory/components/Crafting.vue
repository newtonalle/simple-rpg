<template>
  <div>
    <h2>Crafting</h2>
    <br />
    <div
      v-if="
        recipes.findIndex((recipe) => {
          return recipe.unlocked;
        }) === -1
      "
    >
      <p class="fs-5">No recipes unlocked!</p>
    </div>

    <div
      v-if="
        recipes.findIndex((recipe) => {
          return recipe.unlocked;
        }) > -1
      "
    >
      <div
        v-for="(recipe, index) in recipes"
        :key="`${recipe.result.name}-${index}`"
      >
        <div v-if="recipe.unlocked">
          <h4 class="fw-bold">{{ recipe.result.label }}</h4>

          <div
            v-for="(cost, indexMCost) in recipe.materialCosts"
            :key="`${cost.material.name}-${indexMCost}`"
          >
            <h5>
              {{ materials[cost.material.type][cost.material.name].label
              }}{{
                materials[cost.material.type][cost.material.name].symbol
              }}
              x{{ cost.amount }}
            </h5>
          </div>

          <h5 v-if="recipe.goldCost > 0">{{ recipe.goldCost }}x 🪙</h5>

          <div
            v-for="(cost, indexECost) in recipe.equipmentCosts"
            :key="`${cost.name}-${indexECost}`"
          >
            <h5>
              {{ cost.label }}
              x{{ cost.amount }}
            </h5>
          </div>

          <br />

          <button
            class="btn btn-success"
            @click="craftItem(index)"
            :disabled="!affordableRecipe(index)"
          >
            Craft
          </button>
          <hr class="divider" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    craftItem(recipeIndex) {
      this.$store.dispatch("craftItem", recipeIndex);
    },

    affordableRecipe(recipeIndex) {
      let result = true;

      if (this.recipes[recipeIndex].materialCosts) {
        this.recipes[recipeIndex].materialCosts.forEach((materialCost) => {
          if (
            this.materials[materialCost.material.type][
              materialCost.material.name
            ].amount < materialCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.recipes[recipeIndex].equipmentCosts) {
        this.recipes[recipeIndex].equipmentCosts.forEach((equipmentCost) => {
          if (
            !this.numberOfEquipment[equipmentCost.name] ||
            this.numberOfEquipment[equipmentCost.name].amount <
              equipmentCost.amount
          ) {
            result = false;
          }
        });
      }

      if (this.recipes[recipeIndex].goldCost > this.player.coins) {
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

    recipes() {
      return this.$store.getters.getRecipes;
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