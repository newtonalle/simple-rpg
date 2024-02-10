<template>
  <div>
    <h2>Shop</h2>
    <h3>({{ player.coins }}x 🪙)</h3>

    <br />

    <input v-model="searchText" type="text" placeholder="Search" />

    <br />
    <br />

    <div class="row">
      <div
        class="col-12"
        v-for="(item, index) in shop"
        :key="`shopResultId-${item.result.id}-index-${index}`"
      >
        <div
          v-if="
            shopUnlocks.find((shopUnlock) => shopUnlock.id === item.id).unlocked
          "
        >
          <div
            v-if="
              (item.result.type === 'equipment' &&
                equipments
                  .find((equipment) => equipment.id === item.result.id)
                  .label.toLowerCase()
                  .replace(/\s/g, '')
                  .includes(searchText.toLowerCase().replace(/\s/g, ''))) ||
              (item.result.type === 'material' &&
                materials
                  .find((material) => material.id === item.result.id)
                  .label.toLowerCase()
                  .replace(/\s/g, '')
                  .includes(searchText.toLowerCase().replace(/\s/g, ''))) ||
              (item.result.type === 'arrow' &&
                arrows
                  .find((arrow) => arrow.id === item.result.id)
                  .label.toLowerCase()
                  .replace(/\s/g, '')
                  .includes(searchText.toLowerCase().replace(/\s/g, '')))
            "
          >
            <shop-item :item="item" />
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import ShopItem from "./components/ShopItem.vue";

export default {
  components: { ShopItem },

  data: () => ({
    searchText: "",
  }),

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    shop() {
      return this.$store.getters.getShop;
    },

    shopUnlocks() {
      return this.$store.getters.getShopUnlocks;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    arrows() {
      return this.$store.getters.getArrows;
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