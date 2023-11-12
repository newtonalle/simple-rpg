<template>
  <div>
    <h2>Mining</h2>

    <p class="fs-5">
      Mining Lvl. {{ playerSkills.mining }} ({{ player.skills.mining }} XP)
    </p>

    <!-- Menu with Current Pickaxe Stats -->

    <div v-if="playerEquipments.tool">
      <p>{{ equippedPlayer.miningSpeed }} ⛏</p>
      <p>{{ equippedPlayer.miningLuck }} 🍀</p>

      <!-- Mine Ore Actions -->

      <div v-for="(ore, index) in ores" :key="`${ore.name}-${index}`">
        <div v-if="oreUnlocks[ore.id]">
          <button
            :disabled="player.currentMiningCooldown > 0"
            class="btn btn-secondary"
            @click="mine(index)"
          >
            Mine {{ ore.label }}
            <span v-if="player.currentMiningCooldown > 0"
              >({{ player.currentMiningCooldown }}s)</span
            >
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>

    <!-- Message for missing pickaxe -->

    <p v-if="!playerEquipments.tool">Equip a pickaxe before you can mine!</p>
  </div>
</template>

<script>
export default {
  methods: {
    mine(ore) {
      this.$store.dispatch("mineOre", ore);
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

    equippedPlayer() {
      return this.$store.getters.getEquippedPlayer;
    },

    milestones() {
      return this.$store.getters.getMilestones;
    },

    totalMilestones() {
      return this.$store.getters.getTotalMilestoneStats;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    oreUnlocks() {
      return this.$store.getters.getOreUnlocks;
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