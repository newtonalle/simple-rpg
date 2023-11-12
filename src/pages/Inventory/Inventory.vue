<template>
  <div class="text-center">
    <h1>Inventory & Shop 👜</h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm"><crafting /></div>
        <div class="col-sm"><materials /></div>
        <div class="col-sm"><shop /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Crafting from "./components/Crafting.vue";
import Materials from "./components/Materials.vue";
import Shop from "./components/Shop.vue";

export default {
  data: () => ({
    setIntervalId: 0,
  }),

  components: { Crafting, Materials, Shop },

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },
  },

  created() {
    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
  },
};
</script>