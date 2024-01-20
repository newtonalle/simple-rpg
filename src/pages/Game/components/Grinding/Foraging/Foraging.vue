<template>
  <div>
    <h2>Foraging</h2>
    <p class="fs-5">
      Foraging Lvl. {{ playerSkills.foraging }} ({{ player.skills.foraging }}
      XP)
    </p>

    <!-- Menu with Current Axe Stats -->

    <div v-if="playerEquipments.axe">
      <p>{{ equippedPlayer.foragingSpeed }} 🪓</p>
      <p>{{ equippedPlayer.foragingLuck }} 🍀</p>

      <!-- Forage Plant Actions -->
      <div class="row">
        <div
          v-for="(plant, index) in locationPlants"
          :key="`${plant.name}-${index}`"
          class="col-4"
        >
          <!-- NON CRIT DESIGN -->

          <!-- <button
            :disabled="player.currentForagingCooldown > 0"
            class="btn btn-secondary"
            @click="forage(index)"
          >
            Forage {{ plant.label }}
            <span v-if="player.currentForagingCooldown > 0"
              >({{ player.currentForagingCooldown }}s)</span
            >
          </button> -->

          <!-- CRIT DESIGN -->

          <button
            :disabled="!plantUnlocks[plant.id]"
            class="btn btn-success"
            @click="selectPlant(plant.id)"
          >
            {{ plant.label }}
          </button>
          <br />
          <br />
        </div>
      </div>
      <div v-if="locationPlants.length <= 0">
        <p>There is nothing to forage here!</p>
      </div>

      <div v-if="locationPlants.length > 0 && selectedPlantId > -1">
        <crit-bar
          :speed="17.539999"
          :cooldown="player.currentForagingCooldown"
          :hitText="`Forage ${plants[selectedPlantId].label}`"
          :markerId="`foraging-0`"
          @critHit="critBarForage"
        />
      </div>
    </div>

    <!-- Message for missing axe -->

    <p v-if="!playerEquipments.axe">Equip an axe before you can forage!</p>

    <br />
    <br />

    <div v-if="foragingLog.length > 0">
      <hr class="divider" />

      <div v-for="(log, index) in foragingLog" :key="`${log}-${index}`">
        <p class="fs-8">{{ log }}</p>
      </div>
      <button style="width: 200px" class="btn btn-danger" @click="clearLog">
        Clear Foraging Log
      </button>
    </div>
  </div>
</template>

<script>
import CritBar from "../components/CritBar.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    selectedPlantId: -1,
  }),

  components: { CritBar },

  methods: {
    forage(plant) {
      this.$store.dispatch("foragePlant", plant);
    },

    selectPlant(plantId) {
      this.selectedPlantId = plantId;
    },

    critBarForage(hitAccuracy) {
      this.$store.dispatch("critBarForagePlant", {
        index: this.selectedPlantId,
        hitAccuracy,
      });
    },

    clearLog() {
      this.$store.dispatch("clearLog", "foragingLog");
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

    plants() {
      return this.$store.getters.getPlants;
    },

    locationPlants() {
      return this.$store.getters.getLocationPlants;
    },

    plantUnlocks() {
      return this.$store.getters.getPlantUnlocks;
    },

    foragingLog() {
      return this.$store.getters.getForagingLog;
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

