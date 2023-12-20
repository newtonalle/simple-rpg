<template>
  <div>
    <h2>Crafting</h2>
    <br />
    <div
      v-if="
        recipesUnlocked.findIndex((recipeUnlocked) => {
          return recipeUnlocked;
        }) === -1
      "
    >
      <p class="fs-5">No recipes unlocked!</p>
    </div>
    <div v-else>
      <input v-model="searchText" type="text" placeholder="Search" />

      <br />
      <br />

      <div
        v-for="(recipe, index) in recipes"
        :key="`recipeResultId-${recipe.result.id}-index-${index}`"
      >
        <div v-if="recipesUnlocked[recipe.id]">
          <div
            v-if="
              (recipe.result.type === 'equipment' &&
                equipments[recipe.result.id].label
                  .toLowerCase()
                  .replace(/\s/g, '')
                  .includes(searchText.toLowerCase().replace(/\s/g, ''))) ||
              (recipe.result.type === 'material' &&
                materials[recipe.result.id].label
                  .toLowerCase()
                  .replace(/\s/g, '')
                  .includes(searchText.toLowerCase().replace(/\s/g, '')))
            "
          >
            <recipe-item :recipe="recipe" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItem from "./components/RecipeItem.vue";

export default {
  components: { RecipeItem },

  data: () => ({
    searchText: "",
  }),

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    recipes() {
      return this.$store.getters.getRecipes;
    },

    recipesUnlocked() {
      return this.$store.getters.getRecipeUnlocks;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    materials() {
      return this.$store.getters.getMaterials;
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