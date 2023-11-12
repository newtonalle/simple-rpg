<template>
  <div>
    <h2>Shop</h2>
    <h3>({{ player.coins }}x 🪙)</h3>

    <br />

    <div class="row">
      <div
        class="col-6"
        v-for="(item, index) in shop"
        :key="`${item.name}-index-${index}`"
      >
        <div v-if="shopUnlocks[item.id]">
          <shop-item :item="item" :index="index" />
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
  },
};
</script>

<style 
scoped>
button {
  width: 150px;
}
</style>