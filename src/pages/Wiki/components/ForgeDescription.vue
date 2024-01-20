<template>
  <div>
    <h3 id="forgeSectorWiki">Forge</h3>
    <p>
      The forge can only be accessed in the inventory menu if you are in the
      "The Caves" location
    </p>
    <div class="row">
      <div
        v-for="(forgeCrafting, index) in forge"
        class="col-3"
        :key="`wikiRecipeIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          <span
            style="cursor: pointer"
            @click="
              scrollToElement(`wiki-materials-id-${forgeCrafting.result.id}`)
            "
            v-if="forgeCrafting.result.type === 'material'"
          >
            {{ materials[forgeCrafting.result.id].label
            }}{{ materials[forgeCrafting.result.id].symbol }}
          </span>
          <span
            style="cursor: pointer"
            @click="
              scrollToElement(`wiki-equipment-id-${forgeCrafting.result.id}`)
            "
            v-if="forgeCrafting.result.type === 'equipment'"
          >
            {{ equipments[forgeCrafting.result.id].label }}
          </span>
        </h4>
        <div class="fw-bold">
          <p v-if="forgeCrafting.requiredSkill">
            Requires {{ forgeCrafting.requiredSkill.skill.toUpperCase() }} LVL
            {{ forgeCrafting.requiredSkill.level + 1 }}
          </p>
          <p v-if="forgeCrafting.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                forgeCrafting.requiredMilestoneType,
                forgeCrafting.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="forgeCrafting.requiredCollection">
            Requires
            {{ forgeCrafting.requiredCollection.amount }}
            {{
              materials[
                collections[forgeCrafting.requiredCollection.collectionId]
                  .itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <p>{{ forgeCrafting.baseForgingTime }}s to forge</p>

        <div v-if="forgeCrafting.materialCosts">
          <p class="fw-bold">Material Cost</p>
          <div
            v-for="(
              materialCost, materialCostIndex
            ) in forgeCrafting.materialCosts"
            :key="`forgeWikiIndex+${index}-materialCostIndex-${materialCostIndex}`"
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

        <div v-if="forgeCrafting.equipmentCosts">
          <p class="fw-bold">Equipment Cost</p>
          <div
            v-for="(
              equipmentCost, equipmentCostIndex
            ) in forgeCrafting.equipmentCosts"
            :key="`forgeWikiIndex+${index}-equipmentCostIndex-${equipmentCostIndex}`"
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

        <p v-if="forgeCrafting.goldCost">
          Gold Cost: {{ forgeCrafting.goldCost }} 🪙
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    forge() {
      return this.$store.getters.getForge;
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
  },

  methods: {
    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>