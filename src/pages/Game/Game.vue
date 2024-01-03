<template>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <battle />
          <hr class="divider" />
          <mining />
          <hr class="divider" />
          <foraging />
          <hr class="divider" />
          <!--<farming />
          <hr class="divider" />-->
          <!--<fishing />-->
        </div>
        <div class="col-6">
          <inventory :showUnequippedItems="true" :deleteButtonAppear="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Battle from "./components/Grinding/Battle.vue";
import Mining from "./components/Grinding/Mining.vue";
import Foraging from "./components/Grinding/Foraging.vue";
//import Farming from "./components/Grinding/Farming.vue";
import Inventory from "./components/MainInventory/Inventory.vue";
// import Fishing from "./components/Grinding/Fishing.vue";

export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: {
    Battle,
    Mining,
    Foraging,
    /*Farming, */
    /*Fishing,*/
    Inventory,
  },

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    versionUpdate() {
      this.$store.dispatch("versionUpdate");
    },
  },

  created() {
    this.versionUpdate();

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

<style scoped>
button {
  width: 150px;
}
</style>