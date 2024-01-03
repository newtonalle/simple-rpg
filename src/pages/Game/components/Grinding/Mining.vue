<template>
  <div>
    <h2>Mining</h2>
    <p class="fs-5">
      Mining Lvl. {{ playerSkills.mining + 1 }} ({{ player.skills.mining }} XP)
    </p>

    <!-- Menu with Current Pickaxe Stats -->

    <div v-if="playerEquipments.pickaxe">
      <p>{{ equippedPlayer.miningSpeed }} ⛏</p>
      <p>{{ equippedPlayer.miningLuck }} 🍀</p>

      <!-- Mine Ore Actions -->

      <div v-for="(ore, index) in ores" :key="`${ore.name}-${index}`">
        <div v-if="oreUnlocks[ore.id]">
          <!-- NON CRIT DESIGN -->

          <!-- <button
            :disabled="player.currentMiningCooldown > 0"
            class="btn btn-secondary"
            @click="mine(index)"
          >
            Mine {{ ore.label }}
            <span v-if="player.currentMiningCooldown > 0"
              >({{ player.currentMiningCooldown }}s)</span
            >
          </button> -->

          <!-- CRIT DESIGN -->

          <button class="btn btn-secondary" @click="selectOreId(index)">
            {{ ore.label }}
          </button>
          <br />
          <br />
        </div>
      </div>

      <crit-bar
        :speed="17.539999"
        :cooldown="player.currentMiningCooldown"
        :hitText="`Mine ${ores[selectedOreId].label}`"
        :markerId="`mining-0`"
        @critHit="critBarMine"
      />
    </div>

    <!-- Message for missing pickaxe -->

    <p v-if="!playerEquipments.pickaxe">Equip a pickaxe before you can mine!</p>

    <br />
    <br />

    <div v-if="miningLog.length > 0">
      <hr class="divider" />

      <div v-for="(log, index) in miningLog" :key="`${log}-${index}`">
        <p class="fs-8">{{ log }}</p>
      </div>
      <button style="width: 200px" class="btn btn-danger" @click="clearLog">
        Clear Mining Log
      </button>
    </div>
  </div>
</template>

<script>
import CritBar from "./components/CritBar.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    selectedOreId: 0,
  }),

  components: { CritBar },

  methods: {
    mine(ore) {
      this.$store.dispatch("mineOre", ore);
    },

    selectOreId(oreId) {
      this.selectedOreId = oreId;
    },

    critBarMine(hitAccuracy) {
      this.$store.dispatch("critBarMineOre", {
        index: this.selectedOreId,
        hitAccuracy,
      });
    },

    clearLog() {
      this.$store.dispatch("clearLog", "miningLog");
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

    miningLog() {
      return this.$store.getters.getMiningLog;
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

