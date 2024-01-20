<template>
  <div>
    <h2>Farming</h2>
    <p class="fs-5">
      Farming Lvl. {{ playerSkills.farming }} ({{ player.skills.farming }}
      XP)
    </p>

    <p>{{ equippedPlayer.farmingLuck }} 🍀</p>

    <br />

    <h4>
      Stock ({{
        farmingStatus.maxCropPlotSize - farmingStatus.cropPlots.length
      }}
      plots)
    </h4>
    <div
      v-for="(crop, index) in crops"
      :key="`stockCropIndex-${index}-cropId-${crop.id}`"
    >
      <div v-if="cropUnlocks[crop.id]">
        <p>
          {{ crop.label }} {{ crop.seedLabel }} x{{
            materialAmounts[crop.seedId]
          }}
        </p>
        <button
          class="btn btn-success"
          @click="plantCrop(crop.id)"
          :disabled="
            materialAmounts[crop.seedId] <= 0 ||
            farmingStatus.cropPlots.length >= farmingStatus.maxCropPlotSize
          "
        >
          Plant x1
        </button>
        <br />
        <br />
      </div>
    </div>

    <br />

    <h4>Farm Plot</h4>

    <br />

    <div class="row">
      <div
        v-for="(crop, index) in farmingStatus.cropPlots"
        :key="`cropPlotIndex-${index}-cropId-${crop.id}`"
        class="col-sm"
      >
        <p>
          <span v-if="crop.growthTimer > 0">Growing</span>
          {{ crops[crop.id].label }}
          {{ crops[crop.id].growingIcon }}
          <span v-if="crop.growthTimer > 0"> ({{ crop.growthTimer }}s)</span>
        </p>
        <button
          :disabled="crop.growthTimer > 0"
          @click="harvestPlot(index)"
          class="btn btn-success"
        >
          Harvest
        </button>
        <br />
        <br />
      </div>
    </div>

    <div v-if="farmingStatus.cropPlots.length <= 0">
      <p>Currently Empty!</p>
    </div>

    <br />
    <br />

    <div v-if="farmingLog.length > 0">
      <hr class="divider" />

      <div v-for="(log, index) in farmingLog" :key="`${log}-${index}`">
        <p class="fs-8">{{ log }}</p>
      </div>
      <button style="width: 200px" class="btn btn-danger" @click="clearLog">
        Clear Farming Log
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    plantCrop(cropId) {
      this.$store.dispatch("plantCrop", cropId);
    },

    harvestPlot(index) {
      this.$store.dispatch("harvestPlot", index);
    },

    clearLog() {
      this.$store.dispatch("clearLog", "farmingLog");
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    playerSkills() {
      return this.$store.getters.getPlayerSkillLevel;
    },

    equippedPlayer() {
      return this.$store.getters.getEquippedPlayer;
    },

    playerEquipments() {
      return this.$store.getters.getPlayerEquipment;
    },

    crops() {
      return this.$store.getters.getCrops;
    },

    cropUnlocks() {
      return this.$store.getters.getCropUnlocks;
    },

    farmingStatus() {
      return this.$store.getters.getFarmingStatus;
    },

    materialAmounts() {
      return this.$store.getters.getMaterialAmounts;
    },

    farmingLog() {
      return this.$store.getters.getFarmingLog;
    },
  },
};
</script>