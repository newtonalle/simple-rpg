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

      <div v-for="(plant, index) in plants" :key="`${plant.name}-${index}`">
        <div v-if="plantUnlocks[plant.id]">
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

          <button class="btn btn-success" @click="selectPlant(plant.id)">
            {{ plant.label }}
          </button>
          <br />
          <br />
        </div>
      </div>

      <crit-bar
        :speed="17.539999"
        :cooldown="player.currentForagingCooldown"
        :hitText="`Forage ${plants[selectedPlantId].label}`"
        @critHit="critBarForage"
      />
    </div>

    <!-- Message for missing axe -->

    <p v-if="!playerEquipments.axe">Equip an axe before you can forage!</p>
  </div>
</template>

<script>
import CritBar from "./components/CritBar.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    selectedPlantId: 0,
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

    plantUnlocks() {
      return this.$store.getters.getPlantUnlocks;
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

