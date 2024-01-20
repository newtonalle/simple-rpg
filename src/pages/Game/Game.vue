<template>
  <div class="text-center">
    <locations />
    <br />
    <br />
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
          <equipments :showUnequippedItems="true" :deleteButtonAppear="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Locations from "./components/Locations/Locations.vue";
import Battle from "./components/Grinding/Combat/Combat.vue";
import Mining from "./components/Grinding/Mining/Mining.vue";
import Foraging from "./components/Grinding/Foraging/Foraging.vue";
//import Farming from "./components/Grinding/Farming/Farming.vue";
import Equipments from "./components/Equipments/Equipments.vue";
// import Fishing from "./components/Grinding/Fishing/Fishing.vue";

export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: {
    Locations,
    Battle,
    Mining,
    Foraging,
    /*Farming, */
    /*Fishing,*/
    Equipments,
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

<style scoped>
button {
  width: 150px;
}
</style>