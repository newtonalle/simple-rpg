<template>
  <div class="text-center">
    <h3>Attack pattern Builder</h3>

    <br />
    <br />

    <attack-pattern-builder />

    <br />
    <br />

    <hr />

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

    <hr />

    <br />

    <h3>Quick XP</h3>

    <br />

    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="debugGiveXp"
    >
      Gain XP
    </button>

    <br />
    <br />

    <input v-model="skillType" type="text" placeholder="Skill" />

    <br />
    <br />

    <input v-model="xpAmount" type="number" placeholder="Amount" />

    <br />
    <br />

    <hr />

    <br />

    <h3>Quick Coins</h3>

    <br />

    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="debugGiveCoins"
    >
      Gain Coins
    </button>

    <br />
    <br />

    <input v-model="coinsAmount" type="number" placeholder="Amount" />

    <br />
    <br />

    <hr />

    <br />

    <h3>Quick Item</h3>

    <br />

    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="debugGiveItemById"
    >
      Gain Item
    </button>

    <br />
    <br />

    <input v-model="itemId" type="number" placeholder="Item ID" />

    <br />
    <br />

    <hr />

    <br />

    <h3>Quick Material</h3>

    <br />

    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="debugGiveMaterialById"
    >
      Gain Material
    </button>

    <br />
    <br />

    <input v-model="materialId" type="number" placeholder="Material ID" />

    <br />
    <br />

    <input
      v-model="materialsAmount"
      type="number"
      placeholder="Material Amount"
    />

    <br />
    <br />

    <hr />

    <br />

    <h3>Quick Base Player Status</h3>

    <br />

    <p>Status Names (click to select):</p>
    <div class="row">
      <div
        v-for="(status, index) in Object.keys(gameState.player.stats)"
        :key="`debugPageStats-${status}-index-${index}`"
        class="col-3"
      >
        <p
          style="cursor: pointer"
          @click="playerStatus = status"
          v-if="status != 'maxFishingTier' && status != 'temporaryStats'"
        >
          {{ status }}
        </p>
      </div>
    </div>

    <button
      style="margin-left: 20px"
      class="btn btn-success"
      @click="debugChangePlayerStatus"
    >
      Change Status
    </button>

    <br />
    <br />

    <input v-model="playerStatus" placeholder="Player Status" />

    <br />
    <br />

    <input
      v-model="playerStatusAmount"
      type="number"
      placeholder="Status Amount"
    />

    <br />
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
    skillType: "",
    xpAmount: "",
    coinsAmount: "",
    itemId: "",
    materialId: "",
    materialsAmount: "",
    playerStatus: "",
    playerStatusAmount: "",
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

    debugGiveXp() {
      this.$store.dispatch("debugGiveXp", {
        type: this.skillType,
        amount: Number(this.xpAmount),
      });
    },

    debugGiveCoins() {
      this.$store.dispatch("debugGiveCoins", Number(this.coinsAmount));
    },

    debugGiveItemById() {
      this.$store.dispatch("debugGiveItemById", Number(this.itemId));
    },

    debugGiveMaterialById() {
      this.$store.dispatch("debugGiveMaterialById", {
        materialId: Number(this.materialId),
        materialsAmount: Number(this.materialsAmount),
      });
    },

    debugChangePlayerStatus() {
      this.$store.dispatch("debugChangePlayerStatus", {
        status: this.playerStatus,
        amount: Number(this.playerStatusAmount),
      });
    },
  },
};
</script>

<style scoped>
.button {
  width: 150px;
}
</style>