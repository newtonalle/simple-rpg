<template>
  <div class="text-center">
    <h1>Milestones & Collections</h1>
    <br />
    <div class="row">
      <div class="col-3"></div>
      <div class="col-3">
        <milestones />
      </div>
      <div class="col-3">
        <collections />
      </div>
    </div>
  </div>
</template>

<script>
import Milestones from "./components/Milestones.vue";
import Collections from "./components/Collections.vue";
export default {
  data: () => ({ setIntervalId: 0, speedSetIntervalId: 1 }),

  components: { Milestones, Collections },

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