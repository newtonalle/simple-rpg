<template>
  <div class="text-center">
    <h3>Attack pattern Builder</h3>

    <br />
    <br />

    <attack-pattern-builder />

    <br />
    <br />

    <h3>Save</h3>

    <br />
    <br />

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

    <br />
    <br />
  </div>
</template>

<script>
import AttackPatternBuilder from "../../helpers/AttackPatternBuilder.vue";
export default {
  data: () => ({
    importedSave: "",
    currentSave: "",
  }),

  components: { AttackPatternBuilder },

  computed: {
    gameState() {
      return this.$store.getters.getGameState;
    },
  },

  methods: {
    importGame() {
      this.$store.dispatch("importGame", JSON.parse(this.importedSave));
    },

    exportGame() {
      this.currentSave = JSON.stringify(this.gameState);
    },
  },
};
</script>