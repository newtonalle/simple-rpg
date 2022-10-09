<template>
  <div>
    <h2>Fishing</h2>

    <p class="fs-5">
      Fishing Lvl. {{ playerSkills.fishing }} ({{ player.skills.fishing }} XP)
    </p>

    <!-- Menu with Current Fishing Rod Stats -->

    <div v-if="playerEquipments.rod">
      <p>{{ equippedPlayer.fishingLuck }} 🐟</p>

      <!-- Fishing Actions -->

      <button
        class="btn btn-primary"
        @click="fish"
        :disabled="player.currentFishingCooldown > 0"
      >
        Fish
        <span v-if="player.currentFishingCooldown > 0"
          >({{ player.currentFishingCooldown }}s)</span
        >
      </button>
    </div>
    <div v-if="!playerEquipments.rod">
      <!-- Message for missing fishing rod -->

      <p>Equip a fishing rod before you can fish!</p>
    </div>

    <hr class="divider" />
    <div v-if="fishingLog.length > 0">
      <div v-for="(log, index) in fishingLog" :key="`${log}-${index}`">
        <p>{{ log }}</p>
      </div>
      <button
        style="width: 200px"
        class="btn btn-danger"
        @click="clearFishingLog"
      >
        Clear Fishing Log
      </button>

      <hr class="divider" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fish() {
      this.$store.dispatch("fish");
    },

    clearFishingLog() {
      this.$store.dispatch("clearFishingLog");
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    playerSkills() {
      return this.$store.getters.getPlayerSkillLevel;
    },

    playerEquipments() {
      return this.$store.getters.getPlayerEquipment;
    },

    fishingLog() {
      return this.$store.getters.getFishingLog;
    },

    equippedPlayer() {
      return this.$store.getters.getEquippedPlayer;
    },
  },
};
</script>

<style 
scoped>
button {
  width: 150px;
}
</style>