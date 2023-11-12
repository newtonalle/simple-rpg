<template>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <battle />
          <hr class="divider" />
          <mining />
          <hr class="divider" />
          <!--<fishing />-->
        </div>
        <div class="col-sm"><inventory /></div>
        <div class="col-sm"><milestones /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Battle from "./components/Grinding/Battle.vue";
import Mining from "./components/Grinding/Mining.vue";
import Milestones from "./components/Milestones/Milestones.vue";
import Inventory from "./components/MainInventory/Inventory.vue";
// import Fishing from "./components/Grinding/Fishing.vue";

export default {
  data: () => ({
    setIntervalId: 0,
  }),

  components: { Battle, Mining, /*Fishing,*/ Milestones, Inventory },

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

<style scoped>
button {
  width: 150px;
}
</style>