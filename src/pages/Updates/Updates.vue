<template>
  <div class="text-center">
    <h1>Updates 📰</h1>

    <br />
    <hr />

    <update4 />

    <hr />

    <update3 />

    <hr />

    <update2 />

    <hr />

    <update1 />
  </div>
</template>

<script>
import Update1 from "./components/Update1_1.vue";
import Update2 from "./components/Update1_2.vue";
import Update3 from "./components/Update1_2_1.vue";
import Update4 from "./components/Update1_2_2.vue";
export default {
  data: () => ({
    popout: [false, false, false],
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: { Update1, Update2, Update3, Update4 },

  methods: {
    popoutUpdate(index) {
      this.popout[index] = !this.popout[index];
      this.popout.push();
    },

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