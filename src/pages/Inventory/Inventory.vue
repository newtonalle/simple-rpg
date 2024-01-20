<template>
  <div class="text-center">
    <h1>Inventory 👜</h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm"><crafting /></div>
        <div class="col-sm"><materials /></div>
        <div class="col-sm"><shop /></div>
      </div>
    </div>

    <div v-if="locations[player.currentLocationId].hasForge">
      <forge />
    </div>
  </div>
</template>

<script>
import Crafting from "./components/Crafting.vue";
import Materials from "./components/Materials.vue";
import Shop from "./components/Shop.vue";
import Forge from "./components/Forge.vue";

export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: { Crafting, Materials, Shop, Forge },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    locations() {
      return this.$store.getters.getLocations;
    },
  },

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    leftBossScreen() {
      this.$store.dispatch("changeInBossScreenStatus", false);
    },

    versionUpdate() {
      this.$store.dispatch("versionUpdate");
    },
  },

  created() {
    this.versionUpdate();
    this.leftBossScreen();

    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);

    this.speedSetIntervalId = setInterval(() => {
      this.speedyUpdate();
    }, 100);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
    clearInterval(this.speedSetIntervalId);
  },
};
</script>