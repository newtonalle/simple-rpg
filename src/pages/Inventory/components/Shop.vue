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
        :key="`${item.name}-index-${index}`"
      >
        <div v-if="shopUnlocks[item.id]">
          <div
            v-if="
              equipments[item.equipmentId].label
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(searchText.toLowerCase().replace(/\s/g, ''))
            "
          >
            <shop-item :item="item" :index="index" />
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
  },
};
</script>

<style 
scoped>
button {
  width: 150px;
}
</style>