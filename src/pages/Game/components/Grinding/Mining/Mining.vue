<template>
  <div>
    <h2>Mining</h2>
    <p class="fs-5">
      Mining Lvl. {{ playerSkills.mining }} ({{ player.skills.mining }} XP)
    </p>

    <!-- Menu with Current Pickaxe Stats -->

    <div v-if="playerEquipments.pickaxe">
      <p>{{ equippedPlayer.miningSpeed }} ⛏</p>
      <p>{{ equippedPlayer.miningLuck }} 🍀</p>

      <!-- Mine Ore Actions -->
      <div class="row">
        <div
          v-for="(ore, index) in locationOres"
          :key="`${ore.name}-${index}`"
          class="col-4"
        >
          <!-- NON CRIT DESIGN -->

          <!-- <button
            :disabled="player.currentMiningCooldown > 0"
            class="btn btn-secondary"
            @click="mine(ore.id)"
          >
            Mine {{ ore.label }}
            <span v-if="player.currentMiningCooldown > 0"
              >({{ player.currentMiningCooldown }}s)</span
            >
          </button> -->

          <!-- CRIT DESIGN -->

          <button
            :disabled="
              !oreUnlocks.find((oreUnlock) => oreUnlock.id === ore.id).unlocked
            "
            class="btn btn-secondary"
            @click="selectOreId(ore.id)"
          >
            {{ ore.label }}
          </button>
          <br />
          <br />
        </div>
      </div>

      <div v-if="locationOres.length <= 0">
        <p>There is nothing to mine here!</p>
      </div>

      <div v-if="locationOres.length > 0 && selectedOreId > -1">
        <crit-bar
          :speed="17.539999"
          :cooldown="player.currentMiningCooldown"
          :hitText="`Mine ${
            ores.find((ore) => ore.id === selectedOreId).label
          }`"
          :markerId="`mining-0`"
          @critHit="critBarMine"
        />
      </div>
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
import CritBar from "../components/CritBar.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    selectedOreId: -1,
  }),

  components: { CritBar },

  methods: {
    mine(oreId) {
      this.$store.dispatch("mineOre", oreId);
    },

    selectOreId(oreId) {
      this.selectedOreId = oreId;
    },

    critBarMine(hitAccuracy) {
      this.$store.dispatch("critBarMineOre", {
        oreId: this.selectedOreId,
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

    locationOres() {
      return this.$store.getters.getLocationOres;
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
  width: 100%;
}
</style>

