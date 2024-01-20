<template>
  <div>
    <h3 id="shopSectorWiki">Shop</h3>
    <div class="row">
      <div
        v-for="(shopItem, index) in shop"
        class="col-3"
        :key="`wikiShopIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-materials-id-${shopItem.result.id}`)"
            v-if="shopItem.result.type === 'material'"
          >
            {{ shopItem.result.amount }}
            {{ materials[shopItem.result.id].symbol }}
            {{ materials[shopItem.result.id].label }}
          </span>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-equipment-id-${shopItem.result.id}`)"
            v-if="shopItem.result.type === 'equipment'"
          >
            {{ shopItem.result.amount }}x
            {{ equipments[shopItem.result.id].label }}
          </span>
          <span
            style="cursor: pointer"
            @click="scrollToElement(`wiki-arrow-id-${shopItem.result.id}`)"
            v-if="shopItem.result.type === 'arrow'"
          >
            {{ shopItem.result.amount }}x
            {{ arrows[shopItem.result.id].label }}
          </span>
        </h4>
        <div class="fw-bold">
          <p v-if="shopItem.requiredSkill">
            Requires {{ shopItem.requiredSkill.skill.toUpperCase() }} LVL
            {{ shopItem.requiredSkill.level + 1 }}
          </p>
          <p v-if="shopItem.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                shopItem.requiredMilestoneType,
                shopItem.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="shopItem.requiredCollection">
            Requires
            {{ shopItem.requiredCollection.amount }}
            {{
              materials[
                collections[shopItem.requiredCollection.collectionId].itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <p v-if="shopItem.goldPrice">{{ shopItem.goldPrice }} 🪙</p>

        <div v-if="shopItem.materialPrices">
          <p class="fw-bold">Material Price</p>
          <div
            v-for="(
              materialPrice, materialPriceIndex
            ) in shopItem.materialPrices"
            :key="`shopWikiIndex+${index}-materialPriceIndex-${materialPriceIndex}`"
          >
            <p
              style="cursor: pointer"
              @click="scrollToElement(`wiki-materials-id-${materialPrice.id}`)"
            >
              {{ materialPrice.amount }}
              {{ materials[materialPrice.id].symbol }}
              {{ materials[materialPrice.id].label }}
            </p>
          </div>
        </div>

        <div v-if="shopItem.equipmentPrices">
          <p class="fw-bold">Equipment Price</p>
          <div
            v-for="(
              equipmentPrice, equipmentPriceIndex
            ) in shopItem.equipmentPrices"
            :key="`shopWikiIndex+${index}-equipmentPriceIndex-${equipmentPriceIndex}`"
          >
            <p
              style="cursor: pointer"
              @click="scrollToElement(`wiki-equipment-id-${equipmentPrice.id}`)"
            >
              {{ equipmentPrice.amount }}
              {{ equipments[equipmentPrice.id].label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shop() {
      return this.$store.getters.getShop;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    collections() {
      return this.$store.getters.getCollections;
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