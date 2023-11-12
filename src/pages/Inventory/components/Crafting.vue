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
      <div
        v-for="(recipe, index) in recipes"
        :key="`recipeResultId-${recipe.result.id}-index-${index}`"
      >
        <div v-if="recipesUnlocked[recipe.id]">
          <recipe-item :recipe="recipe" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItem from "./components/RecipeItem.vue";

export default {
  components: { RecipeItem },

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
  },
};
</script>

<style 
scoped>
button {
  width: 150px;
}
</style>