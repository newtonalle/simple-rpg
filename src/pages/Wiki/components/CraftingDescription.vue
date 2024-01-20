<template>
  <div>
    <h3 id="craftingSectorWiki">Crafting</h3>
    <div class="row">
      <div
        v-for="(recipe, index) in recipes"
        class="col-3"
        :key="`wikiRecipeIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-materials-id-${recipe.result.id}`)"
            v-if="recipe.result.type === 'material'"
          >
            {{ recipe.result.amount }} {{ materials[recipe.result.id].symbol }}
            {{ materials[recipe.result.id].label }}
          </span>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-equipment-id-${recipe.result.id}`)"
            v-if="recipe.result.type === 'equipment'"
          >
            {{ recipe.result.amount }}x {{ equipments[recipe.result.id].label }}
          </span>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-arrow-id-${recipe.result.id}`)"
            v-if="recipe.result.type === 'arrow'"
          >
            {{ recipe.result.amount }}x
            {{ arrows[recipe.result.id].label }}
          </span>
        </h4>
        <div class="fw-bold">
          <p v-if="recipe.requiredSkill">
            Requires {{ recipe.requiredSkill.skill.toUpperCase() }} LVL
            {{ recipe.requiredSkill.level + 1 }}
          </p>
          <p v-if="recipe.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                recipe.requiredMilestoneType,
                recipe.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="recipe.requiredCollection">
            Requires
            {{ recipe.requiredCollection.amount }}
            {{
              materials[
                collections[recipe.requiredCollection.collectionId].itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <div v-if="recipe.materialCosts">
          <p class="fw-bold">Material Cost</p>
          <div
            v-for="(materialCost, materialCostIndex) in recipe.materialCosts"
            :key="`recipeWikiIndex+${index}-materialCostIndex-${materialCostIndex}`"
          >
            <p
              style="cursor: pointer"
              @click="scrollToElement(`wiki-materials-id-${materialCost.id}`)"
            >
              {{ materialCost.amount }}
              {{ materials[materialCost.id].symbol }}
              {{ materials[materialCost.id].label }}
            </p>
          </div>
        </div>

        <div v-if="recipe.equipmentCosts">
          <p class="fw-bold">Equipment Cost</p>
          <div
            v-for="(equipmentCost, equipmentCostIndex) in recipe.equipmentCosts"
            :key="`recipeWikiIndex+${index}-equipmentCostIndex-${equipmentCostIndex}`"
          >
            <p
              style="cursor: pointer"
              @click="scrollToElement(`wiki-equipment-id-${equipmentCost.id}`)"
            >
              {{ equipmentCost.amount }}
              {{ equipments[equipmentCost.id].label }}
            </p>
          </div>
        </div>

        <p v-if="recipe.goldCost">Gold Cost: {{ recipe.goldCost }} 🪙</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipes() {
      return this.$store.getters.getRecipes;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    collections() {
      return this.$store.getters.getCollections;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    arrows() {
      return this.$store.getters.getArrows;
    },
  },

  methods: {
    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>