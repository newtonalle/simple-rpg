<template>
  <div class="text-center">
    <h1>Credits ⚙️</h1>
    <h4>📝 Original Game made By Weldenvarden 📝</h4>
    <h4>💻 Online Adaptation made By Notwen 💻</h4>
    <br />
    <h3>
      Special Thanks to everyone who suported us through the making of this
      game!
    </h3>
    <h3>And thank you for playing a for total of {{ timeElapsed }} seconds!</h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    setIntervalId: 0,
  }),

  computed: {
    timeElapsed() {
      return this.$store.getters.getTimeElapsed;
    },
  },

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