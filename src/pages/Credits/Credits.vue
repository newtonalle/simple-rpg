<template>
  <div class="text-center">
    <h1>Credits ❤️</h1>
    <h4>📝 Original Game made By Weldenvarden 📝</h4>
    <h4>💻 Online Adaptation made By Notwen 💻</h4>
    <br />
    <h3>
      Special Thanks to everyone who suported us through the making of this
      game!
    </h3>
    <h3>And thank you for playing a for total of {{ timeElapsed }} seconds!</h3>

    <br />
    <br />

    <h3>Saving</h3>
    <input placeholder="Input Save" type="text" v-model="importedSave" />
    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="importGame"
    >
      Import Save
    </button>
    <br />
    <br />
    <input
      v-model="currentSave"
      placeholder="The Exported Save will Appear Here"
    />
    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="exportGame"
    >
      Export Save
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    setIntervalId: 0,
    importedSave: "",
    currentSave: "",
  }),

  computed: {
    gameState() {
      return this.$store.getters.getGameState;
    },

    timeElapsed() {
      return this.$store.getters.getTimeElapsed;
    },
  },

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },

    importGame() {
      this.$store.dispatch("importGame", JSON.parse(this.importedSave));
    },

    exportGame() {
      this.currentSave = JSON.stringify(this.gameState);
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
input {
  width: 300px;
}
</style>