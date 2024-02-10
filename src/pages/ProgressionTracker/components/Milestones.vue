<template>
  <div>
    <h2>Milestones</h2>
    <br />
    <h4>Combat Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.enemies"
      :key="`milestoneEnemies-${index}`"
    >
      <div
        v-if="
          enemyUnlocks.find(
            (enemyUnlock) => enemyUnlock.id === milestone.enemyId
          ).unlocked
        "
      >
        {{
          milestoneAmounts.enemies.find(
            (milestoneAmount) => milestoneAmount.id === milestone.id
          ).amount
        }}🗡️
        {{ enemies.find((enemy) => enemy.id === milestone.enemyId).label }}
      </div>
    </div>
    <br />
    <h4>Mining Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.mining"
      :key="`milestoneMining-${index}`"
    >
      <div
        v-if="
          oreUnlocks.find((oreUnlock) => oreUnlock.id === milestone.oreId)
            .unlocked
        "
      >
        {{
          milestoneAmounts.mining.find(
            (milestoneAmount) => milestoneAmount.id === milestone.id
          ).amount
        }}⛏
        {{ ores.find((ore) => ore.id === milestone.oreId).label }}
      </div>
    </div>
    <br />
    <h4>Foraging Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.foraging"
      :key="`milestoneForaging-${index}`"
    >
      <div
        v-if="
          plantUnlocks.find(
            (plantUnlock) => plantUnlock.id === milestone.plantId
          ).unlocked
        "
      >
        {{
          milestoneAmounts.foraging.find(
            (milestoneAmount) => milestoneAmount.id === milestone.id
          ).amount
        }}🪓
        {{ plants.find((plant) => plant.id === milestone.plantId).label }}
      </div>
    </div>
    <br />
    <!-- 
    <h4>Farming Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.farming"
      :key="`milestoneFarming-${index}`"
    >
    <div
        v-if="
          cropUnlocks.find(
            (cropUnlock) => cropUnlock.id === milestone.cropId
          ).unlocked
        "
      >
        {{
          milestoneAmounts.farming.find(
            (milestoneAmount) => milestoneAmount.id === milestone.id
          ).amount
        }}🌱
        {{ crops.find((crop) => crop.id === milestone.cropId).label }}
      </div>
    </div>
    <br />
    -->
  </div>
</template>

<script>
export default {
  computed: {
    enemies() {
      return this.$store.getters.getEnemies;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    plants() {
      return this.$store.getters.getPlants;
    },

    crops() {
      return this.$store.getters.getCrops;
    },

    milestones() {
      return this.$store.getters.getMilestones;
    },

    milestoneAmounts() {
      return this.$store.getters.getMilestoneAmounts;
    },

    enemyUnlocks() {
      return this.$store.getters.getEnemyUnlocks;
    },

    oreUnlocks() {
      return this.$store.getters.getOreUnlocks;
    },

    plantUnlocks() {
      return this.$store.getters.getPlantUnlocks;
    },

    cropUnlocks() {
      return this.$store.getters.getCropUnlocks;
    },
  },
};
</script>